import {useState, useRef, useEffect, useCallback} from 'react'

import axios, {AxiosRequestConfig} from 'axios'
import {useNavigate} from "react-router-dom"
import {message} from "../utils/message";

function useRequest<T>(option: AxiosRequestConfig & { manual?: boolean}) {
  const navigate = useNavigate()
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState("")
  const [loaded, setLoaded] = useState(false)
  const controllerRef = useRef(new AbortController())

  // 取消请求发送
  const cancel = () => {
    controllerRef.current.abort()
  }
  const request = useCallback(
    async (requestOptions?:AxiosRequestConfig) => {
    // 清空之前的请求状态和数据
    setData(null)
    setError("")
    setLoaded(false)

    const loginToken = localStorage.getItem("token")
    const headers = loginToken? {token: loginToken}: {};

    try {
      // 发送请求
      const response = await axios.request<T>({
        ...requestOptions,
        signal: controllerRef.current.signal,
        headers
      })
      setData(response.data)
      return response.data;
    }catch (e: any){
      if (e?.response?.status === 403) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      setError(e.message || "unknow requset error.");
      throw new Error(e);
    }finally {
      setLoaded(true);
    }
  }, [navigate])

  useEffect(() => {
    if(option.manual) {
      request(option).catch(e => {
        message(e.message)
      })
    }
  }, [option, request]);

  return {data, error, loaded, request, cancel}
}

export  default useRequest

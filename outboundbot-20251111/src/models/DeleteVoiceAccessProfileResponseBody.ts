// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVoiceAccessProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * 返回码
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  data?: string;
  /**
   * @remarks
   * HTTP状态码
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * Instance does not exist. Instance=ob-9876543210.
   */
  message?: string;
  /**
   * @remarks
   * 错误信息中的变量值列表
   */
  params?: string[];
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * 是否调用成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


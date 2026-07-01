// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求状态码。
   * 
   * * 返回OK代表请求成功。
   * * 其他错误码，请参见[API错误码](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 状态码的描述。
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * 签名名称。
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


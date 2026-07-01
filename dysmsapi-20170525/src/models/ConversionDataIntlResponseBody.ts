// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversionDataIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * 状态码。取值：
   * 
   * - OK：代表请求成功。
   * 
   * - 其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/101346.html)。
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
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


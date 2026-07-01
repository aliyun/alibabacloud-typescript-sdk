// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求状态码。
   * 
   * - 返回OK代表请求成功。
   * - 其他错误码，请参见[API错误码](https://help.aliyun.com/document_detail/101346.html)。
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
   * CCA2BCFF-2BA7-427C-90EE-AC6994748607
   */
  requestId?: string;
  /**
   * @remarks
   * 已删除的模板Code。
   * 
   * @example
   * SMS_152550****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * * The value OK indicates that the request was successful.
   * * For other error codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The SMS template code.
   * 
   * After submitting the template application, you can use the SMS template code to query the template review details through the [QuerySmsTemplate](https://help.aliyun.com/document_detail/419289.html) operation. You can also [configure receipt messages](https://help.aliyun.com/document_detail/101508.html) and obtain the template review status messages through [TemplateSmsReport](https://help.aliyun.com/document_detail/120999.html).
   * 
   * @example
   * SMS_46817****
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


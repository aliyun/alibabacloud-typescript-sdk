// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCardSmsTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The code for the card SMS template. You can view the **Template Code** on the **Card SMS** > [template management](https://dysms.console.aliyun.com/domestic/card) page in the console.
   * 
   * > The card SMS template must be approved before it can be used.
   * 
   * @example
   * CARD_SMS_2****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateCardSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. Valid values:
   * 
   * - OK: The request was successful.
   * 
   * - For a list of other error codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the operation.
   */
  data?: CreateCardSmsTemplateResponseBodyData;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCardSmsTemplateResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


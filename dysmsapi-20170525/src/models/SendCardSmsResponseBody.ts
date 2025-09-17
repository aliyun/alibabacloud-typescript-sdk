// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCardSmsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the card message.
   * 
   * @example
   * 123
   */
  bizCardId?: string;
  /**
   * @remarks
   * The ID of the digital message.
   * 
   * @example
   * 232
   */
  bizDigitalId?: string;
  /**
   * @remarks
   * The ID of the text message.
   * 
   * @example
   * 524
   */
  bizSmsId?: string;
  /**
   * @remarks
   * The review status of the card message template.
   * 
   * *   **0**: pending approval
   * *   **1**: approved
   * *   **2**: rejected
   * 
   * > Unapproved card messages are rolled back.
   * 
   * @example
   * 0
   */
  cardTmpState?: number;
  /**
   * @remarks
   * The mobile phone number from which the card message is sent.
   * 
   * @example
   * 1390000****
   */
  mediaMobiles?: string;
  /**
   * @remarks
   * The mobile phone number whose card message is rolled back.
   * 
   * @example
   * 1390000****
   */
  notMediaMobiles?: string;
  static names(): { [key: string]: string } {
    return {
      bizCardId: 'BizCardId',
      bizDigitalId: 'BizDigitalId',
      bizSmsId: 'BizSmsId',
      cardTmpState: 'CardTmpState',
      mediaMobiles: 'MediaMobiles',
      notMediaMobiles: 'NotMediaMobiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCardId: 'string',
      bizDigitalId: 'string',
      bizSmsId: 'string',
      cardTmpState: 'number',
      mediaMobiles: 'string',
      notMediaMobiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: SendCardSmsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D28D0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      data: SendCardSmsResponseBodyData,
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


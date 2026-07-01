// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendBatchCardSmsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the card SMS sending task.
   * 
   * @example
   * 123
   */
  bizCardId?: string;
  /**
   * @remarks
   * The ID of the digital SMS sending task.
   * 
   * @example
   * 3214
   */
  bizDigitalId?: string;
  /**
   * @remarks
   * The ID of the text SMS sending task.
   * 
   * @example
   * 3256
   */
  bizSmsId?: string;
  /**
   * @remarks
   * The review status of the card SMS template. Valid values:
   * - **0**: Under review.
   * - **1**: Approved.
   * - **2**: Rejected.
   * > For SMS messages that are rejected, you can configure the fallback process by using the **FallbackType** parameter.
   * 
   * @example
   * 0
   */
  cardTmpState?: number;
  /**
   * @remarks
   * The mobile phone numbers that receive the card SMS messages.
   * 
   * @example
   * 1390000****
   */
  mediaMobiles?: string;
  /**
   * @remarks
   * The fallback phone numbers.
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

export class SendBatchCardSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * * If **OK** is returned, the request is successful.
   * * For information about other error codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: SendBatchCardSmsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - **true**: The call is successful.
   * 
   * - **false**: The call fails.
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
      data: SendBatchCardSmsResponseBodyData,
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


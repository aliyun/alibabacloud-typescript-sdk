// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeIntentionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Analysis process.
   * 
   * @example
   * 客户回答的内容与提供的意图列表描述均不匹配，没有表达出对账单、还款、天气或其他服务的具体需求或问题。
   */
  analysisProcess?: string;
  /**
   * @remarks
   * Intent code.
   * 
   * @example
   * -1
   */
  intentionCode?: string;
  /**
   * @remarks
   * Intent name.
   * 
   * @example
   * 其它
   */
  intentionName?: string;
  /**
   * @remarks
   * Intent script.
   * 
   * @example
   * 朱先生，理解您可能对天气感兴趣，但更重要的是您的账户情况。请让我们专注于您未偿还的款项，这对您的信用健康至关重要。
   */
  intentionScript?: string;
  /**
   * @remarks
   * Recommended intent.
   * 
   * @example
   * 客户试图回避谈论逾期还款的话题
   */
  recommendIntention?: string;
  /**
   * @remarks
   * Recommended script.
   * 
   * @example
   * 朱先生，理解您可能对天气感兴趣，但更重要的是您的账户情况。请让我们专注于您未偿还的款项，这对您的信用健康至关重要。
   */
  recommendScript?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      intentionCode: 'string',
      intentionName: 'string',
      intentionScript: 'string',
      recommendIntention: 'string',
      recommendScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Processing time in milliseconds.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data.
   */
  data?: RecognizeIntentionResponseBodyData;
  /**
   * @remarks
   * Data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 003D019A-1BB3-53EC-A0D2-CE76DA5D73B1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp.
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: RecognizeIntentionResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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


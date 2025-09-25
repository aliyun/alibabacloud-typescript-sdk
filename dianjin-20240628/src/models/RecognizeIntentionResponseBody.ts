// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeIntentionResponseBodyData extends $dara.Model {
  analysisProcess?: string;
  /**
   * @example
   * 1
   */
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  recommendIntention?: string;
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
   * @example
   * null
   */
  cost?: number;
  data?: RecognizeIntentionResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 003D019A-1BB3-53EC-A0D2-CE76DA5D73B1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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


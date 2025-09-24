// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPrepaidCardsResponseBodyDataPrepaidCard extends $dara.Model {
  /**
   * @remarks
   * The services to which the prepaid card is applicable.
   * 
   * @example
   * All Alibaba Cloud services
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The scenario to which the prepaid card is applicable.
   * 
   * @example
   * test
   */
  applicableScenarios?: string;
  /**
   * @remarks
   * The balance of the prepaid card.
   * 
   * @example
   * 100.00
   */
  balance?: string;
  /**
   * @remarks
   * The time when the prepaid card took effect.
   * 
   * @example
   * 2018-08-03T01:39:11Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the prepaid card expired.
   * 
   * @example
   * 2019-08-04T01:39:11Z
   */
  expiryTime?: string;
  /**
   * @remarks
   * The time when the prepaid card was issued.
   * 
   * @example
   * 2018-08-03T01:39:11Z
   */
  grantedTime?: string;
  /**
   * @remarks
   * The nominal value of the prepaid card.
   * 
   * @example
   * 100.00
   */
  nominalValue?: string;
  /**
   * @remarks
   * The ID of the prepaid card.
   * 
   * @example
   * 213432432
   */
  prepaidCardId?: number;
  /**
   * @remarks
   * The number of the prepaid card.
   * 
   * @example
   * Q-7edaab979fc9
   */
  prepaidCardNo?: string;
  /**
   * @remarks
   * The status of the prepaid card. Valid values:
   * 
   * *   Available: The prepaid card is valid.
   * *   Expired: The prepaid card expired.
   * *   Cancelled: The prepaid card is invalid.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      applicableScenarios: 'ApplicableScenarios',
      balance: 'Balance',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      prepaidCardId: 'PrepaidCardId',
      prepaidCardNo: 'PrepaidCardNo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      applicableScenarios: 'string',
      balance: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      prepaidCardId: 'number',
      prepaidCardNo: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBodyData extends $dara.Model {
  prepaidCard?: QueryPrepaidCardsResponseBodyDataPrepaidCard[];
  static names(): { [key: string]: string } {
    return {
      prepaidCard: 'PrepaidCard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prepaidCard: { 'type': 'array', 'itemType': QueryPrepaidCardsResponseBodyDataPrepaidCard },
    };
  }

  validate() {
    if(Array.isArray(this.prepaidCard)) {
      $dara.Model.validateArray(this.prepaidCard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryPrepaidCardsResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7EA6C02D-06D0-4213-9C3B-E67910F7D1EB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPrepaidCardsResponseBodyData,
      message: 'string',
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


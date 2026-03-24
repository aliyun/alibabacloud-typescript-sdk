// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of accounts associated with the monitored APIs.
   * 
   * @example
   * 1
   */
  account?: number;
  /**
   * @remarks
   * The number of handled items.
   * 
   * @example
   * 1
   */
  actioned?: number;
  /**
   * @remarks
   * The number of APIs that are monitored by the API security module.
   * 
   * @example
   * 202
   */
  api?: number;
  /**
   * @remarks
   * The number of confirmed items.
   * 
   * @example
   * 11
   */
  confirmed?: number;
  /**
   * @remarks
   * The number of domain names that are monitored by the API security module.
   * 
   * @example
   * 22
   */
  domain?: number;
  /**
   * @remarks
   * The number of items that are manually verified as fixed.
   * 
   * @example
   * 13
   */
  fixed?: number;
  /**
   * @remarks
   * The number of high-risk items.
   * 
   * @example
   * 135
   */
  high?: number;
  /**
   * @remarks
   * The number of ignored items.
   * 
   * @example
   * 3
   */
  ignore?: number;
  /**
   * @remarks
   * The number of low-risk items.
   * 
   * @example
   * 160
   */
  low?: number;
  /**
   * @remarks
   * The number of medium-risk items.
   * 
   * @example
   * 27
   */
  medium?: number;
  /**
   * @remarks
   * The number of items that are verified as not fixed.
   * 
   * @example
   * 0
   */
  notFixed?: number;
  /**
   * @remarks
   * The number of items that are verified as fixed by the system.
   * 
   * @example
   * 1
   */
  systemFixed?: number;
  /**
   * @remarks
   * The number of items to be confirmed.
   * 
   * @example
   * 295
   */
  toBeConfirmed?: number;
  /**
   * @remarks
   * The number of items to be fixed.
   * 
   * @example
   * 3
   */
  toBeFixed?: number;
  /**
   * @remarks
   * The number of items to be verified by the system.
   * 
   * @example
   * 2
   */
  toBeVerified?: number;
  /**
   * @remarks
   * The number of new high-risk items detected today.
   * 
   * @example
   * 3
   */
  todayHigh?: string;
  /**
   * @remarks
   * The number of new low-risk items detected today.
   * 
   * @example
   * 0
   */
  todayLow?: number;
  /**
   * @remarks
   * The number of new medium-risk items detected today.
   * 
   * @example
   * 0
   */
  todayMedium?: string;
  /**
   * @remarks
   * The total number of new items detected today.
   * 
   * @example
   * 3
   */
  todayTotal?: string;
  /**
   * @remarks
   * The total number of items.
   * 
   * > This is the sum of the values of the **High**, **Medium**, and **Low** response parameters.
   * 
   * @example
   * 322
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      actioned: 'Actioned',
      api: 'Api',
      confirmed: 'Confirmed',
      domain: 'Domain',
      fixed: 'Fixed',
      high: 'High',
      ignore: 'Ignore',
      low: 'Low',
      medium: 'Medium',
      notFixed: 'NotFixed',
      systemFixed: 'SystemFixed',
      toBeConfirmed: 'ToBeConfirmed',
      toBeFixed: 'ToBeFixed',
      toBeVerified: 'ToBeVerified',
      todayHigh: 'TodayHigh',
      todayLow: 'TodayLow',
      todayMedium: 'TodayMedium',
      todayTotal: 'TodayTotal',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'number',
      actioned: 'number',
      api: 'number',
      confirmed: 'number',
      domain: 'number',
      fixed: 'number',
      high: 'number',
      ignore: 'number',
      low: 'number',
      medium: 'number',
      notFixed: 'number',
      systemFixed: 'number',
      toBeConfirmed: 'number',
      toBeFixed: 'number',
      toBeVerified: 'number',
      todayHigh: 'string',
      todayLow: 'number',
      todayMedium: 'string',
      todayTotal: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistical results of API security risks or events.
   */
  data?: DescribeApisecStatisticsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 221F0F14-54C6-59A1-9967-72***81B61A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeApisecStatisticsResponseBodyData,
      requestId: 'string',
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


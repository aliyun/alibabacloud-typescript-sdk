// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecStatisticsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  account?: number;
  /**
   * @remarks
   * The number of handled events.
   * 
   * @example
   * 1
   */
  actioned?: number;
  /**
   * @remarks
   * The number of APIs.
   * 
   * @example
   * /api/v1/login
   */
  api?: number;
  /**
   * @remarks
   * The number of confirmed events.
   * 
   * @example
   * 10
   */
  confirmed?: number;
  /**
   * @remarks
   * The number of domain names.
   * 
   * @example
   * a.aliyun.com
   */
  domain?: number;
  /**
   * @remarks
   * The number of fixed risks.
   * 
   * @example
   * 0
   */
  fixed?: number;
  /**
   * @remarks
   * The number of high-risk events.
   * 
   * @example
   * 10
   */
  high?: number;
  /**
   * @remarks
   * The number of ignored risks.
   * 
   * @example
   * 0
   */
  ignore?: number;
  /**
   * @remarks
   * The number of low-risk events.
   * 
   * @example
   * 10
   */
  low?: number;
  /**
   * @remarks
   * The number of moderate-risk events.
   * 
   * @example
   * 10
   */
  medium?: number;
  /**
   * @example
   * 0
   */
  notFixed?: number;
  /**
   * @example
   * 1
   */
  systemFixed?: number;
  /**
   * @remarks
   * The number of events to be confirmed.
   * 
   * @example
   * 10
   */
  toBeConfirmed?: number;
  /**
   * @remarks
   * The number of risks to be fixed.
   * 
   * @example
   * 10
   */
  toBeFixed?: number;
  /**
   * @example
   * 2
   */
  toBeVerified?: number;
  /**
   * @remarks
   * The number of new high-risk events today.
   * 
   * @example
   * 10
   */
  todayHigh?: string;
  /**
   * @remarks
   * The number of new low-risk events today.
   * 
   * @example
   * 10
   */
  todayLow?: number;
  /**
   * @remarks
   * The number of new moderate-risk events today.
   * 
   * @example
   * 10
   */
  todayMedium?: string;
  /**
   * @remarks
   * The total number of new events today.
   * 
   * @example
   * 30
   */
  todayTotal?: string;
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 30
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
   * The returned results.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecStatisticsResponseBodyData extends $dara.Model {
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
      actioned: 'Actioned',
      api: 'Api',
      confirmed: 'Confirmed',
      domain: 'Domain',
      fixed: 'Fixed',
      high: 'High',
      ignore: 'Ignore',
      low: 'Low',
      medium: 'Medium',
      toBeConfirmed: 'ToBeConfirmed',
      toBeFixed: 'ToBeFixed',
      todayHigh: 'TodayHigh',
      todayLow: 'TodayLow',
      todayMedium: 'TodayMedium',
      todayTotal: 'TodayTotal',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actioned: 'number',
      api: 'number',
      confirmed: 'number',
      domain: 'number',
      fixed: 'number',
      high: 'number',
      ignore: 'number',
      low: 'number',
      medium: 'number',
      toBeConfirmed: 'number',
      toBeFixed: 'number',
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


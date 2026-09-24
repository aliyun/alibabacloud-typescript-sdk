// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuthUserConnectDurationListRequest extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for connection duration. This parameter is used together with Threshold to filter users by a threshold. Valid values:
   * 
   * - GreaterThanThreshold: greater than the threshold.
   * - LessThanThreshold: less than the threshold.
   * 
   * @example
   * GreaterThanThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The date for the statistics, in the yyyy-MM-dd format. If this parameter is left empty, statistics from the previous day are returned by default.
   * 
   * @example
   * 2026-06-24
   */
  dataDate?: string;
  /**
   * @remarks
   * Specifies whether to query only Active Directory (AD) users. This parameter is required when UserName or WithDetail is specified.
   */
  isAdUser?: boolean;
  /**
   * @remarks
   * The paging token. This parameter is used only when statistics are collected by individual session details (StatisticType=SingleSession). You do not need to specify this parameter for the first request. For subsequent requests, set this parameter to the NextToken value returned in the previous response to retrieve the next page.
   * 
   * @example
   * d129c6c0e8c04c8a9f0e2b7c1a3f5e6d
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1. This parameter takes effect only when statistics are collected by daily cumulative duration (StatisticType=Daily).
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100. Maximum value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The statistics type. Valid values:
   * 
   * - Daily: collects statistics by daily cumulative connection duration. This is the default value.
   * - SingleSession: collects statistics by individual session details.
   * 
   * @example
   * Daily
   */
  statisticType?: string;
  /**
   * @remarks
   * The connection duration threshold, in seconds. This parameter must be used together with ComparisonOperator.
   * 
   * @example
   * 3600
   */
  threshold?: number;
  /**
   * @remarks
   * The name of the end user. Fuzzy match is supported. When you use this parameter, you must also specify IsAdUser.
   * 
   * @example
   * alice
   */
  userName?: string;
  /**
   * @remarks
   * Specifies whether to backfill user details such as display name and nickname. This parameter supports both AD users and convenience users. When you use this parameter, you must also specify IsAdUser.
   */
  withDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      dataDate: 'DataDate',
      isAdUser: 'IsAdUser',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statisticType: 'StatisticType',
      threshold: 'Threshold',
      userName: 'UserName',
      withDetail: 'WithDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      dataDate: 'string',
      isAdUser: 'boolean',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      statisticType: 'string',
      threshold: 'number',
      userName: 'string',
      withDetail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


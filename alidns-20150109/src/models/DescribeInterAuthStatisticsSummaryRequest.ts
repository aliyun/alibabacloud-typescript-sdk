// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * - DESC (default): descending order
   * 
   * - ASC: ascending order.
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in milliseconds.
   * >Warning: If the query time range is large and the domain name has an excessive volume of resolution logs, the query may time out or return inaccurate results..
   * 
   * @example
   * 1741526400000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Used for the report of subdomain names with sudden increases or decreases in request volume.
   * 
   * @example
   * up
   * down
   */
  growType?: string;
  /**
   * @remarks
   * The sort parameter. Valid values:
   * - createDate: sorts by creation time (default if left empty)
   * - expireDate: sorts by expiration time.
   * 
   * @example
   * default
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The sampling period. Valid values:
   * 
   * - DAY: day
   * 
   * - WEEK: week
   * 
   * - MONTH: month.
   * 
   * @example
   * DAY
   */
  period?: string;
  /**
   * @remarks
   * The DNS response code.
   * 
   * @example
   * 0
   */
  rcode?: string;
  /**
   * @remarks
   * The region of the resolution cluster.
   * 
   * @example
   * ap-southeast-3
   */
  serverRegion?: string;
  /**
   * @remarks
   * The route type. Valid values: cloud: cloud route. local: on-premises route.
   * 
   * @example
   * File
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1516779348000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The type of statistical metric.
   * 
   * @example
   * QTYPE_RATIO
   * 枚举值：
   * QTYPE_RATIO：DNS请求记录类型占比
   * RCODE_DOMAIN：否定应答域名TOP排行
   * RCODE_SOURCE_IP：某否定应答域名的请求源地址TOP排行
   * REQUEST_ZONE：域名请求量排行（zone级别）
   * REQUEST_DOMAIN：子域名请求量排行（domain name级别）
   * SOURCE_REGION：请求来源地域分布
   * SOURCE_ISP：请求来源运营商（ISP）分布
   * SOURCE_IP：请求源IP详情（含地域、运营商、占比）
   * LINE_HIT：解析线路命中详情
   * LINE_RATIO：解析线路流量占比
   */
  statisticalType?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      endTimestamp: 'EndTimestamp',
      growType: 'GrowType',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      period: 'Period',
      rcode: 'Rcode',
      serverRegion: 'ServerRegion',
      sourceType: 'SourceType',
      startTimestamp: 'StartTimestamp',
      statisticalType: 'StatisticalType',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      endTimestamp: 'number',
      growType: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      period: 'string',
      rcode: 'string',
      serverRegion: 'string',
      sourceType: 'string',
      startTimestamp: 'number',
      statisticalType: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.<props="china">You can get this value by calling the [DescribeDomains](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c4g.11186623.help-menu-search-29697.d_0) operation.
   * <props="intl">You can get this value by calling the [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation.
   * 
   * @example
   * dns-example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a Unix timestamp in milliseconds.
   * >Warning: A large time range for a domain with a high volume of resolution logs may cause query timeouts or inaccurate results.
   * 
   * @example
   * 1741526400000
   */
  endTimestamp?: number;
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
   * The server region.
   * 
   * @example
   * ap-southeast-3
   */
  serverRegion?: string;
  /**
   * @remarks
   * The start of the time range to query. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1474335170000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The statistical metric type.
   * 
   * @example
   * PROTOCOL
   * 其它：
   * PROTOCOL：DNS请求UDP协议、TCP协议维度统计（仅全局域名统计）
   * QTYPE：DNS请求记录类型分布，如A、AAAA、CNAME、MX 等
   * RCODE：DNS否定应答统计
   * SUCCESS_RATIO：SUCCESS_RATIO：平均解析成功率（解析成功率 = 返回与请求记录类型（QTYPE）匹配的有效应答次数 / 总解析次数）
   * REQUEST：DNS请求量统计，展示QPS查询趋势
   */
  statisticalType?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * lisheng999.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTimestamp: 'EndTimestamp',
      rcode: 'Rcode',
      serverRegion: 'ServerRegion',
      startTimestamp: 'StartTimestamp',
      statisticalType: 'StatisticalType',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTimestamp: 'number',
      rcode: 'string',
      serverRegion: 'string',
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


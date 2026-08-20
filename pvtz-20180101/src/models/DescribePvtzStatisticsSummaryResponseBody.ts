// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsSummaryResponseBodyPageData extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp for the start of the current statistical period, rounded down to the minute.
   * 
   * @example
   * 1776774900000
   */
  aggrTimestamp?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * lb-ni1iadds-2c8uyzvgrm5ftsnq.clb.gz-tencentclb.com
   */
  domainName?: string;
  /**
   * @remarks
   * The fluctuation rate.
   * 
   * @example
   * 19
   */
  fluctuationValue?: number;
  /**
   * @remarks
   * The average resolution latency, in milliseconds (ms).
   * 
   * @example
   * 30
   */
  latency?: number;
  /**
   * @remarks
   * The resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The statistics module.
   * 
   * @example
   * AUTHORITY
   */
  module?: string;
  /**
   * @remarks
   * The value from the previous statistical period.
   * 
   * @example
   * 2227
   */
  previousCount?: number;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * UDP
   */
  protocol?: string;
  /**
   * @remarks
   * The DNS query type.
   * 
   * @example
   * A
   */
  qtype?: string;
  /**
   * @remarks
   * The success rate.
   * 
   * @example
   * 30
   */
  ratio?: number;
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
   * The source IP address of the request.
   * 
   * @example
   * 110.19.60.72
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source ISP of the request.
   * 
   * @example
   * telecom
   */
  sourceIsp?: string;
  /**
   * @remarks
   * The source region of the request.
   * 
   * @example
   * cn-beijing
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1uvv79h1t8unnzdh3nq
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone. The operation\\"s behavior depends on whether you specify this parameter:
   * 
   * - If you specify a ZoneId, the operation returns the change log of DNS records for that zone.<br>
   * 
   * - If you omit ZoneId, the operation returns the change log of all zone operations and DNS resolution changes for all zones in your account.
   * 
   * @example
   * 479226c2db1f9bed449b0502c13bcd9d
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * bwcj.biz
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      aggrTimestamp: 'AggrTimestamp',
      count: 'Count',
      domainName: 'DomainName',
      fluctuationValue: 'FluctuationValue',
      latency: 'Latency',
      line: 'Line',
      module: 'Module',
      previousCount: 'PreviousCount',
      protocol: 'Protocol',
      qtype: 'Qtype',
      ratio: 'Ratio',
      rcode: 'Rcode',
      sourceIp: 'SourceIp',
      sourceIsp: 'SourceIsp',
      sourceRegion: 'SourceRegion',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggrTimestamp: 'number',
      count: 'number',
      domainName: 'string',
      fluctuationValue: 'number',
      latency: 'number',
      line: 'string',
      module: 'string',
      previousCount: 'number',
      protocol: 'string',
      qtype: 'string',
      ratio: 'number',
      rcode: 'string',
      sourceIp: 'string',
      sourceIsp: 'string',
      sourceRegion: 'string',
      vpcId: 'string',
      zoneId: 'string',
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

export class DescribePvtzStatisticsSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  curPage?: number;
  /**
   * @remarks
   * A list of statistical entries for the current page.
   */
  pageData?: DescribePvtzStatisticsSummaryResponseBodyPageData[];
  /**
   * @remarks
   * The number of entries per page. The maximum value is **100**. The default value is **10**.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0FCB52A-D512-41A0-8595-40234EDCFD8B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 11
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      curPage: 'CurPage',
      pageData: 'PageData',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curPage: 'number',
      pageData: { 'type': 'array', 'itemType': DescribePvtzStatisticsSummaryResponseBodyPageData },
      pageSize: 'number',
      requestId: 'string',
      totalPage: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


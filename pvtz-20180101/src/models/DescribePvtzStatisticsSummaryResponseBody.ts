// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsSummaryResponseBodyPageData extends $dara.Model {
  /**
   * @example
   * 1776774900000
   */
  aggrTimestamp?: number;
  /**
   * @example
   * 4
   */
  count?: number;
  /**
   * @example
   * lb-ni1iadds-2c8uyzvgrm5ftsnq.clb.gz-tencentclb.com
   */
  domainName?: string;
  /**
   * @example
   * 19
   */
  fluctuationValue?: number;
  /**
   * @example
   * 30
   */
  latency?: number;
  /**
   * @example
   * default
   */
  line?: string;
  /**
   * @example
   * AUTHORITY
   */
  module?: string;
  /**
   * @example
   * 2227
   */
  previousCount?: number;
  /**
   * @example
   * UDP
   */
  protocol?: string;
  /**
   * @example
   * A
   */
  qtype?: string;
  /**
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @example
   * 0
   */
  rcode?: string;
  /**
   * @example
   * 110.19.60.72
   */
  sourceIp?: string;
  /**
   * @example
   * telecom
   */
  sourceIsp?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceRegion?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-bp1uvv79h1t8unnzdh3nq
   */
  vpcId?: string;
  /**
   * @example
   * 479226c2db1f9bed449b0502c13bcd9d
   */
  zoneId?: string;
  /**
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
   * @example
   * 1
   */
  curPage?: number;
  pageData?: DescribePvtzStatisticsSummaryResponseBodyPageData[];
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F0FCB52A-D512-41A0-8595-40234EDCFD8B
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalPage?: number;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsSummaryResponseBodyPageData extends $dara.Model {
  /**
   * @remarks
   * The start time of the current period (the 0th second of the minute).
   * 
   * @example
   * 1776754800000
   */
  aggrTimestamp?: number;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The domain name. Queries the transfer records of the specified domain name.
   * 
   * @example
   * nervermsf.com
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
   * The resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The value of the previous period.
   * 
   * @example
   * 2227
   */
  previousCount?: number;
  /**
   * @remarks
   * The protocol type of the DNS resolution query request. Valid values:
   * 
   * - UDP
   * 
   * - TCP.
   * 
   * @example
   * TCP%DF\\"
   */
  protocol?: string;
  /**
   * @remarks
   * The request record type.
   * 
   * @example
   * A
   */
  qtype?: string;
  /**
   * @remarks
   * The success rate or proportion.
   * 
   * @example
   * 20
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
   * The source IP address.
   * 
   * @example
   * 112.16.17.203
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ISP of the request source.
   * 
   * @example
   * telecom
   */
  sourceIsp?: string;
  /**
   * @remarks
   * The source region for copying the image. If not specified, a random region is selected.
   * 
   * @example
   * cn-shenzhen
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * longzi.xyz
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      aggrTimestamp: 'AggrTimestamp',
      count: 'Count',
      domainName: 'DomainName',
      fluctuationValue: 'FluctuationValue',
      line: 'Line',
      previousCount: 'PreviousCount',
      protocol: 'Protocol',
      qtype: 'Qtype',
      ratio: 'Ratio',
      rcode: 'Rcode',
      sourceIp: 'SourceIp',
      sourceIsp: 'SourceIsp',
      sourceRegion: 'SourceRegion',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggrTimestamp: 'number',
      count: 'number',
      domainName: 'string',
      fluctuationValue: 'number',
      line: 'string',
      previousCount: 'number',
      protocol: 'string',
      qtype: 'string',
      ratio: 'number',
      rcode: 'string',
      sourceIp: 'string',
      sourceIsp: 'string',
      sourceRegion: 'string',
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

export class DescribeInterAuthStatisticsSummaryResponseBody extends $dara.Model {
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
   * The paginated data.
   */
  pageData?: DescribeInterAuthStatisticsSummaryResponseBodyPageData[];
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 853805EA-3D47-47D5-9A1A-A45C24313ABD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 5
   */
  totalPage?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 48
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
      pageData: { 'type': 'array', 'itemType': DescribeInterAuthStatisticsSummaryResponseBodyPageData },
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


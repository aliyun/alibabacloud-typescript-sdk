// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsSummaryResponseBodyPageData extends $dara.Model {
  /**
   * @example
   * 1776754800000
   */
  aggrTimestamp?: number;
  /**
   * @example
   * 20
   */
  count?: number;
  /**
   * @example
   * nervermsf.com
   */
  domainName?: string;
  /**
   * @example
   * 19
   */
  fluctuationValue?: number;
  /**
   * @example
   * default
   */
  line?: string;
  /**
   * @example
   * 2227
   */
  previousCount?: number;
  /**
   * @example
   * TCP%DF\\"
   */
  protocol?: string;
  /**
   * @example
   * A
   */
  qtype?: string;
  /**
   * @example
   * 20
   */
  ratio?: number;
  /**
   * @example
   * 0
   */
  rcode?: string;
  /**
   * @example
   * 112.16.17.203
   */
  sourceIp?: string;
  /**
   * @example
   * telecom
   */
  sourceIsp?: string;
  /**
   * @example
   * cn-shenzhen
   */
  sourceRegion?: string;
  /**
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
   * @example
   * 1
   */
  curPage?: number;
  pageData?: DescribeInterAuthStatisticsSummaryResponseBodyPageData[];
  /**
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
   * @example
   * 5
   */
  totalPage?: number;
  /**
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


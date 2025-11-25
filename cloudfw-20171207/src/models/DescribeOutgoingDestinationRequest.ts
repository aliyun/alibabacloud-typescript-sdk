// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationRequest extends $dara.Model {
  /**
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @example
   * AliYun
   */
  categoryId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * 47.100.111XXX
   */
  dstIP?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1749089441
   */
  endTime?: string;
  /**
   * @example
   * true
   */
  isAITraffic?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 3306
   */
  port?: string;
  /**
   * @example
   * 10.111.53XXX
   */
  privateIP?: string;
  /**
   * @example
   * 47.96.74.XXX
   */
  publicIP?: string;
  /**
   * @example
   * pass
   */
  securitySuggest?: string;
  /**
   * @example
   * InBytes
   */
  sort?: string;
  /**
   * @example
   * 106.3.198.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1749657600
   */
  startTime?: string;
  /**
   * @example
   * FirstFlow
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      applicationName: 'ApplicationName',
      categoryId: 'CategoryId',
      currentPage: 'CurrentPage',
      dstIP: 'DstIP',
      endTime: 'EndTime',
      isAITraffic: 'IsAITraffic',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      port: 'Port',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      securitySuggest: 'SecuritySuggest',
      sort: 'Sort',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      applicationName: 'string',
      categoryId: 'string',
      currentPage: 'string',
      dstIP: 'string',
      endTime: 'string',
      isAITraffic: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      port: 'string',
      privateIP: 'string',
      publicIP: 'string',
      securitySuggest: 'string',
      sort: 'string',
      sourceIp: 'string',
      startTime: 'string',
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


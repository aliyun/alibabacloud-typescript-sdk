// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationRequest extends $dara.Model {
  /**
   * @remarks
   * The policy coverage status.
   * 
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * AliYun
   */
  categoryId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The legacy destination IP parameter.
   * 
   * > The POP gateway passes this parameter through, but the backend of this operation does not read it. Specifying this parameter has no filtering effect. To filter by IP address, use PublicIP or PrivateIP. If only DstIP is specified, the operation returns MissingParameter.IpFilter (-340415) because no valid IP filtering parameter is provided.
   * 
   * @example
   * 47.100.111XXX
   */
  dstIP?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749089441
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to collect statistics only on traffic that accesses AI services. Default value: false.
   * 
   * @example
   * true
   */
  isAITraffic?: string;
  /**
   * @remarks
   * The language type of the received message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The private IP address.
   * > At least one of PublicIP and PrivateIP must be specified.
   * 
   * @example
   * 10.111.53XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The public IP address.
   * > At least one of PublicIP and PrivateIP must be specified.
   * 
   * @example
   * 47.96.74.XXX
   */
  publicIP?: string;
  /**
   * @remarks
   * The security policy for the Outbound Domain.
   * 
   * @example
   * pass
   */
  securitySuggest?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * InBytes
   */
  sort?: string;
  /**
   * @remarks
   * The IP address of the access source. **[Deprecated]**
   * 
   * @example
   * 106.3.198.XXX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749657600
   */
  startTime?: string;
  /**
   * @remarks
   * The tag ID.
   * 
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


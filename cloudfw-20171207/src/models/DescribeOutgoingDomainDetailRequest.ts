// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The policy coverage status to filter by.
   * 
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The domain name to query.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * A list of domain names to query.
   */
  domainList?: string[];
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1733450528
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address type. Set to `NatPrivate` to query details for outbound connections that originate from a private IP address via a NAT Gateway.
   * 
   * @example
   * NatPrivate
   */
  IPType?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-uf62zzi7000bca7zn****
   */
  natGatewayId?: string;
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
   * The number of entries to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The private IP address to query.
   * 
   * @example
   * 10.210.0.XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The public IP address to query.
   * 
   * @example
   * 47.96.181.XXX
   */
  publicIP?: string;
  /**
   * @remarks
   * The field to sort the results by.
   * 
   * @example
   * OutBytes
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 121.15.137.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range to query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1753617600
   */
  startTime?: string;
  /**
   * @remarks
   * The tag ID to filter by.
   * 
   * @example
   * FirstFlow
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      currentPage: 'CurrentPage',
      domain: 'Domain',
      domainList: 'DomainList',
      endTime: 'EndTime',
      IPType: 'IPType',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      order: 'Order',
      pageSize: 'PageSize',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      sort: 'Sort',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      currentPage: 'string',
      domain: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      IPType: 'string',
      lang: 'string',
      natGatewayId: 'string',
      order: 'string',
      pageSize: 'string',
      privateIP: 'string',
      publicIP: 'string',
      sort: 'string',
      sourceIp: 'string',
      startTime: 'string',
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


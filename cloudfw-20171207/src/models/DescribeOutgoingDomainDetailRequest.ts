// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainDetailRequest extends $dara.Model {
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
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The destination domain name to query. You must specify at least one of Domain or DomainList. If neither is specified, the API returns ErrorDomainName.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The list of destination domain names to query. You must specify at least one of Domain or DomainList. If neither is specified, the API returns ErrorDomainName.
   */
  domainList?: string[];
  /**
   * @remarks
   * The end time of the query. Specify the value as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1733450528
   */
  endTime?: string;
  /**
   * @remarks
   * Queries outbound connections from NAT private IP addresses.
   * 
   * @example
   * NatPrivate
   */
  IPType?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.210.0.XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.96.181.XXX
   */
  publicIP?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * OutBytes
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 121.15.137.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the query. Specify the value as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1753617600
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


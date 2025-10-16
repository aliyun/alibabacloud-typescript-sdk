// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainDetailRequest extends $dara.Model {
  /**
   * @example
   * FullCoverage
   */
  aclCoverage?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * example.com
   */
  domain?: string;
  domainList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1733450528
   */
  endTime?: string;
  /**
   * @example
   * NatPrivate
   */
  IPType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * ngw-uf62zzi7000bca7zn****
   */
  natGatewayId?: string;
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
   * 10.210.0.XXX
   */
  privateIP?: string;
  /**
   * @example
   * 47.96.181.XXX
   */
  publicIP?: string;
  /**
   * @example
   * OutBytes
   */
  sort?: string;
  /**
   * @example
   * 121.15.137.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1753617600
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPDetailRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34.136.111.XXX
   */
  dstIP?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1733710383
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
   * ngw-2zed6z6qkd7ogc****
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
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @example
   * InBytes
   */
  sort?: string;
  /**
   * @example
   * 1.202.193.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1749434787
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
      dstIP: 'DstIP',
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
      dstIP: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The ACK cluster ID.
   * 
   * @example
   * 0E0C30C977463****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the ACK cluster connector.
   * 
   * @example
   * test
   */
  connectorName?: string;
  /**
   * @remarks
   * The language in which the unhealthy reason of the ACK cluster connector health status is displayed.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the account to which the ACK cluster resource belongs.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceRegionList](~~DescribeAccessInstanceRegionList~~): Queries the list of synchronization node regions.
   * 
   * > For more information about the regions supported by ACK cluster connectors in Cloud Firewall, see [ACK cluster synchronization nodes](https://help.aliyun.com/document_detail/2865120.html).
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance to which the ACK cluster belongs.
   * 
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectorName: 'ConnectorName',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectorName: 'string',
      lang: 'string',
      memberUid: 'string',
      pageNo: 'string',
      pageSize: 'string',
      regionNo: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


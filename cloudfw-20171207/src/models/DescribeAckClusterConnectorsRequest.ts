// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster.
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
   * The language type for displaying the error reason for the ACK cluster connector\\"s health status.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID to which the ACK cluster resource belongs.
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
   * The region ID of the ACK cluster connector. Source of values:
   * 
   * - [DescribeAccessInstanceRegionList](~~DescribeAccessInstanceRegionList~~): Query the list of synchronization node regions.
   * 
   * > For more information about the regions supported by Cloud Firewall for ACK cluster connectors, see [ACK Cluster Synchronization Nodes](https://help.aliyun.com/document_detail/2865120.html).
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The VPC instance ID to which the ACK cluster belongs.
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


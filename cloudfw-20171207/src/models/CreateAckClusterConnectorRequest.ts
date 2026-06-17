// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAckClusterConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster.
   * 
   * - Call the [DescribeAckClusters](~~DescribeAckClusters~~) operation to query the list of ACK clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * cb0f5640b1b2d404cad6ba21509d7847b
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the ACK cluster connector. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ack-cluster-connector-name
   */
  connectorName?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the account to which the ACK cluster belongs.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch for the ACK cluster connector.
   * 
   * - Call the [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~) operation to query the list of vSwitches for synchronization nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2zerfbbje7dvnbii2****
   */
  primaryVswitchId?: string;
  /**
   * @remarks
   * The IP address of the primary vSwitch for the ACK cluster connector.
   * 
   * @example
   * 10.100.1.1
   */
  primaryVswitchIp?: string;
  /**
   * @remarks
   * The region ID of the ACK cluster connector.
   * 
   * - Call the [DescribeAccessInstanceRegionList](~~DescribeAccessInstanceRegionList~~) operation to query the list of regions for synchronization nodes.
   * 
   * > For more information about the regions that Cloud Firewall supports for ACK cluster connectors, see [ACK cluster synchronization nodes](https://help.aliyun.com/document_detail/2865120.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the standby vSwitch for the ACK cluster connector.
   * 
   * - Call the [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~) operation to query the list of vSwitches for synchronization nodes.
   * 
   * @example
   * vsw-2ze2gtlfozrab01cfo****
   */
  standbyVswitchId?: string;
  /**
   * @remarks
   * The IP address of the standby vSwitch for the ACK cluster connector.
   * 
   * @example
   * 10.100.2.1
   */
  standbyVswitchIp?: string;
  /**
   * @remarks
   * The synchronization interval for the ACK cluster connector. Valid values: 2 to 60. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectorName: 'ConnectorName',
      memberUid: 'MemberUid',
      primaryVswitchId: 'PrimaryVswitchId',
      primaryVswitchIp: 'PrimaryVswitchIp',
      regionNo: 'RegionNo',
      standbyVswitchId: 'StandbyVswitchId',
      standbyVswitchIp: 'StandbyVswitchIp',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectorName: 'string',
      memberUid: 'string',
      primaryVswitchId: 'string',
      primaryVswitchIp: 'string',
      regionNo: 'string',
      standbyVswitchId: 'string',
      standbyVswitchIp: 'string',
      ttl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


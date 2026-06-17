// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAckClusterConnectorResponseBodyAckClusterConnector extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster. You can call the [DescribeAckClusters](~~DescribeAckClusters~~) operation to query the list of ACK clusters.
   * 
   * - [DescribeAckClusters](~~DescribeAckClusters~~): Queries a list of ACK clusters.
   * 
   * @example
   * c57ecf39ff32c415e8549a7df27a7e947
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the ACK cluster.
   * 
   * @example
   * ack-cluster-name
   */
  clusterName?: string;
  /**
   * @remarks
   * The health check status of the ACK cluster connector.
   * 
   * @example
   * healthy
   */
  connectorHealthCheckStatus?: string;
  /**
   * @remarks
   * The ID of the ACK cluster connector. You can call the [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~) operation to query the list of ACK cluster connectors.
   * 
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): Queries a list of ACK cluster connectors.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @remarks
   * The name of the ACK cluster connector. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * ack-cluster-connector-name
   */
  connectorName?: string;
  /**
   * @remarks
   * The instance status of the ACK cluster connector.
   * 
   * @example
   * ready
   */
  connectorStatus?: string;
  /**
   * @remarks
   * The UNIX timestamp when the ACK cluster connector was created. Unit: seconds.
   * 
   * @example
   * 1724982259
   */
  createTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID (UID) of the account to which the ACK cluster resources belong.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The primary vSwitch of the ACK cluster connector. You can call the [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~) operation to query the list of vSwitches for synchronization nodes.
   * 
   * - [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~): Queries a list of vSwitches for synchronization nodes.
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
   * The zone of the primary vSwitch for the ACK cluster connector. You can call the [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~) operation to query the list of zones for synchronization nodes.
   * 
   * - [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~): Queries in batches the list of zones for the vSwitches of sync nodes.
   * 
   * @example
   * cn-beijing-g
   */
  primaryVswitchZoneId?: string;
  /**
   * @remarks
   * The region ID of the ACK cluster connector. You can call the [DescribeAccessInstanceRegionList](~~DescribeAccessInstanceRegionList~~) operation to query the list of regions for synchronization nodes.
   * 
   * - [DescribeAccessInstanceRegionList](~~DescribeAccessInstanceRegionList~~): Queries the list of sync node regions.
   * 
   * > For more information about the regions that Cloud Firewall supports for ACK cluster connectors, see [ACK cluster synchronization nodes](https://help.aliyun.com/document_detail/2865120.html).
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The standby vSwitch of the ACK cluster connector. You can call the [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~) operation to query the list of vSwitches for synchronization nodes.
   * 
   * - [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~): Batch queries the list of vSwitches for synchronization nodes.
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
   * The zone of the standby vSwitch for the ACK cluster connector. You can call the [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~) operation to query the list of zones for synchronization nodes.
   * 
   * - [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~): Batch queries the list of zones for the vSwitches of synchronization nodes.
   * 
   * @example
   * cn-beijing-h
   */
  standbyVswitchZoneId?: string;
  /**
   * @remarks
   * The synchronization interval for the ACK cluster connector. Valid values: 2 to 60. Unit: seconds.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The ID of the VPC to which the ACK cluster belongs.
   * 
   * @example
   * vpc-j6cvhdscntzuvr0x****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      connectorHealthCheckStatus: 'ConnectorHealthCheckStatus',
      connectorId: 'ConnectorId',
      connectorName: 'ConnectorName',
      connectorStatus: 'ConnectorStatus',
      createTime: 'CreateTime',
      memberUid: 'MemberUid',
      primaryVswitchId: 'PrimaryVswitchId',
      primaryVswitchIp: 'PrimaryVswitchIp',
      primaryVswitchZoneId: 'PrimaryVswitchZoneId',
      regionNo: 'RegionNo',
      standbyVswitchId: 'StandbyVswitchId',
      standbyVswitchIp: 'StandbyVswitchIp',
      standbyVswitchZoneId: 'StandbyVswitchZoneId',
      ttl: 'Ttl',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      connectorHealthCheckStatus: 'string',
      connectorId: 'string',
      connectorName: 'string',
      connectorStatus: 'string',
      createTime: 'string',
      memberUid: 'string',
      primaryVswitchId: 'string',
      primaryVswitchIp: 'string',
      primaryVswitchZoneId: 'string',
      regionNo: 'string',
      standbyVswitchId: 'string',
      standbyVswitchIp: 'string',
      standbyVswitchZoneId: 'string',
      ttl: 'number',
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

export class UpdateAckClusterConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACK cluster connector.
   */
  ackClusterConnector?: UpdateAckClusterConnectorResponseBodyAckClusterConnector;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D16AADE-DA2E-5CAB-AA3B-AA197D97****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ackClusterConnector: 'AckClusterConnector',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackClusterConnector: UpdateAckClusterConnectorResponseBodyAckClusterConnector,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ackClusterConnector && typeof (this.ackClusterConnector as any).validate === 'function') {
      (this.ackClusterConnector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


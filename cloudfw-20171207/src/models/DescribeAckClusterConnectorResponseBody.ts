// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorResponseBodyAckClusterConnector extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster. You can call the following API operation to obtain the value:
   * - [DescribeAckClusters](~~DescribeAckClusters~~): Queries a list of ACK clusters.
   * 
   * @example
   * c857d908016794125883a9ee8196cba17
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
   * The ID of the ACK cluster connector. You can call the following API operation to obtain the value:
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): Queries a list of ACK cluster connectors.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @remarks
   * The name of the ACK cluster connector. The name must be 1 to 64 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
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
   * The timestamp when the ACK cluster connector was created. Unit: seconds.
   * 
   * @example
   * 1724982259
   */
  createTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the ACK cluster resources belong.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch for the ACK cluster connector. You can call the following API operation to obtain the value:
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
   * The zone ID of the primary vSwitch for the ACK cluster connector. You can call the following API operation to obtain the value:
   * - [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~): Queries a list of zones for the vSwitches of synchronization nodes.
   * 
   * @example
   * cn-beijing-g
   */
  primaryVswitchZoneId?: string;
  /**
   * @remarks
   * The region ID of the ACK cluster connector. You can call the following API operation to obtain the value:
   * - [DescribeAccessInstanceRegionList](~~DescribeAccessInstanceRegionList~~): Queries the regions of synchronization nodes.
   * 
   * > For more information about the regions supported by Cloud Firewall for ACK cluster connectors, see [ACK cluster synchronization nodes](https://help.aliyun.com/document_detail/2865120.html).
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the secondary vSwitch for the ACK cluster connector. You can call the following API operation to obtain the value:
   * - [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~): Queries a list of vSwitches for synchronization nodes.
   * 
   * @example
   * vsw-2ze2gtlfozrab01cfo****
   */
  standbyVswitchId?: string;
  /**
   * @remarks
   * The IP address of the secondary vSwitch for the ACK cluster connector.
   * 
   * @example
   * 10.100.2.1
   */
  standbyVswitchIp?: string;
  /**
   * @remarks
   * The zone ID of the secondary vSwitch for the ACK cluster connector. You can call the following API operation to obtain the value:
   * - [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~): Queries a list of zones for the vSwitches of synchronization nodes.
   * 
   * @example
   * cn-beijing-h
   */
  standbyVswitchZoneId?: string;
  /**
   * @remarks
   * The synchronization interval of the ACK cluster connector. Valid values: 2 to 60. Unit: seconds.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The cause of the unhealthy status of the ACK cluster connector.
   * 
   * @example
   * The ACK cluster status is unavailable.
   */
  unhealthyReason?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance to which the ACK cluster belongs.
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
      unhealthyReason: 'UnhealthyReason',
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
      unhealthyReason: 'string',
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

export class DescribeAckClusterConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACK cluster connector.
   */
  ackClusterConnector?: DescribeAckClusterConnectorResponseBodyAckClusterConnector;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45E2E720-D2B4-506F-B682-1FCBE971****
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
      ackClusterConnector: DescribeAckClusterConnectorResponseBodyAckClusterConnector,
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


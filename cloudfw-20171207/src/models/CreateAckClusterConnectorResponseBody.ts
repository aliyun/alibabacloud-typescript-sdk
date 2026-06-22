// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAckClusterConnectorResponseBodyAckClusterConnector extends $dara.Model {
  /**
   * @remarks
   * The entry point IP address used by the ACK cluster connector to access the ACK cluster over the internal network.
   * 
   * @example
   * 10.40.32.240
   */
  ackClientHostIp?: string;
  /**
   * @remarks
   * The ACK cluster ID. You can call the following operation to obtain the value:
   * - [DescribeAckClusters](~~DescribeAckClusters~~): Lists ACK clusters.
   * 
   * @example
   * cb0f5640b1b2d404cad6ba21509d7847b
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
   * The unique ID of the ACK cluster connector.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @remarks
   * The name of the ACK cluster connector. The name must be 1 to 64 characters in length and can contain letters, digits, Chinese characters, periods (.), underscores (_), and hyphens (-).
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
   * The Alibaba Cloud UID of the account to which the ACK cluster resource belongs.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The primary vSwitch of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~): Lists the vSwitches of synchronization nodes.
   * 
   * @example
   * vsw-2zerfbbje7dvnbii2****
   */
  primaryVswitchId?: string;
  /**
   * @remarks
   * The IP address of the primary vSwitch of the ACK cluster connector.
   * 
   * @example
   * 10.100.1.1
   */
  primaryVswitchIp?: string;
  /**
   * @remarks
   * The zone of the primary vSwitch of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~): Lists the zones of vSwitches for synchronization nodes.
   * 
   * @example
   * cn-hangzhou-g
   */
  primaryVswitchZoneId?: string;
  /**
   * @remarks
   * The region ID of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceRegionList](~~DescribeAccessInstanceRegionList~~): Lists the regions of synchronization nodes.
   * 
   * > For more information about the regions supported by ACK cluster connectors in Cloud Firewall, see [ACK cluster synchronization nodes](https://help.aliyun.com/document_detail/2865120.html).
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The standby vSwitch of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~): Lists the vSwitches of synchronization nodes.
   * 
   * @example
   * vsw-2ze2gtlfozrab01cfo****
   */
  standbyVswitchId?: string;
  /**
   * @remarks
   * The IP address of the standby vSwitch of the ACK cluster connector.
   * 
   * @example
   * 10.100.2.1
   */
  standbyVswitchIp?: string;
  /**
   * @remarks
   * The zone of the standby vSwitch of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~): Lists the zones of vSwitches for synchronization nodes.
   * 
   * @example
   * cn-hangzhou-h
   */
  standbyVswitchZoneId?: string;
  /**
   * @remarks
   * The unique ID of the task for creating the ACK cluster connector.
   * 
   * @example
   * task-c92d4544ef7b6a42
   */
  taskId?: string;
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
   * The instance ID of the VPC-connected instance to which the ACK cluster belongs.
   * 
   * @example
   * vpc-j6cvhdscntzuvr0x****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ackClientHostIp: 'AckClientHostIp',
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
      taskId: 'TaskId',
      ttl: 'Ttl',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackClientHostIp: 'string',
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
      taskId: 'string',
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

export class CreateAckClusterConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACK cluster connector information.
   */
  ackClusterConnector?: CreateAckClusterConnectorResponseBodyAckClusterConnector;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DC783F1-B3A7-578D-8A63-*****
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
      ackClusterConnector: CreateAckClusterConnectorResponseBodyAckClusterConnector,
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


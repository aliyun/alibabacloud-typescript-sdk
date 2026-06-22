// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorsResponseBodyAckClusterConnectors extends $dara.Model {
  /**
   * @remarks
   * The ACK cluster ID. You can call the following operation to obtain the value:
   * - [DescribeAckClusters](~~DescribeAckClusters~~): Queries a list of ACK clusters in batches.
   * 
   * @example
   * f9b9815a5280****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the ACK cluster.
   * 
   * @example
   * TestClusterA
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
   * The ID of the ACK cluster connector.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @remarks
   * The name of the ACK cluster connector. The name must be 1 to 64 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
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
   * 1760493347
   */
  createTime?: string;
  /**
   * @remarks
   * The list of address book UUIDs created on the ACK cluster connector.
   */
  groupUuids?: string[];
  /**
   * @remarks
   * The Alibaba Cloud UID of the account to which the ACK cluster resource belongs.
   * 
   * @example
   * 159663371500****
   */
  memberUid?: string;
  /**
   * @remarks
   * The primary vSwitch of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~): Queries the list of synchronization node vSwitches in batches.
   * 
   * @example
   * vsw-2ze2gtlfozrab01cfo****
   */
  primaryVswitchId?: string;
  /**
   * @remarks
   * The IP address of the primary vSwitch of the ACK cluster connector.
   * 
   * @example
   * 10.100.2.XXX
   */
  primaryVswitchIp?: string;
  /**
   * @remarks
   * The zone of the primary vSwitch of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~): Queries the list of synchronization node vSwitch zones in batches.
   * 
   * @example
   * cn-beijing-g
   */
  primaryVswitchZoneId?: string;
  /**
   * @remarks
   * The region ID of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceRegionList](~~DescribeAccessInstanceRegionList~~): Queries the list of synchronization node regions.
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
   * - [DescribeAccessInstanceVSwitchList](~~DescribeAccessInstanceVSwitchList~~): Queries the list of synchronization node vSwitches in batches.
   * 
   * @example
   * vsw-2zerfbbje7dvnbii2****
   */
  standbyVswitchId?: string;
  /**
   * @remarks
   * The IP address of the standby vSwitch of the ACK cluster connector.
   * 
   * @example
   * 10.100.1.XXX
   */
  standbyVswitchIp?: string;
  /**
   * @remarks
   * The zone of the standby vSwitch of the ACK cluster connector. You can call the following operation to obtain the value:
   * - [DescribeAccessInstanceZoneList](~~DescribeAccessInstanceZoneList~~): Queries the list of synchronization node vSwitch zones in batches.
   * 
   * @example
   * cn-beijing-h
   */
  standbyVswitchZoneId?: string;
  /**
   * @remarks
   * The container synchronization cycle of the ACK cluster connector.
   * 
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * The reason why the ACK cluster connector is unhealthy.
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
      groupUuids: 'GroupUuids',
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
      groupUuids: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.groupUuids)) {
      $dara.Model.validateArray(this.groupUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAckClusterConnectorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ACK cluster connectors.
   */
  ackClusterConnectors?: DescribeAckClusterConnectorsResponseBodyAckClusterConnectors[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7F333E0-7B70-54DA-A307-4B2B49DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ackClusterConnectors: 'AckClusterConnectors',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackClusterConnectors: { 'type': 'array', 'itemType': DescribeAckClusterConnectorsResponseBodyAckClusterConnectors },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ackClusterConnectors)) {
      $dara.Model.validateArray(this.ackClusterConnectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorsResponseBodyAckClusterConnectors extends $dara.Model {
  /**
   * @example
   * f9b9815a5280****
   */
  clusterId?: string;
  /**
   * @example
   * TestClusterA
   */
  clusterName?: string;
  /**
   * @example
   * healthy
   */
  connectorHealthCheckStatus?: string;
  /**
   * @example
   * connector-7ff4df316c9a458d****
   */
  connectorId?: string;
  /**
   * @example
   * test
   */
  connectorName?: string;
  /**
   * @example
   * ready
   */
  connectorStatus?: string;
  /**
   * @example
   * 1760493347
   */
  createTime?: string;
  groupUuids?: string[];
  /**
   * @example
   * 159663371500****
   */
  memberUid?: string;
  /**
   * @example
   * vsw-2ze2gtlfozrab01cfo****
   */
  primaryVswitchId?: string;
  /**
   * @example
   * 10.100.2.XXX
   */
  primaryVswitchIp?: string;
  /**
   * @example
   * cn-beijing-g
   */
  primaryVswitchZoneId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @example
   * vsw-2zerfbbje7dvnbii2****
   */
  standbyVswitchId?: string;
  /**
   * @example
   * 10.100.1.XXX
   */
  standbyVswitchIp?: string;
  /**
   * @example
   * cn-beijing-h
   */
  standbyVswitchZoneId?: string;
  /**
   * @example
   * 30
   */
  ttl?: number;
  unhealthyReason?: string;
  /**
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
  ackClusterConnectors?: DescribeAckClusterConnectorsResponseBodyAckClusterConnectors[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * E7F333E0-7B70-54DA-A307-4B2B49DE****
   */
  requestId?: string;
  /**
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


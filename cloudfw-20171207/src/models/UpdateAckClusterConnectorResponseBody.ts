// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAckClusterConnectorResponseBodyAckClusterConnector extends $dara.Model {
  /**
   * @example
   * c57ecf39ff32c415e8549a7df27a7e947
   */
  clusterId?: string;
  /**
   * @example
   * ack-cluster-name
   */
  clusterName?: string;
  /**
   * @example
   * healthy
   */
  connectorHealthCheckStatus?: string;
  /**
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @example
   * ack-cluster-connector-name
   */
  connectorName?: string;
  /**
   * @example
   * ready
   */
  connectorStatus?: string;
  /**
   * @example
   * 1724982259
   */
  createTime?: string;
  /**
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @example
   * vsw-2zerfbbje7dvnbii2****
   */
  primaryVswitchId?: string;
  /**
   * @example
   * 10.100.1.1
   */
  primaryVswitchIp?: string;
  /**
   * @example
   * cn-beijing-g
   */
  primaryVswitchZoneId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @example
   * vsw-2ze2gtlfozrab01cfo****
   */
  standbyVswitchId?: string;
  /**
   * @example
   * 10.100.2.1
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
  ackClusterConnector?: UpdateAckClusterConnectorResponseBodyAckClusterConnector;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAckClusterConnectorResponseBodyAckClusterConnector extends $dara.Model {
  /**
   * @example
   * 10.40.32.240
   */
  ackClientHostIp?: string;
  /**
   * @example
   * cb0f5640b1b2d404cad6ba21509d7847b
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
   * cn-hangzhou-g
   */
  primaryVswitchZoneId?: string;
  /**
   * @example
   * cn-shanghai
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
   * cn-hangzhou-h
   */
  standbyVswitchZoneId?: string;
  /**
   * @example
   * task-c92d4544ef7b6a42
   */
  taskId?: string;
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
  ackClusterConnector?: CreateAckClusterConnectorResponseBodyAckClusterConnector;
  /**
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


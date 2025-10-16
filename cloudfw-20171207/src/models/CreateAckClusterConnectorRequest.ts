// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAckClusterConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cb0f5640b1b2d404cad6ba21509d7847b
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ack-cluster-connector-name
   */
  connectorName?: string;
  /**
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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
   * @remarks
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


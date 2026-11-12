// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupRequestNetwork extends $dara.Model {
  /**
   * @remarks
   * The dedicated gateway ID.
   * 
   * @example
   * gw-rcgxxxxxxzytgq9zrj
   */
  gatewayId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-uf6xxxxxxc3lysxabg72i
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1xxxxxxjeqwbo3z2pux
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1xxxxxx17e0qrykjr9b
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
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

export class UpdateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The user-defined labels.
   * 
   * @example
   * {"key1":"value1","key2":null}
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The VPC configuration.
   */
  network?: UpdateGroupRequestNetwork;
  /**
   * @remarks
   * The traffic mode. Valid values: auto and customized. In auto mode, weights are automatically allocated based on the proportion of instances. In customized mode, traffic is distributed based on custom fixed weights.
   * 
   * @example
   * auto
   */
  trafficMode?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      network: 'Network',
      trafficMode: 'TrafficMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      network: UpdateGroupRequestNetwork,
      trafficMode: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


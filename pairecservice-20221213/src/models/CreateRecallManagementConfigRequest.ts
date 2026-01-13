// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecallManagementConfigRequestNetworkConfigs extends $dara.Model {
  vSwitchIds?: { [key: string]: string };
  /**
   * @remarks
   * Vpc id
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.vSwitchIds) {
      $dara.Model.validateMap(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementConfigRequest extends $dara.Model {
  /**
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  networkConfigs?: CreateRecallManagementConfigRequestNetworkConfigs[];
  /**
   * @example
   * 12345
   */
  password?: string;
  /**
   * @example
   * zhhangsan
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkConfigs: 'NetworkConfigs',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkConfigs: { 'type': 'array', 'itemType': CreateRecallManagementConfigRequestNetworkConfigs },
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkConfigs)) {
      $dara.Model.validateArray(this.networkConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


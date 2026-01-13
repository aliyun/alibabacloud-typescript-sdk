// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecallManagementConfigRequestNetworkConfigs extends $dara.Model {
  /**
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  vswitchIds?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchIds: 'VswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.vswitchIds) {
      $dara.Model.validateMap(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecallManagementConfigRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  instanceId?: string;
  networkConfigs?: UpdateRecallManagementConfigRequestNetworkConfigs[];
  /**
   * @example
   * 12345
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkConfigs: 'NetworkConfigs',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkConfigs: { 'type': 'array', 'itemType': UpdateRecallManagementConfigRequestNetworkConfigs },
      password: 'string',
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


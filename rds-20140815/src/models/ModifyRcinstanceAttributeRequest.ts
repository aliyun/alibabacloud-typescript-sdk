// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceAttributeRequest extends $dara.Model {
  deletionProtection?: boolean;
  enableJumboFrame?: boolean;
  hostName?: string;
  instanceId?: string;
  instanceIds?: string[];
  /**
   * @example
   * k8s-node
   */
  instanceName?: string;
  password?: string;
  reboot?: boolean;
  regionId?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      enableJumboFrame: 'EnableJumboFrame',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      password: 'Password',
      reboot: 'Reboot',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'boolean',
      enableJumboFrame: 'boolean',
      hostName: 'string',
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceName: 'string',
      password: 'string',
      reboot: 'boolean',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceAttributeShrinkRequest extends $dara.Model {
  deletionProtection?: boolean;
  enableJumboFrame?: boolean;
  hostName?: string;
  instanceId?: string;
  instanceIdsShrink?: string;
  /**
   * @example
   * k8s-node
   */
  instanceName?: string;
  password?: string;
  reboot?: boolean;
  regionId?: string;
  securityGroupId?: string;
  securityGroupIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      enableJumboFrame: 'EnableJumboFrame',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceIdsShrink: 'InstanceIds',
      instanceName: 'InstanceName',
      password: 'Password',
      reboot: 'Reboot',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupIdsShrink: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'boolean',
      enableJumboFrame: 'boolean',
      hostName: 'string',
      instanceId: 'string',
      instanceIdsShrink: 'string',
      instanceName: 'string',
      password: 'string',
      reboot: 'boolean',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


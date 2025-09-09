// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyCommandConfigRequestCommandConfigApproval extends $dara.Model {
  /**
   * @remarks
   * The commands that can be run only after approval.
   */
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigRequestCommandConfigDeny extends $dara.Model {
  /**
   * @remarks
   * The type of command control. Valid values:
   * 
   * *   **black**: blacklist mode.
   * *   **white**: whitelist mode.
   * 
   * This parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The commands to be controlled.
   * 
   * > This parameter is required if AclType is set to white.
   */
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigRequestCommandConfig extends $dara.Model {
  /**
   * @remarks
   * The command approval settings.
   * 
   * > A command approval policy is used to approve the commands that are excluded from a whitelist or blacklist specified in a command control policy. The command control policy takes precedence over the command approval policy in validation.
   */
  approval?: SetPolicyCommandConfigRequestCommandConfigApproval;
  /**
   * @remarks
   * The command control settings.
   * 
   * This parameter is required.
   */
  deny?: SetPolicyCommandConfigRequestCommandConfigDeny;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      deny: 'Deny',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: SetPolicyCommandConfigRequestCommandConfigApproval,
      deny: SetPolicyCommandConfigRequestCommandConfigDeny,
    };
  }

  validate() {
    if(this.approval && typeof (this.approval as any).validate === 'function') {
      (this.approval as any).validate();
    }
    if(this.deny && typeof (this.deny as any).validate === 'function') {
      (this.deny as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The command control settings.
   * 
   * > This parameter applies only to Linux hosts.
   * 
   * This parameter is required.
   */
  commandConfig?: SetPolicyCommandConfigRequestCommandConfig;
  /**
   * @remarks
   * The bastion host ID.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to modify.
   * 
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the control policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 45
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandConfig: 'CommandConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandConfig: SetPolicyCommandConfigRequestCommandConfig,
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.commandConfig && typeof (this.commandConfig as any).validate === 'function') {
      (this.commandConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


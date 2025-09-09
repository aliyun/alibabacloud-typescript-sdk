// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyIPAclConfigRequestIPAclConfig extends $dara.Model {
  /**
   * @remarks
   * The mode of access control on source IP addresses. Valid values:
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
   * The source IP addresses in the blacklist or whitelist.
   * 
   * > 
   * 
   * *   This parameter is required if AclType is set to white.
   * 
   * *   If AclType is set to black but you do not want to add IP addresses to the blacklist, you can leave IPs empty.
   * 
   * This parameter is required.
   */
  IPs?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      IPs: 'IPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      IPs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPs)) {
      $dara.Model.validateArray(this.IPs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyIPAclConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The access control settings for source IP addresses.
   * 
   * This parameter is required.
   */
  IPAclConfig?: SetPolicyIPAclConfigRequestIPAclConfig;
  /**
   * @remarks
   * The bastion host ID.
   * 
   * > You can call the DescribeInstances operation to query the bastion host ID.[](~~153281~~)
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to modify.
   * 
   * >  You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the control policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      IPAclConfig: 'IPAclConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPAclConfig: SetPolicyIPAclConfigRequestIPAclConfig,
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.IPAclConfig && typeof (this.IPAclConfig as any).validate === 'function') {
      (this.IPAclConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


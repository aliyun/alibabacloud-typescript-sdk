// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyIPAclConfigRequestIPAclConfig extends $dara.Model {
  /**
   * @remarks
   * The source IP address restriction mode. Valid values:
   * 
   * - **black**: blacklist mode
   * - **white**: whitelist mode
   * 
   * This parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The list of restricted source IP addresses.
   * 
   * > - When AclType is set to white, the IPs list is required.
   * > - When AclType is set to black but you do not need to set a source IP blacklist, pass an empty list for IPs.
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
   * The source IP address restriction configuration.
   * 
   * This parameter is required.
   */
  IPAclConfig?: SetPolicyIPAclConfigRequestIPAclConfig;
  /**
   * @remarks
   * The ID of the bastion host instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the bastion host instance ID.
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
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  policyId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPAclConfig: SetPolicyIPAclConfigRequestIPAclConfig,
      instanceId: 'string',
      policyId: 'string',
      projectId: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyIPAclConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address restriction configuration.
   * 
   * This parameter is required.
   */
  IPAclConfigShrink?: string;
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
      IPAclConfigShrink: 'IPAclConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPAclConfigShrink: 'string',
      instanceId: 'string',
      policyId: 'string',
      projectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


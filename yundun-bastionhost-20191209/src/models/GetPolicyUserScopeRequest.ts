// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyUserScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host to which the control policy to query belongs.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastion-xxxx-xx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to query.
   * 
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the control policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID of the bastion host to which the control policy to query belongs.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
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


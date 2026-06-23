// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zvp2d3syb0g
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to query.
   * 
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID of the bastion host instance.
   * 
   * > For more information about region IDs, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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


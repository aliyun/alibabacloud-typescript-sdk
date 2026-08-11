// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the control policy. Maximum length: 500 characters.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the bastion host instance for which you want to create a control policy.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-20p364c1w0g
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the control policy. Maximum length: 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * policytest
   */
  policyName?: string;
  /**
   * @remarks
   * The priority of the control policy.
   * 
   * - Valid values: 1 to 100. Default value: 1, which indicates the policy priority.
   * - Different control policies can have the same priority. If multiple control policies have the same priority, the most recently created policy has the policy priority. Within a single policy, if the same command is configured in both command control and command approval, the priority from high to low is: reject, allow, and approval.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host for which you want to create a control policy.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      policyName: 'PolicyName',
      priority: 'Priority',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      policyName: 'string',
      priority: 'string',
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


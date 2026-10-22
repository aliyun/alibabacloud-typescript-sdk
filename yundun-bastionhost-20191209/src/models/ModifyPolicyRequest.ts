// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the control policy.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance to which the control policy belongs. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-09k1u8mv501
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  policyId?: string;
  /**
   * @remarks
   * The new Policy Name of the control policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The new priority of the control policy. Valid values: 1 to 100. A smaller value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 3
   */
  priority?: string;
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
   * The region ID of the Bastionhost instance to which the control policy belongs. For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
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
      policyId: 'string',
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


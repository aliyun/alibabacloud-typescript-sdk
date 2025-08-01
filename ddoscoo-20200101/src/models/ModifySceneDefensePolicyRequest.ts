// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySceneDefensePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586016000000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * testpolicy
   */
  name?: string;
  /**
   * @remarks
   * The ID of the policy that you want to modify.
   * 
   * > You can call the [DescribeSceneDefensePolicies](https://help.aliyun.com/document_detail/159382.html) operation to query the IDs of all policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 321a-fd31-df51-****
   */
  policyId?: string;
  /**
   * @remarks
   * The start time of the policy. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1585670400000
   */
  startTime?: number;
  /**
   * @remarks
   * The template of the policy. Valid values:
   * 
   * *   **promotion**: important activity.
   * *   **bypass**: all traffic forwarded.
   * 
   * This parameter is required.
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      policyId: 'PolicyId',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      name: 'string',
      policyId: 'string',
      startTime: 'number',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


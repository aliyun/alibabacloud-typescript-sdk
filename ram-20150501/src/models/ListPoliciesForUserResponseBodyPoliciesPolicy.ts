// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesForUserResponseBodyPoliciesPolicy extends $dara.Model {
  /**
   * @remarks
   * The time at which the policy is attached to the RAM user. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   System: system policy
   * *   Custom: custom policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


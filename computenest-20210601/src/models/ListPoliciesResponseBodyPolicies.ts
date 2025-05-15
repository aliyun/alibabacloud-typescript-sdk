// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * Permission policy description.
   * 
   * @example
   * Only read permission policy
   */
  description?: string;
  /**
   * @remarks
   * Policy content.
   * 
   * @example
   * {"Action":["*:Describe*","*:List*","*:Get*","*:BatchGet*","*:Query*","*:BatchQuery*","actiontrail:LookupEvents"],"Resource":["*"],"Effect":"Allow"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * Permission policy name.
   * 
   * @example
   * AliyunComputeNestPolicyForReadOnly
   */
  policyName?: string;
  /**
   * @remarks
   * Permission policy type.
   * 
   * - Custom: Custom policy.
   * - System: System policy.
   * 
   * @example
   * System
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      policyDocument: 'string',
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


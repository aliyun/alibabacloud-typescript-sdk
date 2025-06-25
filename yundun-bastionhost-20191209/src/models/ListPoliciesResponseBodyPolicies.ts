// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The remarks of the control policy.
   */
  comment?: string;
  /**
   * @remarks
   * The control policy ID.
   * 
   * @example
   * 2
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the control policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The priority of the control policy. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      policyId: 'string',
      policyName: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


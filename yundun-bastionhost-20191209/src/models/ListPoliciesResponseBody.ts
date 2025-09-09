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

export class ListPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The control policies.
   */
  policies?: ListPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of control policies that are returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


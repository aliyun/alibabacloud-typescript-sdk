// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Definition } from "./Definition";


export class ListPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @example
   * 2026-05-08T06:19:17Z
   */
  createTime?: string;
  definition?: Definition;
  /**
   * @example
   * example description
   */
  description?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:policyset/default-policy-set/policy/rate-limit-policy
   */
  policyArn?: string;
  /**
   * @example
   * rate-limit-policy
   */
  policyName?: string;
  /**
   * @example
   * default-policy-set
   */
  policySetName?: string;
  /**
   * @example
   * 2026-05-08T06:19:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      definition: 'Definition',
      description: 'Description',
      policyArn: 'PolicyArn',
      policyName: 'PolicyName',
      policySetName: 'PolicySetName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      definition: Definition,
      description: 'string',
      policyArn: 'string',
      policyName: 'string',
      policySetName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.definition && typeof (this.definition as any).validate === 'function') {
      (this.definition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  policies?: ListPoliciesResponseBodyPolicies[];
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
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


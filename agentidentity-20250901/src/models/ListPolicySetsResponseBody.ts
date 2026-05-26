// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicySetsResponseBodyPolicySets extends $dara.Model {
  /**
   * @example
   * 2026-05-08T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * example description
   */
  description?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:policyset/default-policy-set
   */
  policySetArn?: string;
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
      description: 'Description',
      policySetArn: 'PolicySetArn',
      policySetName: 'PolicySetName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      policySetArn: 'string',
      policySetName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicySetsResponseBody extends $dara.Model {
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
  policySets?: ListPolicySetsResponseBodyPolicySets[];
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
      policySets: 'PolicySets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policySets: { 'type': 'array', 'itemType': ListPolicySetsResponseBodyPolicySets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policySets)) {
      $dara.Model.validateArray(this.policySets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Definition } from "./Definition";


export class ListPoliciesResponseBodyPolicies extends $dara.Model {
  createTime?: string;
  definition?: Definition;
  description?: string;
  policyArn?: string;
  policyName?: string;
  policySetName?: string;
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
  maxResults?: number;
  nextToken?: string;
  policies?: ListPoliciesResponseBodyPolicies[];
  requestId?: string;
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


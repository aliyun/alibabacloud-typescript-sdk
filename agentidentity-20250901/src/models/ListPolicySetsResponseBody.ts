// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicySetsResponseBodyPolicySets extends $dara.Model {
  createTime?: string;
  description?: string;
  policySetArn?: string;
  policySetName?: string;
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
  maxResults?: number;
  nextToken?: string;
  policySets?: ListPolicySetsResponseBodyPolicySets[];
  requestId?: string;
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


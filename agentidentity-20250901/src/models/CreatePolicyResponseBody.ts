// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Definition } from "./Definition";


export class CreatePolicyResponseBodyPolicy extends $dara.Model {
  createTime?: string;
  definition?: Definition;
  description?: string;
  policyArn?: string;
  policyName?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      definition: 'Definition',
      description: 'Description',
      policyArn: 'PolicyArn',
      policyName: 'PolicyName',
      policySetName: 'PolicySetName',
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

export class CreatePolicyResponseBody extends $dara.Model {
  policy?: CreatePolicyResponseBodyPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: CreatePolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


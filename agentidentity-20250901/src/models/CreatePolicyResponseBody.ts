// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Definition } from "./Definition";


export class CreatePolicyResponseBodyPolicy extends $dara.Model {
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
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntegrationPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The entity group ID.
   * 
   * @example
   * eg-b79f65d11fb94e779867cf937c3a3002
   */
  entityGroupId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * policy-14c8e9a29b0a46da843f8781471062ff
   */
  policyId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * metrics-inner-manage
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * CS
   */
  policyType?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * u1234567
   */
  userId?: string;
  /**
   * @remarks
   * The workspace where the policy resides.
   * 
   * @example
   * prometheus
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      entityGroupId: 'entityGroupId',
      policyId: 'policyId',
      policyName: 'policyName',
      policyType: 'policyType',
      regionId: 'regionId',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityGroupId: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      regionId: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegrationPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the policy was created.
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The upload policy.
   */
  policy?: CreateIntegrationPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      policy: 'policy',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'boolean',
      policy: CreateIntegrationPolicyResponseBodyPolicy,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicySetResponseBodyPolicySet extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      policySetArn: 'PolicySetArn',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      policySetArn: 'string',
      policySetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicySetResponseBody extends $dara.Model {
  policySet?: CreatePolicySetResponseBodyPolicySet;
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policySet: 'PolicySet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policySet: CreatePolicySetResponseBodyPolicySet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policySet && typeof (this.policySet as any).validate === 'function') {
      (this.policySet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


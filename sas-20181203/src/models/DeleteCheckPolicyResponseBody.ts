// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCheckPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @example
   * 1000000000001
   */
  policyId?: number;
  /**
   * @example
   * testPolicyName
   */
  policyShowName?: string;
  /**
   * @example
   * STANDARD
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyShowName: 'PolicyShowName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyShowName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCheckPolicyResponseBody extends $dara.Model {
  policys?: DeleteCheckPolicyResponseBodyPolicys[];
  /**
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policys: 'Policys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policys: { 'type': 'array', 'itemType': DeleteCheckPolicyResponseBodyPolicys },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policys)) {
      $dara.Model.validateArray(this.policys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


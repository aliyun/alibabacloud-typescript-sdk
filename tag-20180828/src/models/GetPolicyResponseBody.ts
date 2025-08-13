// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The document of the tag policy.
   * 
   * @example
   * {\\"tags\\":{\\"CostCenter\\":{\\"tag_value\\":{\\"@@assign\\":[\\"Beijing\\",\\"Shanghai\\"]},\\"tag_key\\":{\\"@@assign\\":\\"CostCenter\\"}}}}
   */
  policyContent?: string;
  /**
   * @remarks
   * The description of the tag policy.
   * 
   * @example
   * This is a tag policy example.
   */
  policyDesc?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * @example
   * USER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyName: 'PolicyName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyContent: 'string',
      policyDesc: 'string',
      policyName: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the tag policy.
   */
  policy?: GetPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E7A4802-AB57-570A-9860-F15B60E1586B
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
      policy: GetPolicyResponseBodyPolicy,
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


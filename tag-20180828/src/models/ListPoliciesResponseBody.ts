// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesResponseBodyPolicyList extends $dara.Model {
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
   * The ID of the tag policy.
   * 
   * @example
   * p-de62a0bf400e4b69****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * @example
   * example
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
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyContent: 'string',
      policyDesc: 'string',
      policyId: 'string',
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

export class ListPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The tag policies.
   */
  policyList?: ListPoliciesResponseBodyPolicyList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72477CFF-5B24-5E30-9861-3DD9C4BD46E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      policyList: 'PolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      policyList: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPolicyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


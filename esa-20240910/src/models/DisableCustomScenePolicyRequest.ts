// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableCustomScenePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy ID, which can be obtained by calling the [DescribeCustomScenePolicies](https://help.aliyun.com/document_detail/2850508.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 100001
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSceneDefensePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy that you want to delete.
   * 
   * > You can call the [DescribeSceneDefensePolicies](https://help.aliyun.com/document_detail/159382.html) operation to query the IDs of all policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 321a-fd31-df51-****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


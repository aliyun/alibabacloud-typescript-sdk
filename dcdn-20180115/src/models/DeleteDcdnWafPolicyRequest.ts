// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDcdnWafPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the protection policy that you want to delete. You can specify only one ID in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
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


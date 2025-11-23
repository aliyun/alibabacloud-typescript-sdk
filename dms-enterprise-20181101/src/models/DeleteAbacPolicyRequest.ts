// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAbacPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  abacPolicyId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      abacPolicyId: 'AbacPolicyId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abacPolicyId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


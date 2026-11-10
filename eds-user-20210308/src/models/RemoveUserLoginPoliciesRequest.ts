// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserLoginPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The list of policy IDs.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


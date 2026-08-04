// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsForPrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of private network access policy IDs. Enter a maximum of 100 private network access policy IDs.
   * 
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of policy IDs. If any policy is associated with an undeleted instance group, the entire deletion operation fails.
   * 
   * This parameter is required.
   */
  policyGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyGroupIds: 'PolicyGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


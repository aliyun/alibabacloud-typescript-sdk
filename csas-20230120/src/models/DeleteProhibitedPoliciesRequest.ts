// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProhibitedPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the software prohibition policies to delete. Duplicate IDs are not allowed. You can specify up to 100 IDs.
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


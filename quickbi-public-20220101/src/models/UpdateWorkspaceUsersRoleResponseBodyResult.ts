// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceUsersRoleResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Number of users that failed to update.
   * 
   * @example
   * 0
   */
  failure?: number;
  /**
   * @remarks
   * Reasons for the update failures.
   */
  failureDetail?: { [key: string]: any };
  /**
   * @remarks
   * Number of users that were updated successfully.
   * 
   * @example
   * 2
   */
  success?: number;
  /**
   * @remarks
   * Modify the total number of users.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failure: 'Failure',
      failureDetail: 'FailureDetail',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: 'number',
      failureDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.failureDetail) {
      $dara.Model.validateMap(this.failureDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


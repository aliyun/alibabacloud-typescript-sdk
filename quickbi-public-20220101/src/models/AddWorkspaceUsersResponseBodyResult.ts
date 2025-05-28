// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceUsersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Number of users that failed to be added.
   * 
   * @example
   * 2
   */
  failure?: number;
  /**
   * @remarks
   * Reasons for the failures.
   * 
   * @example
   * {"2046274934845893" : "AE0150010001: This user already exists.", "1213444447906552" : "AE0150010001: This user already exists."}
   */
  failureDetail?: { [key: string]: any };
  /**
   * @remarks
   * Number of users that were added successfully.
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * Total number of users being added.
   * 
   * @example
   * 3
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


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

export class UpdateWorkspaceUsersRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface execution.
   */
  result?: UpdateWorkspaceUsersRoleResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * 
   * - true: The request was successful, some members may have been updated successfully while others failed, refer to FailureDetail in the response for reasons of failure
   * - false: The request failed, no data will be persisted
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateWorkspaceUsersRoleResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


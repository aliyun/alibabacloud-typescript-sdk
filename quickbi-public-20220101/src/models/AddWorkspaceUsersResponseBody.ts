// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceUsersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The number of users that failed to be added.
   * 
   * @example
   * 2
   */
  failure?: number;
  /**
   * @remarks
   * The reasons for the failures.
   * 
   * @example
   * {"2046274934845893" : "AE0150010001: This user already exists.", "1213444447906552" : "AE0150010001: This user already exists."}
   */
  failureDetail?: { [key: string]: any };
  /**
   * @remarks
   * The number of users that were added.
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * The total number of users to be added.
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

export class AddWorkspaceUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the operation.
   */
  result?: AddWorkspaceUsersResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful. Some members may be added successfully while others fail. For the reasons of failures, refer to FailureDetail in the response.
   * - false: The request failed. No data is persisted.
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
      result: AddWorkspaceUsersResponseBodyResult,
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


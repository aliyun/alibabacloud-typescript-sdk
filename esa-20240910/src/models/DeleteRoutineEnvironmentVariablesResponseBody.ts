// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoutineEnvironmentVariablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of environment variable keys that were deleted successfully.
   */
  deletedKeys?: string[];
  /**
   * @remarks
   * The list of environment variable keys that failed to be deleted.
   */
  failedKeys?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletedKeys: 'DeletedKeys',
      failedKeys: 'FailedKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedKeys: { 'type': 'array', 'itemType': 'string' },
      failedKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deletedKeys)) {
      $dara.Model.validateArray(this.deletedKeys);
    }
    if(Array.isArray(this.failedKeys)) {
      $dara.Model.validateArray(this.failedKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


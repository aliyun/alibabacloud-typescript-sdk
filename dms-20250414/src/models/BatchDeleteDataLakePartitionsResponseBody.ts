// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PartitionError } from "./PartitionError";


export class BatchDeleteDataLakePartitionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * A list of errors.
   */
  partitionErrors?: PartitionError[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5B96E35F-A58E-5399-9041-09CF9A1E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      partitionErrors: 'PartitionErrors',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      partitionErrors: { 'type': 'array', 'itemType': PartitionError },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.partitionErrors)) {
      $dara.Model.validateArray(this.partitionErrors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


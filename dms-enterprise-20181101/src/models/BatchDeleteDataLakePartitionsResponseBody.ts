// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PartitionError } from "./PartitionError";


export class BatchDeleteDataLakePartitionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The error messages.
   */
  partitionErrors?: PartitionError[];
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 5B96E35F-A58E-5399-9041-09CF9A1E46EA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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


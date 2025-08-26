// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PartitionError } from "./PartitionError";


export class BatchDeleteDataLakePartitionsResponseBody extends $dara.Model {
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  partitionErrors?: PartitionError[];
  /**
   * @example
   * 5B96E35F-A58E-5399-9041-09CF9A1E****
   */
  requestId?: string;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PartitionError } from "./PartitionError";


export class BatchUpdateDataLakePartitionsResponseBody extends $dara.Model {
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
   * C5B8E84B-42B6-4374-AD5A-6264E175****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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
      success: 'boolean',
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


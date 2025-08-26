// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLPartition } from "./Dlpartition";


export class BatchCreateDataLakePartitionsResponseBody extends $dara.Model {
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
  partitions?: DLPartition[];
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52****
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
      partitions: 'Partitions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      partitions: { 'type': 'array', 'itemType': DLPartition },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLPartition } from "./Dlpartition";


export class GetDataLakePartitionResponseBody extends $dara.Model {
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
   * The queried partition.
   */
  partition?: DLPartition;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF9A04
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      partition: 'Partition',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      partition: DLPartition,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.partition && typeof (this.partition as any).validate === 'function') {
      (this.partition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


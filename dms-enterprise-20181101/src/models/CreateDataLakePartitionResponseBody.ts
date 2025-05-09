// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLPartition } from "./Dlpartition";


export class CreateDataLakePartitionResponseBody extends $dara.Model {
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
  partition?: DLPartition;
  /**
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
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


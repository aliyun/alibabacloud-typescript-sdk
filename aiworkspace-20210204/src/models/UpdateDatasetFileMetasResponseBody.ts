// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaResponse } from "./DatasetFileMetaResponse";


export class UpdateDatasetFileMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of file metadata that failed to be updated.
   */
  failedDetails?: DatasetFileMetaResponse[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the batch metadata update. A value of \\`true\\` indicates that all updates succeeded. If the value is \\`false\\`, check the \\`FailedDetails\\` parameter.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      failedDetails: 'FailedDetails',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedDetails: { 'type': 'array', 'itemType': DatasetFileMetaResponse },
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failedDetails)) {
      $dara.Model.validateArray(this.failedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


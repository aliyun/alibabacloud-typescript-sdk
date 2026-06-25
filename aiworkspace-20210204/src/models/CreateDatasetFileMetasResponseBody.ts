// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaResponse } from "./DatasetFileMetaResponse";


export class CreateDatasetFileMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of file metadata records that failed to be created.
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
   * The status of the batch metadata creation. A value of \\`true\\` indicates that all records were created successfully. If the value is \\`false\\`, check \\`FailedDetails\\`.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * A list of file metadata records that were successfully created.
   */
  succeedDetails?: DatasetFileMetaResponse[];
  static names(): { [key: string]: string } {
    return {
      failedDetails: 'FailedDetails',
      requestId: 'RequestId',
      status: 'Status',
      succeedDetails: 'SucceedDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedDetails: { 'type': 'array', 'itemType': DatasetFileMetaResponse },
      requestId: 'string',
      status: 'boolean',
      succeedDetails: { 'type': 'array', 'itemType': DatasetFileMetaResponse },
    };
  }

  validate() {
    if(Array.isArray(this.failedDetails)) {
      $dara.Model.validateArray(this.failedDetails);
    }
    if(Array.isArray(this.succeedDetails)) {
      $dara.Model.validateArray(this.succeedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaResponse } from "./DatasetFileMetaResponse";


export class DeleteDatasetFileMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of file metadata records that failed to be deleted.
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
   * The status of the batch deletion. A value of \\`true\\` indicates that all metadata records were deleted. If the value is \\`false\\`, check the \\`FailedDetails\\` parameter for more information.
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


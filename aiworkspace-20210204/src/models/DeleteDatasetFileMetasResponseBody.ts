// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaResponse } from "./DatasetFileMetaResponse";


export class DeleteDatasetFileMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata records that fail to be deleted for the dataset files.
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
   * Indicates whether the metadata records of all dataset files were deleted. The value true indicates that the metadata records of all dataset files are deleted. If the value is false, view the failure details specified by FailedDetails.
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


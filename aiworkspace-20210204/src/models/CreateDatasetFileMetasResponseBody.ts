// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaResponse } from "./DatasetFileMetaResponse";


export class CreateDatasetFileMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata that failed to be created.
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
   * Indicates whether the metadata records of all dataset files were created. The value true indicates that the metadata records of all dataset files are created. If the value is false, view the failure details specified by FailedDetails.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The metadata that is created.
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


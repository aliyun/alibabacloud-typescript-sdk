// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFpShotImportJobResponseBodyFpShotImportJobList } from "./ListFpShotImportJobResponseBodyFpShotImportJobList";


export class ListFpShotImportJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The jobs of importing text files to a text fingerprint library.
   */
  fpShotImportJobList?: ListFpShotImportJobResponseBodyFpShotImportJobList[];
  /**
   * @remarks
   * The job IDs that do not exist. This parameter is not returned if all specified job IDs exist.
   */
  nonExistIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotImportJobList: 'FpShotImportJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotImportJobList: { 'type': 'array', 'itemType': ListFpShotImportJobResponseBodyFpShotImportJobList },
      nonExistIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fpShotImportJobList)) {
      $dara.Model.validateArray(this.fpShotImportJobList);
    }
    if(Array.isArray(this.nonExistIds)) {
      $dara.Model.validateArray(this.nonExistIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


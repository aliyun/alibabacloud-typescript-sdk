// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadMediaByURLResponseBodyUploadJobs } from "./UploadMediaByUrlresponseBodyUploadJobs";


export class UploadMediaByURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****83B7-7F87-4792-BFE9-63CD2137****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about upload jobs.
   */
  uploadJobs?: UploadMediaByURLResponseBodyUploadJobs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadJobs: 'UploadJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadJobs: { 'type': 'array', 'itemType': UploadMediaByURLResponseBodyUploadJobs },
    };
  }

  validate() {
    if(Array.isArray(this.uploadJobs)) {
      $dara.Model.validateArray(this.uploadJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMediaByURLResponseBodyUploadJobs extends $dara.Model {
  /**
   * @remarks
   * The ID of the upload job.
   * 
   * @example
   * 20ce1e05dba64576b96e9683879f0***
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * f476988629f54a7b8a4ba90d1a6c7***
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the source file that is uploaded in the upload job.
   * 
   * @example
   * http://example****.mp4
   */
  sourceURL?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      sourceURL: 'SourceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      sourceURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


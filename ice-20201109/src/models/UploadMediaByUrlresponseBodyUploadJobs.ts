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


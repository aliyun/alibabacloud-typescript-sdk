// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The job IDs for deleting media streams.
   * 
   * *   Separate multiple IDs with commas (,). A maximum of 20 IDs can be specified for one video.
   * *   You can obtain job IDs from the PlayInfo parameter that is returned after you call the [GetPlayInfo](https://help.aliyun.com/document_detail/56124.html) operation. Each media stream has a unique job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35eb4dbda18c49cc0025df374b46****
   */
  jobIds?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * 95948ddba24446b6aed5db985e78****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      referenceId: 'ReferenceId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      referenceId: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


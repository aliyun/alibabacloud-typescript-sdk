// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile } from "./QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile";


export class QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle extends $dara.Model {
  /**
   * @remarks
   * The video track. Format: `0:{Stream}:{Stream sequence number}`, which is `0:v:{video_index}`. The value of Stream is v, which indicates a video stream. The sequence number is the index of the video stream in the list and starts from 0.
   * 
   * @example
   * 0:v:0
   */
  map?: string;
  /**
   * @remarks
   * The error message returned if the job failed to be created. This parameter is not returned if the job was created.
   * 
   * @example
   * The specified parameter “%s” cannot be null.
   */
  message?: string;
  /**
   * @remarks
   * The details of the output caption.
   */
  outSubtitleFile?: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile;
  /**
   * @remarks
   * Indicates whether the job was successful. Valid values:
   * 
   * *   **true**: The job was successful.
   * *   **false**: The job failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
      message: 'Message',
      outSubtitleFile: 'OutSubtitleFile',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
      message: 'string',
      outSubtitleFile: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitleOutSubtitleFile,
      success: 'boolean',
    };
  }

  validate() {
    if(this.outSubtitleFile && typeof (this.outSubtitleFile as any).validate === 'function') {
      (this.outSubtitleFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


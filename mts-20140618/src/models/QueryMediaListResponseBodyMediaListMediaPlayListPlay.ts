// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaListMediaPlayListPlayFile } from "./QueryMediaListResponseBodyMediaListMediaPlayListPlayFile";


export class QueryMediaListResponseBodyMediaListMediaPlayListPlay extends $dara.Model {
  /**
   * @remarks
   * The name of the workflow activity.
   * 
   * @example
   * example-activity-****
   */
  activityName?: string;
  /**
   * @remarks
   * The bitrate of the media file.
   * 
   * @example
   * 2659.326
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the media file.
   * 
   * @example
   * 7.965000
   */
  duration?: string;
  /**
   * @remarks
   * Indicates whether the media file is encrypted. Valid values:
   * 
   * *   **0**: The media file is not encrypted.
   * *   **1**: The media file is encrypted.
   * 
   * @example
   * 0
   */
  encryption?: string;
  /**
   * @remarks
   * The playback file.
   */
  file?: QueryMediaListResponseBodyMediaListMediaPlayListPlayFile;
  /**
   * @remarks
   * The encoding format of the media file. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mp4
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the media file.
   * 
   * @example
   * 25.0
   */
  fps?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The ID of the workflow that generates the playback file.
   * 
   * @example
   * 93ab850b4f6f44eab54b6e91d24d****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the workflow that generates the playback file.
   * 
   * @example
   * example-mediaworkflow-****
   */
  mediaWorkflowName?: string;
  /**
   * @remarks
   * The size of the media file.
   * 
   * @example
   * 2647692
   */
  size?: string;
  /**
   * @remarks
   * The width of the media file.
   * 
   * @example
   * 760
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      bitrate: 'Bitrate',
      duration: 'Duration',
      encryption: 'Encryption',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      size: 'Size',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      bitrate: 'string',
      duration: 'string',
      encryption: 'string',
      file: QueryMediaListResponseBodyMediaListMediaPlayListPlayFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      size: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


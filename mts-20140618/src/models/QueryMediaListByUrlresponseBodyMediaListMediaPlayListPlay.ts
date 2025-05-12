// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaPlayListPlayFile } from "./QueryMediaListByUrlresponseBodyMediaListMediaPlayListPlayFile";


export class QueryMediaListByURLResponseBodyMediaListMediaPlayListPlay extends $dara.Model {
  /**
   * @remarks
   * The name of the workflow activity.
   * 
   * @example
   * test name
   */
  activityName?: string;
  /**
   * @remarks
   * The bitrate of the media file.
   * 
   * @example
   * 25.067
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration.
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
   * 1
   */
  encryption?: string;
  /**
   * @remarks
   * The playback file.
   */
  file?: QueryMediaListByURLResponseBodyMediaListMediaPlayListPlayFile;
  /**
   * @remarks
   * The encoding format of the media file. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mov
   */
  format?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 25.0
   */
  fps?: string;
  /**
   * @remarks
   * The height of the media file.
   * 
   * @example
   * 10
   */
  height?: string;
  /**
   * @remarks
   * The ID of the workflow that generates the playback file.
   * 
   * @example
   * 6cc3aa66d1cb4bb2adf14e726c0a****
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
   * The size.
   * 
   * @example
   * 100
   */
  size?: string;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 11
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
      file: QueryMediaListByURLResponseBodyMediaListMediaPlayListPlayFile,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetailFileMeta } from "./MediaConvertOutputDetailFileMeta";


export class MediaConvertOutputDetailResultOutputFile extends $dara.Model {
  /**
   * @remarks
   * The media value.
   * 
   * - When Type is set to OSS, the URL supports the OSS and HTTP protocols.
   * - When Type is set to Media, the value is the media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The media object type. Valid values:
   * - OSS: OSS file.
   * - Media: Media asset ID.
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @remarks
   * The actual file URL when Type is set to Media.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertOutputDetailResult extends $dara.Model {
  /**
   * @remarks
   * The metadata of the audio and video streams.
   */
  outFileMeta?: MediaConvertOutputDetailFileMeta;
  /**
   * @remarks
   * The details of the output file.
   */
  outputFile?: MediaConvertOutputDetailResultOutputFile;
  static names(): { [key: string]: string } {
    return {
      outFileMeta: 'OutFileMeta',
      outputFile: 'OutputFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outFileMeta: MediaConvertOutputDetailFileMeta,
      outputFile: MediaConvertOutputDetailResultOutputFile,
    };
  }

  validate() {
    if(this.outFileMeta && typeof (this.outFileMeta as any).validate === 'function') {
      (this.outFileMeta as any).validate();
    }
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertOutputDetail extends $dara.Model {
  /**
   * @remarks
   * The error code for a transcoding failure.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The time when the output was created. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2024-12-07T06:06:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the output was completed. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2024-12-07T13:01:07Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The detailed cause of the transcoding failure.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The name of the transcoding output.
   * 
   * @example
   * 720P-mp4
   */
  name?: string;
  /**
   * @remarks
   * The details of the output result.
   */
  result?: MediaConvertOutputDetailResult;
  /**
   * @remarks
   * The task status. Valid values:
   * - Init: Initialized.
   * - Scheduled: Scheduled.
   * - Success: Succeeded.
   * - Failed: Failed.
   * - Skipped: Skipped.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the transcoding output task.
   * 
   * @example
   * ******4215e042b3966ca5441e******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      message: 'Message',
      name: 'Name',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      message: 'string',
      name: 'string',
      result: MediaConvertOutputDetailResult,
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


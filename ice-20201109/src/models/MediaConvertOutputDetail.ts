// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetailFileMeta } from "./MediaConvertOutputDetailFileMeta";


export class MediaConvertOutputDetailResultOutputFile extends $dara.Model {
  /**
   * @remarks
   * The value depends on the Type field:
   * 
   * *   If Type is set to OSS, the value is the URL of the output file. The following formats are supported: oss://... and https://...
   * *   If Type is set to Media, the value is the ID of the media asset.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * *   OSS: an Object Storage Service (OSS) object.
   * *   Media: a media asset.
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @remarks
   * If Type is set to Media, this field provides the actual storage URL of the media asset.
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
   * Details about the generated output file.
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
   * The error code for a failed task.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The time the output task was created, in UTC format (*yyyy-MM-dd*T*HH:mm:ss*Z)
   * 
   * @example
   * 2024-12-07T06:06:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the output task finished, in UTC format (*yyyy-MM-dd*T*HH:mm:ss*Z)
   * 
   * @example
   * 2024-12-07T13:01:07Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The reason for a task failure.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The name of the output.
   * 
   * @example
   * 720P-mp4
   */
  name?: string;
  /**
   * @remarks
   * The detailed output results.
   */
  result?: MediaConvertOutputDetailResult;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Init: Initializing the task.
   * *   Scheduled: The task is scheduled for processing.
   * *   Success: The task is completed.
   * *   Failed: The task failed.
   * *   Skipped: The task was skipped.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
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


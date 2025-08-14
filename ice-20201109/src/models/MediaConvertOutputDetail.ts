// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetailFileMeta } from "./MediaConvertOutputDetailFileMeta";


export class MediaConvertOutputDetailResultOutputFile extends $dara.Model {
  media?: string;
  type?: string;
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
  outFileMeta?: MediaConvertOutputDetailFileMeta;
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
  code?: string;
  createTime?: string;
  finishTime?: string;
  message?: string;
  name?: string;
  result?: MediaConvertOutputDetailResult;
  status?: string;
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


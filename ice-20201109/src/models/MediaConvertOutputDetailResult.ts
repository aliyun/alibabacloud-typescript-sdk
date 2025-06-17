// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetailFileMeta } from "./MediaConvertOutputDetailFileMeta";
import { MediaConvertOutputDetailResultOutputFile } from "./MediaConvertOutputDetailResultOutputFile";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FileIDInfo } from "./FileIdinfo";


export class FileTaskResultResponse extends $dara.Model {
  errCode?: string;
  message?: string;
  rstFile?: FileIDInfo;
  srcFile?: FileIDInfo;
  static names(): { [key: string]: string } {
    return {
      errCode: 'err_code',
      message: 'message',
      rstFile: 'rst_file',
      srcFile: 'src_file',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      message: 'string',
      rstFile: FileIDInfo,
      srcFile: FileIDInfo,
    };
  }

  validate() {
    if(this.rstFile && typeof (this.rstFile as any).validate === 'function') {
      (this.rstFile as any).validate();
    }
    if(this.srcFile && typeof (this.srcFile as any).validate === 'function') {
      (this.srcFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


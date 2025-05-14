// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDNAFilesResponseBodyFileListInputFile } from "./ListDnafilesResponseBodyFileListInputFile";


export class ListDNAFilesResponseBodyFileList extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) information about the input file.
   */
  inputFile?: ListDNAFilesResponseBodyFileListInputFile;
  /**
   * @remarks
   * The primary key of the file.
   * 
   * @example
   * ae0fd49c0840e14daf0d66a75b83****
   */
  primaryKey?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      primaryKey: 'PrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: ListDNAFilesResponseBodyFileListInputFile,
      primaryKey: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


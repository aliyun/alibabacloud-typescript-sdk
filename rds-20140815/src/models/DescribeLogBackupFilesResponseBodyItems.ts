// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogBackupFilesResponseBodyItemsBinLogFile } from "./DescribeLogBackupFilesResponseBodyItemsBinLogFile";


export class DescribeLogBackupFilesResponseBodyItems extends $dara.Model {
  binLogFile?: DescribeLogBackupFilesResponseBodyItemsBinLogFile[];
  static names(): { [key: string]: string } {
    return {
      binLogFile: 'BinLogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binLogFile: { 'type': 'array', 'itemType': DescribeLogBackupFilesResponseBodyItemsBinLogFile },
    };
  }

  validate() {
    if(Array.isArray(this.binLogFile)) {
      $dara.Model.validateArray(this.binLogFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


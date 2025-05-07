// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBinlogFilesResponseBodyItemsBinLogFile } from "./DescribeBinlogFilesResponseBodyItemsBinLogFile";


export class DescribeBinlogFilesResponseBodyItems extends $dara.Model {
  binLogFile?: DescribeBinlogFilesResponseBodyItemsBinLogFile[];
  static names(): { [key: string]: string } {
    return {
      binLogFile: 'BinLogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binLogFile: { 'type': 'array', 'itemType': DescribeBinlogFilesResponseBodyItemsBinLogFile },
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


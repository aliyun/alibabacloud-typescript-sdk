// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFpShotFilesResponseBodyFpShotFileListFpShotFile } from "./ListFpShotFilesResponseBodyFpShotFileListFpShotFile";


export class ListFpShotFilesResponseBodyFpShotFileList extends $dara.Model {
  fpShotFile?: ListFpShotFilesResponseBodyFpShotFileListFpShotFile[];
  static names(): { [key: string]: string } {
    return {
      fpShotFile: 'FpShotFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotFile: { 'type': 'array', 'itemType': ListFpShotFilesResponseBodyFpShotFileListFpShotFile },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotFile)) {
      $dara.Model.validateArray(this.fpShotFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileDirSizeInfo extends $dara.Model {
  dirCount?: number;
  fileCount?: number;
  static names(): { [key: string]: string } {
    return {
      dirCount: 'dir_count',
      fileCount: 'file_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirCount: 'number',
      fileCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


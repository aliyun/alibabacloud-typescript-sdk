// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDetachedBackupsResponseBodyItemsBackup } from "./DescribeDetachedBackupsResponseBodyItemsBackup";


export class DescribeDetachedBackupsResponseBodyItems extends $dara.Model {
  backup?: DescribeDetachedBackupsResponseBodyItemsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeDetachedBackupsResponseBodyItemsBackup },
    };
  }

  validate() {
    if(Array.isArray(this.backup)) {
      $dara.Model.validateArray(this.backup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


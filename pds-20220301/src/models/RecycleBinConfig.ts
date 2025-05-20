// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecycleBinConfig extends $dara.Model {
  autoDeleteEnabled?: boolean;
  autoDeleteKeepSecond?: number;
  deleteTrashNormalFileDisabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoDeleteEnabled: 'auto_delete_enabled',
      autoDeleteKeepSecond: 'auto_delete_keep_second',
      deleteTrashNormalFileDisabled: 'delete_trash_normal_file_disabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteEnabled: 'boolean',
      autoDeleteKeepSecond: 'number',
      deleteTrashNormalFileDisabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


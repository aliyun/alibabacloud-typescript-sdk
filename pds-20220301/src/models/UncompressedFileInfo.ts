// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UncompressedFileInfo extends $dara.Model {
  driveId?: string;
  fileId?: string;
  isFolder?: boolean;
  items?: UncompressedFileInfo[];
  name?: string;
  size?: number;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      isFolder: 'is_folder',
      items: 'items',
      name: 'name',
      size: 'size',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      isFolder: 'boolean',
      items: { 'type': 'array', 'itemType': UncompressedFileInfo },
      name: 'string',
      size: 'number',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


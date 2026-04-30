// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArchiveFilesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_archive_files.zip
   */
  name?: string;
  /**
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileIds: 'file_ids',
      name: 'name',
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      shareId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileIds)) {
      $dara.Model.validateArray(this.fileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


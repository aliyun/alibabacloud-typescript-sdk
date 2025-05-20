// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUploadUrlRequestPartInfoList } from "./GetUploadUrlRequestPartInfoList";


export class GetUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5d5b846942cf94fa72324c14a4bda34e81da635d
   */
  fileId?: string;
  /**
   * @remarks
   * The information about the file parts.
   * 
   * This parameter is required.
   */
  partInfoList?: GetUploadUrlRequestPartInfoList[];
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10166D06127B413BA1EC8ABB1144D111
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      partInfoList: 'part_info_list',
      shareId: 'share_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': GetUploadUrlRequestPartInfoList },
      shareId: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.partInfoList)) {
      $dara.Model.validateArray(this.partInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


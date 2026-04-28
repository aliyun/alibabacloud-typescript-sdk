// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageProcess } from "./ImageProcess";


export class GetFileRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The fields to return.
   * 
   * 1.  If this parameter is set to \\*, all fields of the file except the fields that must be specified are returned.
   * 2.  If only specific fields are required, you can specify the following fields: url, thumbnail, exif, cropping_suggestion, characteristic_hash, video_metadata, and video_preview_metadata. If multiple fields are required, separate them with commas (,). Example: url,thumbnail.
   * 3.  The investigation_info field is returned only if it is specified.
   * 
   * By default, all fields except the fields that must be specified are returned.
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The share ID. If you want to share a file, carry the `x-share-token` header for authentication in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify one of `share_id` and `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The thumbnail configurations. Up to five thumbnails can be returned at a time. The value contains key-value pairs. You can customize the keys. The URL of a thumbnail is returned based on the key.
   */
  thumbnailProcesses?: { [key: string]: ImageProcess };
  /**
   * @remarks
   * The time when the file expires. Unit: seconds. Valid values: 10 to 14400.
   * 
   * @example
   * 100
   */
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      fileId: 'file_id',
      shareId: 'share_id',
      thumbnailProcesses: 'thumbnail_processes',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      fileId: 'string',
      shareId: 'string',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
      urlExpireSec: 'number',
    };
  }

  validate() {
    if(this.thumbnailProcesses) {
      $dara.Model.validateMap(this.thumbnailProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


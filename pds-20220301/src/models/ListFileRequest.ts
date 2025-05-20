// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageProcess } from "./ImageProcess";


export class ListFileRequest extends $dara.Model {
  /**
   * @remarks
   * The file category. Valid values:
   * 
   * app: installation package zip: compressed package image doc: document video audio others
   * 
   * By default, files of all categories are returned.
   * 
   * @example
   * image
   */
  category?: string;
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
   * The field that is used to return additional information about a child subject. Valid values:
   * 
   * *   url: returns the URL of the thumbnail of a file in the response.
   * *   exif: returns the Exchangeable Image File Format (EXIF) data of a file in the response.
   * *   cropping_suggestion: returns the cropping suggestion on a file in the response.
   * *   characteristic_hash: returns the characteristic hash value of a file in the response.
   * *   video_metadata: returns the metadata of a video file, such as the video duration, bitrate, height, and width, in the response.
   * *   video_preview_metadata: returns the transcoding information of a video file, such as the transcoding specification for each definition, in the response.
   * *   investigation_info: returns the investigation information in the response.
   * *   dir_size: returns the statistics on each subfolder in the response.
   * *   user_tags: returns the user tags of each child subject in the response.
   * 
   * You can specify multiple fields by separating them with commas (,). Example: "url,dir_size,user_tags".
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.
   * 
   * The number of returned entries must be less than or equal to the value of this parameter.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The name of the entry after which the list begins. Entries whose names are alphabetically after the value of this parameter are returned. If you do not specify this parameter, all entries are returned.\\
   * This parameter is left empty by default.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The sorting field. Valid values:
   * 
   * created_at: sorts the entries by creation time. updated_at: sorts the entries by update time. size: sorts the entries by file size. name: sorts the entries by file name.
   * 
   * Default value: created_at.
   * 
   * Enumeration:
   * 
   * *   updated_at: update time
   * *   size: file size
   * *   name: file name
   * *   created_at: creation time
   * 
   * @example
   * updated_at
   */
  orderBy?: string;
  /**
   * @remarks
   * The sorting direction. Valid values:
   * 
   * ASC: ascending order DESC: descending order
   * 
   * Default value: ASC.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The ID of the parent folder. If the parent folder is a root directory, set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  parentFileId?: string;
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
   * The state of the files to return. Valid values:
   * 
   * available: returns only normal files. uploading: returns only files that are being uploaded.
   * 
   * By default, only files in the available state are returned.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The thumbnail configurations. Up to five thumbnails can be returned at a time. The value contains key-value pairs. You can customize the keys. The URL of a thumbnail is returned based on the key.
   */
  thumbnailProcesses?: { [key: string]: ImageProcess };
  /**
   * @remarks
   * The file type. Valid values:
   * 
   * file: returns only files. folder: returns only folders.
   * 
   * By default, files of all types are returned.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      parentFileId: 'parent_file_id',
      shareId: 'share_id',
      status: 'status',
      thumbnailProcesses: 'thumbnail_processes',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      parentFileId: 'string',
      shareId: 'string',
      status: 'string',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
      type: 'string',
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


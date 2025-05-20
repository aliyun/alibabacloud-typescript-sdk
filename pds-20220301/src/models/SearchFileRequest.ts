// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageProcess } from "./ImageProcess";


export class SearchFileRequest extends $dara.Model {
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
   * The field that is used to return additional information about files. Valid values:
   * 
   * *   dir_size: returns the statistics on each subfolder in the response.
   * *   id_path: returns the id_path value of each child subject in the response.
   * *   name_path: returns the name_path value of each child subject in the response.
   * 
   * You can specify multiple fields by separating them with commas (,). Example: "id_path,name_path,dir_size".
   * 
   * @example
   * url,thumbnail
   */
  fields?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 100.
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
   * The field by which to sort the returned entries. Default value: created_at. Valid values:
   * 
   * *   created_at: sorts the entries by creation time.
   * *   updated_at: sorts the entries by update time.
   * *   size: sorts the entries by file size.
   * *   name: sorts the entries by file name.
   * 
   * The order in which you want to sort the returned entries. Valid values:
   * 
   * *   ASC: ascending order
   * *   DESC: descending order
   * 
   * You must specify this parameter in the \\<field> \\<ASC or DESC> format. Separate multiple fields with commas (,). A preceding field has a higher priority than a following field. Examples:
   * 
   * *   If you want to sort the entries by file name in ascending order, set this parameter to "name ASC".
   * *   If you want to sort the entries by creation time in descending order, set this parameter to "created_at DESC".
   * *   If you want to sort the entries by creation time in descending order and sort the entries by file name in ascending order in case of the same creation time, set this parameter to "created_at DESC,name ASC".
   * 
   * @example
   * name
   */
  orderBy?: string;
  /**
   * @remarks
   * The search conditions. Fuzzy searches based on the file name or directory name are supported. The value of this parameter can be up to 4,096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * not name=123
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to perform recursive search on a folder that is specified by setting parent_file_id in the query parameter.
   * 
   * @example
   * true
   */
  recursive?: boolean;
  /**
   * @remarks
   * Specifies whether to return the total number of retrieved files.
   * 
   * @example
   * true
   */
  returnTotalCount?: boolean;
  /**
   * @remarks
   * The thumbnail configurations. Up to five thumbnails can be returned at a time. The value contains key-value pairs. You can customize the keys. The URL of a thumbnail is returned based on the key.
   */
  thumbnailProcesses?: { [key: string]: ImageProcess };
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      query: 'query',
      recursive: 'recursive',
      returnTotalCount: 'return_total_count',
      thumbnailProcesses: 'thumbnail_processes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      query: 'string',
      recursive: 'boolean',
      returnTotalCount: 'boolean',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
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


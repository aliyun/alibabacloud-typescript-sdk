// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageProcess } from "./ImageProcess";


export class ListRecyclebinRequest extends $dara.Model {
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
   * The fields of an entry (file or folder) to return.
   * 
   * 1\\. If you set this parameter to \\*, all fields are returned.
   * 
   * 2\\. If you set this parameter to a null value or leave this parameter empty, the fields, such as file creator, file modifier, and custom tags, are not returned.
   * 
   * The default value is a null value, which indicates that only some fields are returned.
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 200. Default value: 50.
   * 
   * The number of returned entries must be less than or equal to the value of this parameter.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The name of the entry after which the list begins. Entries whose names are alphabetically after the value of this parameter are returned. If you do not specify this parameter, all entries are returned. This parameter is left empty by default.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
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
      thumbnailProcesses: 'thumbnail_processes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
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


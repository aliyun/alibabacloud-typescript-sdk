// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRumUploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * Information of files to be deleted in JSON array format. If a single file needs to be deleted, this field should be left empty. If multiple files need to be deleted, just fill in this field.
   * 
   * @example
   * [{
   *     "fileName" : "test.js.map",
   *     "version" : "1.0.0"
   *   },
   *   {
   *     "fileName" : "test.dSYM",
   *     "version" : "1.20.1",
   *     "uuid" : "xxxx-xxxx-xxxx-xxxx"
   *   }]
   */
  batchItems?: string;
  /**
   * @remarks
   * The file name, with the extension.
   * 
   * @example
   * test.js.map
   */
  fileName?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * MS4wLjAtbWFpbi4wZjM0NzRlOSxxxxxx
   */
  uuid?: string;
  /**
   * @remarks
   * The version number of the file.
   * 
   * @example
   * 1.0.0
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      batchItems: 'BatchItems',
      fileName: 'FileName',
      pid: 'Pid',
      regionId: 'RegionId',
      uuid: 'Uuid',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchItems: 'string',
      fileName: 'string',
      pid: 'string',
      regionId: 'string',
      uuid: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


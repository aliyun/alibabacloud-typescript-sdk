// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRumUploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * The batch deletion parameters in JSON array format. Leave this parameter empty if you want to delete a single file. If you want to delete multiple files in a batch, specify only this parameter.
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
   * The file name, including the file name extension.
   * 
   * @example
   * test.js.map
   */
  fileName?: string;
  /**
   * @remarks
   * The application ID.
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
  serviceId?: string;
  /**
   * @remarks
   * The unique ID of the file.
   * 
   * @example
   * MS4wLjAtbWFpbi4wZjM0NzRlOSxxxxxx
   */
  uuid?: string;
  /**
   * @remarks
   * The file version number.
   * 
   * @example
   * 1.0.0
   */
  versionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      batchItems: 'BatchItems',
      fileName: 'FileName',
      pid: 'Pid',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      uuid: 'Uuid',
      versionId: 'VersionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchItems: 'string',
      fileName: 'string',
      pid: 'string',
      regionId: 'string',
      serviceId: 'string',
      uuid: 'string',
      versionId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


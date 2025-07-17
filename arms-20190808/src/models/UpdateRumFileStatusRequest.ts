// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRumFileStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The file name.
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
   * atc8xxxx
   * cf@d8deedfa9bf****
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
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 20
   */
  size?: string;
  /**
   * @remarks
   * The status of the file. Valid values: SUCCESS and INIT.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The unique ID of the file. If you do not set this parameter, the system automatically sets a UUID for you.
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
      fileName: 'FileName',
      pid: 'Pid',
      regionId: 'RegionId',
      size: 'Size',
      status: 'Status',
      uuid: 'Uuid',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      pid: 'string',
      regionId: 'string',
      size: 'string',
      status: 'string',
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


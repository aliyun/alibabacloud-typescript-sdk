// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRumUploadFileUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The type of the file. You can set this parameter to "application/zip", "text/plain", or an empty string.
   * 
   * @example
   * text/plain
   */
  contentType?: string;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.js.map
   */
  fileName?: string;
  /**
   * @remarks
   * The process ID (PID) of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * iioe7jcnuk@582846f37******
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
   * The file type. Valid values: source-map: SourceMap files. mapping: symbol table files for Android. dsym: dSYM files for iOS.
   * 
   * @example
   * source-map
   */
  sourcemapType?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 125bdb39-a415-4503-bd96-e293925fc64c
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
      appName: 'AppName',
      contentType: 'ContentType',
      fileName: 'FileName',
      pid: 'Pid',
      regionId: 'RegionId',
      sourcemapType: 'SourcemapType',
      uuid: 'Uuid',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      contentType: 'string',
      fileName: 'string',
      pid: 'string',
      regionId: 'string',
      sourcemapType: 'string',
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


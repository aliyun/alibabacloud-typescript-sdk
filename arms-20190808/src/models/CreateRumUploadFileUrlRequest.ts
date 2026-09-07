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
   * The file type. Valid values include `"application/zip"` and `"text/plain"`. You can also pass an empty string.
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
   * The application ID.
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
  serviceId?: string;
  /**
   * @remarks
   * The file type. Valid values:
   * 
   * - source-map: a source map file
   * 
   * - mapping: an Android symbol table file
   * 
   * - dsym: an iOS dSYM file
   * 
   * @example
   * source-map
   */
  sourcemapType?: string;
  /**
   * @remarks
   * The UUID of the file.
   * 
   * @example
   * 125bdb39-a415-4503-bd96-e293925fc64c
   */
  uuid?: string;
  /**
   * @remarks
   * The file version.
   * 
   * @example
   * 1.0.0
   */
  versionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      contentType: 'ContentType',
      fileName: 'FileName',
      pid: 'Pid',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      sourcemapType: 'SourcemapType',
      uuid: 'Uuid',
      versionId: 'VersionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      contentType: 'string',
      fileName: 'string',
      pid: 'string',
      regionId: 'string',
      serviceId: 'string',
      sourcemapType: 'string',
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


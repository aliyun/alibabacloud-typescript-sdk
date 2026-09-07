// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumUploadFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The file type. Valid values:
   * 
   * - source-map: SourceMap file.
   * - mapping: Android symbol table file.
   * - dsym: iOS dSYM file.
   * 
   * @example
   * source-map
   */
  appType?: string;
  fileName?: string;
  nextToken?: string;
  pageSize?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * aoxxxxxly@741623b4e91****
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
   * The file version number. If this parameter is not specified, files of all versions are returned by default.
   * 
   * @example
   * 1.0.0
   */
  versionId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      fileName: 'FileName',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      versionId: 'VersionId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      fileName: 'string',
      nextToken: 'string',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      serviceId: 'string',
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


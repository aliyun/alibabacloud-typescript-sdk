// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumUploadFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The file type. Valid values: source-map: SourceMap files. mapping: symbol table files for Android. dsym: dSYM files for iOS.
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
   * The process ID (PID) of the application.
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
  /**
   * @remarks
   * The version number of the files. If you do not specify this parameter, all versions of the files are returned by default.
   * 
   * @example
   * 1.0.0
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      fileName: 'FileName',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      versionId: 'VersionId',
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


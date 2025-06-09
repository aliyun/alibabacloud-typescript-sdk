// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSymbolicFilesRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  buildId?: string;
  /**
   * @example
   * 1743523199999
   */
  endTime?: number;
  /**
   * @example
   * NORMAL
   */
  exportStatus?: string;
  /**
   * @example
   * app_so.zip
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_SO
   */
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1742918400000
   */
  startTime?: number;
  /**
   * @remarks
   * uuid
   * 
   * @example
   * abcf4a4b-158c-4a0b-b81c-262785d84c4f
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appVersion: 'AppVersion',
      buildId: 'BuildId',
      endTime: 'EndTime',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      fileType: 'FileType',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appVersion: 'string',
      buildId: 'string',
      endTime: 'number',
      exportStatus: 'string',
      fileName: 'string',
      fileType: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      startTime: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


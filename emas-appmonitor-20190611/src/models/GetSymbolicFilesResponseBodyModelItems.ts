// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSymbolicFilesResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @example
   * e8a1a2b9ab653780b34383a942ac91b2
   */
  buildId?: string;
  /**
   * @example
   * EXPORT_SUCCESS
   */
  exportStatus?: string;
  /**
   * @example
   * app_so.zip
   */
  fileName?: string;
  /**
   * @example
   * 24781204@android/1743506690915-app_so.zip
   */
  filePath?: string;
  /**
   * @example
   * APP_SO
   */
  fileType?: string;
  /**
   * @example
   * 1655962713000
   */
  gmtCreate?: number;
  /**
   * @example
   * 392522
   */
  id?: number;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * uuid
   * 
   * @example
   * 9634758587856312DEV
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      buildId: 'BuildId',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileType: 'FileType',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      buildId: 'string',
      exportStatus: 'string',
      fileName: 'string',
      filePath: 'string',
      fileType: 'string',
      gmtCreate: 'number',
      id: 'number',
      status: 'string',
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


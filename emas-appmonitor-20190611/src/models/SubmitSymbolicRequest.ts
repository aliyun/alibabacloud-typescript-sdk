// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSymbolicRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24781204
   */
  appKey?: number;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * ab6b81d800968f2
   */
  buildId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app_so.zip
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24781204@android/1743506690915-app_so.zip
   */
  filePath?: string;
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
      fileName: 'FileName',
      filePath: 'FilePath',
      fileType: 'FileType',
      os: 'Os',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appVersion: 'string',
      buildId: 'string',
      fileName: 'string',
      filePath: 'string',
      fileType: 'string',
      os: 'string',
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


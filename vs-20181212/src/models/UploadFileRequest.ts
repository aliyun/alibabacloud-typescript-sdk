// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mytest
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 150b6083f50dd08159d45a0d5e4b56f9
   */
  md5?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx.xxx.xxx.tar
   */
  originUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /data/tmp/test/xxx.tar
   */
  targetPath?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileName: 'FileName',
      md5: 'Md5',
      originUrl: 'OriginUrl',
      targetPath: 'TargetPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileName: 'string',
      md5: 'string',
      originUrl: 'string',
      targetPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * 测试使用
   */
  description?: string;
  /**
   * @remarks
   * A custom file name. The name must be unique and serves as a unique identifier for the file. The name must meet the following requirements:
   * 
   * 1. It must be 8 to 255 characters in length.
   * 
   * 2. It can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * 3. The first and last characters must be a letter or a digit.
   * 
   * This parameter is required.
   * 
   * @example
   * mytest
   */
  fileName?: string;
  /**
   * @remarks
   * The MD5 hash of the file. This is used to verify the integrity of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 150b6083f50dd08159d45a0d5e4b56f9
   */
  md5?: string;
  /**
   * @remarks
   * The download URL of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxx.xxx.xxx.tar
   */
  originUrl?: string;
  /**
   * @remarks
   * The destination path on the service instance. This must be an absolute path to a file. You cannot specify only a folder. The parent folder of the destination path is restricted to the following locations:
   * 
   * 1. /data/local
   * 
   * 2. /data/user
   * 
   * 3. /data/data
   * 
   * 4. /data/cache
   * 
   * 5. /data/tmp
   * 
   * 6. /data/storage
   * 
   * 7. /data/media/0
   * 
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


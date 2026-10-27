// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockCreateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The defense mode. Valid values:
   * 
   * - **block**: Blocks requests.
   * - **audit**: Generates alerts.
   * 
   * This parameter is required.
   * 
   * @example
   * block
   */
  defenceMode?: string;
  /**
   * @remarks
   * The protected directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /home/admin/tomcat
   */
  dir?: string;
  /**
   * @remarks
   * The directory that does not require web tamper-proofing (excluded directory).
   * > If the defense pattern **Mode** is set to **blacklist**, you must configure this parameter.
   * 
   * @example
   * /home/admin/test
   */
  exclusiveDir?: string;
  /**
   * @remarks
   * The files that do not require web tamper-proofing (excluded files).
   * > If the defense pattern **Mode** is set to **blacklist**, you must configure this parameter.
   * 
   * @example
   * /home/admin/apache.log
   */
  exclusiveFile?: string;
  /**
   * @remarks
   * The file types that do not require web tamper-proofing (excluded file types). Separate multiple file types with a semicolon. Valid values:
   * - php
   * - jsp
   * - asp
   * - aspx
   * - js
   * - cgi
   * - html
   * - htm
   * - xml
   * - shtml
   * - shtm
   * - jpg
   * - gif
   * - png
   * 
   * > If the defense pattern **Mode** is set to **blacklist**, you must configure this parameter.
   * 
   * @example
   * jpg
   */
  exclusiveFileType?: string;
  /**
   * @remarks
   * The files that require protection.
   * > If the defense pattern **Mode** is set to **whitelist**, you must configure this parameter.
   * 
   * @example
   * /home/admin/test.log
   */
  inclusiveFile?: string;
  /**
   * @remarks
   * The file types that require web tamper-proofing. Separate multiple file types with a semicolon. Valid values:
   * - php
   * - jsp
   * - asp
   * - aspx
   * - js
   * - cgi
   * - html
   * - htm
   * - xml
   * - shtml
   * - shtm
   * - jpg
   * - gif
   * - png
   * 
   * > If the defense pattern **Mode** is set to **whitelist**, you must configure this parameter.
   * 
   * @example
   * jpg
   */
  inclusiveFileType?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The local backup path used for the secure backup of the protected directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /usr/local/backup
   */
  localBackupDir?: string;
  /**
   * @remarks
   * The protection mode of the directory. Valid values:
   * - **whitelist**: Whitelist mode. Protects the added protected directories and file types.
   * - **blacklist**: Blacklist mode. Protects all subdirectories, file types, and specified files under the added protected directory that are not excluded.
   * 
   * @example
   * whitelist
   */
  mode?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server for which you want to add a protected directory.
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * inet-12345****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      defenceMode: 'DefenceMode',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFile: 'ExclusiveFile',
      exclusiveFileType: 'ExclusiveFileType',
      inclusiveFile: 'InclusiveFile',
      inclusiveFileType: 'InclusiveFileType',
      lang: 'Lang',
      localBackupDir: 'LocalBackupDir',
      mode: 'Mode',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenceMode: 'string',
      dir: 'string',
      exclusiveDir: 'string',
      exclusiveFile: 'string',
      exclusiveFileType: 'string',
      inclusiveFile: 'string',
      inclusiveFileType: 'string',
      lang: 'string',
      localBackupDir: 'string',
      mode: 'string',
      sourceIp: 'string',
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


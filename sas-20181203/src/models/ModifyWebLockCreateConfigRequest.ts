// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockCreateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The defense mode. Valid values:
   * 
   * - **block**: Block mode.
   * - **audit**: Alert mode.
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
   * The folder to exclude from web tamper proofing protection.
   * > This parameter is required when the Defense mode **Mode** is set to **blacklist** pattern.
   * 
   * @example
   * /home/admin/test
   */
  exclusiveDir?: string;
  /**
   * @remarks
   * The file to exclude from web tamper proofing protection.
   * > This parameter is required when the Defense mode **Mode** is set to **blacklist** pattern.
   * 
   * @example
   * /home/admin/apache.log
   */
  exclusiveFile?: string;
  /**
   * @remarks
   * The file types to exclude from web tamper proofing protection. Separate multiple file types with semicolons (;). Valid values:
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
   * > This parameter is required when the Defense mode **Mode** is set to **blacklist** pattern.
   * 
   * @example
   * jpg
   */
  exclusiveFileType?: string;
  /**
   * @remarks
   * The file to protect.
   * > This parameter is required when the Defense mode **Mode** is set to **whitelist** pattern.
   * 
   * @example
   * /home/admin/test.log
   */
  inclusiveFile?: string;
  /**
   * @remarks
   * The file types to protect with web tamper proofing. Separate multiple file types with semicolons (;). Valid values:
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
   * > This parameter is required when the Defense mode **Mode** is set to **whitelist** pattern.
   * 
   * @example
   * jpg
   */
  inclusiveFileType?: string;
  /**
   * @remarks
   * The language type of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The local backup path used for secure backup of the protected directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /usr/local/backup
   */
  localBackupDir?: string;
  /**
   * @remarks
   * The protection directory mode. Valid values:
   * - **whitelist**: whitelist mode. Protects only the specified directories and file types.
   * - **blacklist**: blacklist mode. Protects all subdirectories, file types, and specified files under the protected directory that are not excluded.
   * 
   * @example
   * whitelist
   */
  mode?: string;
  /**
   * @remarks
   * The IP address of the access source.
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


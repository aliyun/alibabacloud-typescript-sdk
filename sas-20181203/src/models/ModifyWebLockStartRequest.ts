// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockStartRequest extends $dara.Model {
  /**
   * @remarks
   * The defense mode. Valid values:
   * 
   * - **block**: block
   * - **audit**: alert.
   * 
   * This parameter is required.
   * 
   * @example
   * block
   */
  defenceMode?: string;
  /**
   * @remarks
   * The protection directories. Separate multiple directories with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * /home/admin/tomcat
   */
  dir?: string;
  /**
   * @remarks
   * The folder that does not require web tamper proofing protection (excluded folder).
   * > This parameter is required when the Defense mode **Mode** is set to the **blacklist** pattern.
   * 
   * @example
   * /home/admin/java
   */
  exclusiveDir?: string;
  /**
   * @remarks
   * The files that do not require web tamper proofing protection (excluded files).
   * > This parameter is required when the Defense mode **Mode** is set to the **blacklist** pattern.
   * 
   * @example
   * /home/admin/tomcat/localhost.log
   */
  exclusiveFile?: string;
  /**
   * @remarks
   * The file types that do not require web tamper proofing protection (excluded file types). Separate multiple file types with commas (,). Valid values:
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
   * > This parameter is required when the Defense mode **Mode** is set to the **blacklist** pattern.
   * 
   * @example
   * jpg
   */
  exclusiveFileType?: string;
  /**
   * @remarks
   * The file types that require web tamper proofing protection. Separate multiple file types with commas (,). Valid values:
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
   * > This parameter is required when the Defense mode **Mode** is set to the **whitelist** pattern.
   * 
   * @example
   * php
   */
  inclusiveFileType?: string;
  /**
   * @remarks
   * The local backup path used to back up the protection directories. The format of the protection directory path may differ between Linux servers and Windows servers. Make sure that you enter the path in the correct format. The following examples show the directory formats:
   *  - Linux server: /usr/local/aegis/bak
   *  - Windows server: C:\\Program Files (x86)\\Alibaba\\Aegis\\bak.
   * 
   * This parameter is required.
   * 
   * @example
   * /usr/local/backup
   */
  localBackupDir?: string;
  /**
   * @remarks
   * The protection type. Valid values:
   * - **whitelist**: whitelist mode. Protects the specified protection directories and file types.
   * - **blacklist**: blacklist mode. Protects all subdirectories, file types, and specified files in the protection directories that are not excluded.
   * 
   * This parameter is required.
   * 
   * @example
   * whitelist
   */
  mode?: string;
  /**
   * @remarks
   * The UUID of the server that you want to protect.
   * 
   * This parameter is required.
   * 
   * @example
   * 80d2f7d6-31a9-4d7f-8ff4-7ecc42f89ca****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      defenceMode: 'DefenceMode',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFile: 'ExclusiveFile',
      exclusiveFileType: 'ExclusiveFileType',
      inclusiveFileType: 'InclusiveFileType',
      localBackupDir: 'LocalBackupDir',
      mode: 'Mode',
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
      inclusiveFileType: 'string',
      localBackupDir: 'string',
      mode: 'string',
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


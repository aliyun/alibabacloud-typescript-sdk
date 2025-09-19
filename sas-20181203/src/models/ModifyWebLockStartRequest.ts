// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockStartRequest extends $dara.Model {
  /**
   * @remarks
   * The prevention mode. Valid values:
   * 
   * *   **block**: Interception Mode
   * *   **audit**: Alert Mode
   * 
   * This parameter is required.
   * 
   * @example
   * block
   */
  defenceMode?: string;
  /**
   * @remarks
   * The directory for which you want to enable web tamper proofing. Separate multiple directories with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * /home/admin/tomcat
   */
  dir?: string;
  /**
   * @remarks
   * The directory for which you want to disable web tamper proofing.
   * 
   * > If you set **Mode** to **blacklist**, you must specify this parameter.
   * 
   * @example
   * /home/admin/java
   */
  exclusiveDir?: string;
  /**
   * @remarks
   * The file for which you want to disable web tamper proofing.
   * 
   * > If you set **Mode** to **blacklist**, you must specify this parameter.
   * 
   * @example
   * /home/admin/tomcat/localhost.log
   */
  exclusiveFile?: string;
  /**
   * @remarks
   * The type of the file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
   * 
   * *   php
   * *   jsp
   * *   asp
   * *   aspx
   * *   js
   * *   cgi
   * *   html
   * *   htm
   * *   xml
   * *   shtml
   * *   shtm
   * *   jpg
   * *   gif
   * *   png
   * 
   * > If you set **Mode** to **blacklist**, you must specify this parameter.
   * 
   * @example
   * jpg
   */
  exclusiveFileType?: string;
  /**
   * @remarks
   * The type of the file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
   * 
   * *   php
   * *   jsp
   * *   asp
   * *   aspx
   * *   js
   * *   cgi
   * *   html
   * *   htm
   * *   xml
   * *   shtml
   * *   shtm
   * *   jpg
   * *   gif
   * *   png
   * 
   * > If you set **Mode** to **whitelist**, you must specify this parameter.
   * 
   * @example
   * php
   */
  inclusiveFileType?: string;
  /**
   * @remarks
   * The local path to the backup files of the protected directory.\\
   * The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:
   * 
   * *   Linux server: /usr/local/aegis/bak
   * *   Windows server: C:\\Program Files (x86)\\Alibaba\\Aegis\\bak
   * 
   * This parameter is required.
   * 
   * @example
   * /usr/local/backup
   */
  localBackupDir?: string;
  /**
   * @remarks
   * The protection mode of web tamper proofing. Valid values:
   * 
   * *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
   * *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified subdirectories, file types, and files in the protected directory.
   * 
   * This parameter is required.
   * 
   * @example
   * whitelist
   */
  mode?: string;
  /**
   * @remarks
   * The UUID of the server for which you want to enable web tamper proofing.
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


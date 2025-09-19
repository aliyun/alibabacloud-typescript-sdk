// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockUpdateConfigRequest extends $dara.Model {
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
   * The directory for which you want to enable web tamper proofing.
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
   * /home/admin/test
   */
  exclusiveDir?: string;
  /**
   * @remarks
   * The file for which you want to disable web tamper proofing.
   * 
   * > If you set **Mode** to **blacklist**, you must specify this parameter.
   * 
   * @example
   * /home/admin/apache.log
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
   * The ID of the protected directory for which you want to change the status of web tamper proofing.
   * 
   * > You can call the [DescribeWebLockConfigList](~~DescribeWebLockConfigList~~) operation to query the IDs of protected directories.
   * 
   * This parameter is required.
   * 
   * @example
   * 312077
   */
  id?: number;
  /**
   * @remarks
   * The file for which you want to enable web tamper proofing.
   * 
   * > If you set **Mode** to **whitelist**, you must specify this parameter.
   * 
   * @example
   * /home/admin/test.log
   */
  inclusiveFile?: string;
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
   * jpg
   */
  inclusiveFileType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * @example
   * blacklist
   */
  mode?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 36.112.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server on which the protected directory is located.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      defenceMode: 'DefenceMode',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFile: 'ExclusiveFile',
      exclusiveFileType: 'ExclusiveFileType',
      id: 'Id',
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
      id: 'number',
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


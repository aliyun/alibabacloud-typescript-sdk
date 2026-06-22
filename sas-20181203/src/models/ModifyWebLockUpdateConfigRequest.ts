// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockUpdateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The defense mode. Valid values:
   * 
   * - **block**: Block.
   * - **audit**: Alert.
   * 
   * This parameter is required.
   * 
   * @example
   * block
   */
  defenceMode?: string;
  /**
   * @remarks
   * The full path of the directory that you want to protect.
   * 
   * This parameter is required.
   * 
   * @example
   * /home/admin/tomcat
   */
  dir?: string;
  /**
   * @remarks
   * The directory that does not require web tamper-proofing protection (excluded directory).
   * > This parameter is required when the protection pattern **Mode** is set to **blacklist**.
   * 
   * @example
   * /home/admin/test
   */
  exclusiveDir?: string;
  /**
   * @remarks
   * The file that does not require web tamper-proofing protection (excluded file).
   * > This parameter is required when the protection pattern **Mode** is set to **blacklist**.
   * 
   * @example
   * /home/admin/apache.log
   */
  exclusiveFile?: string;
  /**
   * @remarks
   * The file types that do not require web tamper-proofing protection (excluded file types). Separate multiple file types with semicolons (;). Valid values:
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
   * > This parameter is required when the protection pattern **Mode** is set to **blacklist**.
   * 
   * @example
   * jpg
   */
  exclusiveFileType?: string;
  /**
   * @remarks
   * The ID of the protected directory configuration that you want to modify.
   * > You can call the [DescribeWebLockConfigList](~~DescribeWebLockConfigList~~) operation to obtain the ID of the protected directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 312077
   */
  id?: number;
  /**
   * @remarks
   * The file that requires protection.
   * > This parameter is required when the protection pattern **Mode** is set to **whitelist**.
   * 
   * @example
   * /home/admin/test.log
   */
  inclusiveFile?: string;
  /**
   * @remarks
   * The file types that require web tamper-proofing protection. Separate multiple file types with semicolons (;). Valid values:
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
   * > This parameter is required when the protection pattern **Mode** is set to **whitelist**.
   * 
   * @example
   * jpg
   */
  inclusiveFileType?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The local backup path for securely backing up the protected directory.  
   * The format of the directory path may differ between Linux servers and Windows servers. Make sure that you enter the correct format. Refer to the following directory formats:
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
   * The protection pattern. Valid values:
   * - **whitelist**: whitelist mode. Protects only the specified directories and file types.
   * - **blacklist**: blacklist mode. Protects all subdirectories, file types, and files under the specified directory except those that are excluded.
   * 
   * @example
   * blacklist
   */
  mode?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 36.112.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server whose protected directory you want to modify.
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUID of the server.
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


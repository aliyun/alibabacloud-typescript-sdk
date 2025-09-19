// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockConfigListResponseBodyConfigList extends $dara.Model {
  /**
   * @remarks
   * The prevention mode. Valid values:
   * 
   * *   **block**: Interception Mode
   * *   **audit**: Alert Mode
   * 
   * @example
   * audit
   */
  defenceMode?: string;
  /**
   * @remarks
   * The directory that has web tamper proofing enabled.
   * 
   * @example
   * /www/tmp/
   */
  dir?: string;
  /**
   * @remarks
   * The directory that has web tamper proofing disabled.
   * 
   * > If the value of **Mode** is **blacklist**, this parameter is returned.
   * 
   * @example
   * /home/admin/tomcat
   */
  exclusiveDir?: string;
  /**
   * @remarks
   * The file that has web tamper proofing disabled.
   * 
   * > If the value of **Mode** is **blacklist**, this parameter is returned.
   * 
   * @example
   * /home/admin/tomcat/localhost.log
   */
  exclusiveFile?: string;
  /**
   * @remarks
   * The type of the file that has web tamper proofing disabled.
   * 
   * > If the value of **Mode** is **blacklist**, this parameter is returned.
   * 
   * @example
   * *.jpg
   */
  exclusiveFileType?: string;
  /**
   * @remarks
   * The configuration ID of the protected directory.
   * 
   * @example
   * 11
   */
  id?: string;
  /**
   * @remarks
   * The file that has web tamper proofing enabled.
   * 
   * > If the value of **Mode** is **whitelist**, this parameter is returned.
   * 
   * @example
   * /home/admin/tomcat/aaa.log
   */
  inclusiveFile?: string;
  /**
   * @remarks
   * The type of the file that has web tamper proofing enabled.
   * 
   * > If the value of **Mode** is **whitelist**, this parameter is returned.
   * 
   * @example
   * jpg
   */
  inclusiveFileType?: string;
  /**
   * @remarks
   * The local path to the backup files of the protected directory.
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
   * The UUID of the server that has web tamper proofing enabled.
   * 
   * @example
   * 80d2f7d6-31a9-4d7f-8ff4-7ecc42f8****
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
      id: 'string',
      inclusiveFile: 'string',
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

export class DescribeWebLockConfigListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of web tamper proofing.
   */
  configList?: DescribeWebLockConfigListResponseBodyConfigList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D9354C1A-D709-4873-9AAE-41513327B247
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of directories that have web tamper proofing enabled on the server.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeWebLockConfigListResponseBodyConfigList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


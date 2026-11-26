// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceGroupSourceFileRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The new file name. This parameter is optional. If you do not specify this parameter or set it to an empty string, the original file name is retained.
   * 
   * @example
   * example
   */
  fileName?: string;
  /**
   * @remarks
   * The OSS persistent storage path of the replacement file.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://example/new.txt
   */
  filePath?: string;
  /**
   * @remarks
   * The OSS persistent storage path of the replacement file.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/new.txt
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The file record ID of the replacement file.
   * 
   * This parameter is required.
   * 
   * @example
   * file_example
   */
  fileRecordId?: string;
  /**
   * @remarks
   * Specifies whether to synchronously wait for re-parsing to complete. Default value: false, which means the task is asynchronously enqueued.
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * source_example
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this parameter explicitly by using `--tenant-id`.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      fileName: 'fileName',
      filePath: 'filePath',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      forceSync: 'forceSync',
      groupId: 'groupId',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      fileName: 'string',
      filePath: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      forceSync: 'boolean',
      groupId: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceGroupSourceFileRequest extends $dara.Model {
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
      fileName: 'fileName',
      filePath: 'filePath',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      forceSync: 'forceSync',
      groupId: 'groupId',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePath: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      forceSync: 'boolean',
      groupId: 'string',
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


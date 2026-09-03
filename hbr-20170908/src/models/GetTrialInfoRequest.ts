// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrialInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **OSS**. The name of the OSS bucket.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **NAS**. The time when the file system was created. UNIX timestamp, in seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **NAS**. The ID of the file system.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The data source type. Only free trial information of OSS backup and NAS backup can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      createTime: 'CreateTime',
      fileSystemId: 'FileSystemId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      createTime: 'number',
      fileSystemId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


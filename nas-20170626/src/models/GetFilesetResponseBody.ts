// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilesetResponseBodyDataQuota extends $dara.Model {
  /**
   * @remarks
   * The file count limit of the quota. Value range:
   * 
   * - Minimum value: 10,000.
   * 
   * - Maximum value: 10,000,000,000.
   * 
   * @example
   * 10001
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total capacity limit of the quota. Unit: bytes.
   * 
   * Value range:
   * 
   * - Minimum value: 10,737,418,240 (10 GiB).
   * 
   * - Increment: 1,073,741,824 (1 GiB).
   * 
   * @example
   * 10,737,418,240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilesetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the Fileset was created.
   * 
   * Format: `yyyy-MM-dd HH:mm:ss`.
   * 
   * @example
   * 2025-11-21 12:49:25
   */
  createTime?: string;
  /**
   * @remarks
   * The release protection property of the instance. Specifies whether the instance can be released from the console or by calling the [DeleteFileset](https://help.aliyun.com/document_detail/2402263.html) operation.
   * 
   * -   true: Release protection is enabled.
   * -   false (default): Release protection is disabled.
   * 
   * > This property applies only to manual release operations and does not apply to system-initiated release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the Fileset.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The file count usage.
   * > Only CPFS for Lingjun 2.7.0 and later support this parameter.
   * 
   * @example
   * 1024
   */
  fileCountUsage?: number;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-125487\\*\\*\\*\\*.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-0015\\*\\*\\*\\*.
   * 
   * @example
   * cpfs-0244729a8ef8****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The path of the Fileset in the CPFS file system.
   * 
   * @example
   * pathtoroot/fset/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The Fileset ID.
   * > This parameter is required if the file system type is CPFS.
   * 
   * @example
   * fset-03250e8fe78d****
   */
  fsetId?: string;
  /**
   * @remarks
   * The quota information.
   * > Only CPFS for Lingjun 2.7.0 and later support this parameter.
   */
  quota?: GetFilesetResponseBodyDataQuota;
  /**
   * @remarks
   * The capacity usage. Unit: bytes.
   * > Only CPFS for Lingjun 2.7.0 and later support this parameter.
   * 
   * @example
   * 1024
   */
  spaceUsage?: number;
  /**
   * @remarks
   * The status of the Fileset. Valid values:
   * 
   * - CREATING: The Fileset is being created.
   * - CREATED: The Fileset is created and running as expected. 
   * - RELEASING: The Fileset is being released.
   * - RELEASED: The Fileset is deleted.
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * The time when the Fileset was last updated.
   * 
   * Format: `yyyy-MM-dd HH:mm:ss`.
   * 
   * @example
   * 2025-11-22 12:49:25
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      fileCountUsage: 'FileCountUsage',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      fsetId: 'FsetId',
      quota: 'Quota',
      spaceUsage: 'SpaceUsage',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      fileCountUsage: 'number',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      fsetId: 'string',
      quota: GetFilesetResponseBodyDataQuota,
      spaceUsage: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilesetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data details.
   */
  data?: GetFilesetResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFilesetResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilesetResponseBodyDataQuota extends $dara.Model {
  /**
   * @remarks
   * The file quantity quota. Valid values:
   * 
   * *   Minimum value: 10,000.
   * *   Maximum value: 10,000,000,000.
   * 
   * @example
   * 10001
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total quota capacity limit. Unit: bytes.
   * 
   * Valid values:
   * 
   * *   Minimum value: 10,737,418,240 (10 GiB).
   * *   Step size: 1,073,741,824 (1 GiB).
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
   * The time when the fileset was created.
   * 
   * Return format: `yyyy-MM-dd HH:mm:ss`
   * 
   * @example
   * 2025-11-21 12:49:25
   */
  createTime?: string;
  /**
   * @remarks
   * Specifies whether the fileset is protected from being released through the console or the [DeleteFileset](https://help.aliyun.com/document_detail/2402263.html) operation.
   * 
   * *   true: Enables release protection. The fileset cannot be released.
   * *   false (default): Disables release protection. The fileset can be released.
   * 
   * >  This parameter can protect filesets only against manual releases, but not against automatic releases.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the fileset.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The usage of the file quantity.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support this parameter.
   * 
   * @example
   * 1024
   */
  fileCountUsage?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * @example
   * cpfs-0244729a8ef8****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The directory of the fileset in the CPFS file system.
   * 
   * @example
   * pathtoroot/fset/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * >  This parameter is required for CPFS file systems.
   * 
   * @example
   * fset-03250e8fe78d****
   */
  fsetId?: string;
  /**
   * @remarks
   * The quota information.
   * 
   * >  Only CPFS for Lingjun V2.7.0 and later support this parameter.
   */
  quota?: GetFilesetResponseBodyDataQuota;
  /**
   * @remarks
   * The capacity usage. Unit: bytes.
   * 
   * >  Only CPFS for Lingjun V2.7.0 and later support this parameter.
   * 
   * @example
   * 1024
   */
  spaceUsage?: number;
  /**
   * @remarks
   * The fileset status. Valid values:
   * 
   * *   CREATING: The fileset is being created.
   * *   CREATED: The fileset has been created and is running properly.
   * *   RELEASING: The fileset is being released.
   * *   RELEASED: The fileset has been deleted.
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * The time when the fileset was last updated.
   * 
   * Return format: `yyyy-MM-dd HH:mm:ss`
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
   * The response parameters.
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


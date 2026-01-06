// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilesetResponseBodyDataQuota extends $dara.Model {
  /**
   * @example
   * 10001
   */
  fileCountLimit?: number;
  /**
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
   * @example
   * 2025-11-21 12:49:25
   */
  createTime?: string;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @example
   * Description
   */
  description?: string;
  /**
   * @example
   * 1024
   */
  fileCountUsage?: number;
  /**
   * @example
   * cpfs-0244729a8ef8****
   */
  fileSystemId?: string;
  /**
   * @example
   * pathtoroot/fset/
   */
  fileSystemPath?: string;
  /**
   * @example
   * fset-03250e8fe78d****
   */
  fsetId?: string;
  quota?: GetFilesetResponseBodyDataQuota;
  /**
   * @example
   * 1024
   */
  spaceUsage?: number;
  /**
   * @example
   * CREATED
   */
  status?: string;
  /**
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
  data?: GetFilesetResponseBodyData;
  /**
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


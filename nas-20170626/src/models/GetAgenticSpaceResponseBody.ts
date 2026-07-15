// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticSpaceResponseBodyAgenticSpaceQuota extends $dara.Model {
  /**
   * @remarks
   * The file count limit of the quota. Valid values:
   * 
   * - Minimum value: 10,000.
   * 
   * - Maximum value: 100,000,000.
   * 
   * @example
   * 10000000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total capacity limit of the quota. Unit: bytes.
   * 
   * Valid values:
   * 
   * - Minimum value: 10,737,418,240 (10 GiB).
   * - Maximum value: 1,099,511,627,776,000 (1024000 GiB).
   * - Step: 1,073,741,824 (1 GiB).
   * 
   * @example
   * 10737418240
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

export class GetAgenticSpaceResponseBodyAgenticSpace extends $dara.Model {
  /**
   * @remarks
   * AgenticSpace Id。
   * 
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  azone?: string;
  /**
   * @remarks
   * The time when the AgenticSpace was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-06-10T10:08:08Z
   */
  createTimeUtc?: string;
  /**
   * @remarks
   * AgenticSpace Description。
   * 
   * @example
   * AgenticSpace Description。
   */
  description?: string;
  /**
   * @remarks
   * The number of files used.
   * 
   * @example
   * 100
   */
  fileCountUsage?: number;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * 06229oypxjgox0u****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of the file.
   * 
   * @example
   * /test/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The quota information.
   */
  quota?: GetAgenticSpaceResponseBodyAgenticSpaceQuota;
  /**
   * @remarks
   * The capacity usage. Unit: bytes.
   * 
   * @example
   * 1024
   */
  spaceUsage?: number;
  /**
   * @remarks
   * The status of the AgenticSpace. Valid values:
   * - Running
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the AgenticSpace was last updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-06-10T10:08:08Z
   */
  updateTimeUtc?: string;
  static names(): { [key: string]: string } {
    return {
      agenticSpaceId: 'AgenticSpaceId',
      azone: 'Azone',
      createTimeUtc: 'CreateTimeUtc',
      description: 'Description',
      fileCountUsage: 'FileCountUsage',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      quota: 'Quota',
      spaceUsage: 'SpaceUsage',
      status: 'Status',
      updateTimeUtc: 'UpdateTimeUtc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpaceId: 'string',
      azone: 'string',
      createTimeUtc: 'string',
      description: 'string',
      fileCountUsage: 'number',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      quota: GetAgenticSpaceResponseBodyAgenticSpaceQuota,
      spaceUsage: 'number',
      status: 'string',
      updateTimeUtc: 'string',
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

export class GetAgenticSpaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AgenticSpace information.
   */
  agenticSpace?: GetAgenticSpaceResponseBodyAgenticSpace;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0D****3E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agenticSpace: 'AgenticSpace',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpace: GetAgenticSpaceResponseBodyAgenticSpace,
      requestId: 'string',
    };
  }

  validate() {
    if(this.agenticSpace && typeof (this.agenticSpace as any).validate === 'function') {
      (this.agenticSpace as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


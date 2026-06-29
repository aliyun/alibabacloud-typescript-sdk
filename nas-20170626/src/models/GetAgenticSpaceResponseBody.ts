// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticSpaceResponseBodyAgenticSpaceQuota extends $dara.Model {
  /**
   * @example
   * 10000000
   */
  fileCountLimit?: number;
  /**
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
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  azone?: string;
  /**
   * @example
   * 2026-06-10T10:08:08Z
   */
  createTimeUtc?: string;
  /**
   * @example
   * AgenticSpace Description。
   */
  description?: string;
  /**
   * @example
   * 100
   */
  fileCountUsage?: number;
  /**
   * @example
   * 06229oypxjgox0u****
   */
  fileSystemId?: string;
  /**
   * @example
   * /test/
   */
  fileSystemPath?: string;
  quota?: GetAgenticSpaceResponseBodyAgenticSpaceQuota;
  /**
   * @example
   * 1024
   */
  spaceUsage?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
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
  agenticSpace?: GetAgenticSpaceResponseBodyAgenticSpace;
  /**
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


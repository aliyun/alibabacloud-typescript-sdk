// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryDirectoryFailedSourcesResponseBodyFailedSources extends $dara.Model {
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 数据源 ID
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceId: 'string',
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

export class RetryDirectoryFailedSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 目录 ID
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 成功入队重试的数量
   * 
   * @example
   * 1
   */
  enqueuedCount?: number;
  /**
   * @remarks
   * enqueuedIds
   * 
   * @example
   * string_value
   */
  enqueuedIds?: string[];
  /**
   * @remarks
   * 目录下失败资源总数
   * 
   * @example
   * 1
   */
  failedCount?: number;
  failedSources?: RetryDirectoryFailedSourcesResponseBodyFailedSources[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 跳过（非 FAILED 或无权限）的数量
   * 
   * @example
   * 1
   */
  skippedCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      enqueuedCount: 'enqueuedCount',
      enqueuedIds: 'enqueuedIds',
      failedCount: 'failedCount',
      failedSources: 'failedSources',
      message: 'message',
      requestId: 'requestId',
      skippedCount: 'skippedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      enqueuedCount: 'number',
      enqueuedIds: { 'type': 'array', 'itemType': 'string' },
      failedCount: 'number',
      failedSources: { 'type': 'array', 'itemType': RetryDirectoryFailedSourcesResponseBodyFailedSources },
      message: 'string',
      requestId: 'string',
      skippedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.enqueuedIds)) {
      $dara.Model.validateArray(this.enqueuedIds);
    }
    if(Array.isArray(this.failedSources)) {
      $dara.Model.validateArray(this.failedSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


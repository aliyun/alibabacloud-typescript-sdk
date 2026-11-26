// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunksResponseBodyDataChunkUpdateResults extends $dara.Model {
  /**
   * @remarks
   * 本次修改的目标序号。
   * 
   * @example
   * 1
   */
  chunkSeq?: number;
  /**
   * @remarks
   * 失败时的脱敏原因；不包含内部任务、执行或物理存储标识。
   * 
   * @example
   * 目标 Chunk 不存在。
   */
  failureReason?: string;
  /**
   * @remarks
   * ACCEPTED 表示内容编辑已受理但未完成；SUCCEEDED 表示纯启停已写入请求开始确定的目标或内容编辑已发布；不承诺并发发布的新结果继承启停。FAILED 表示该项未完成。
   * 
   * @example
   * ACCEPTED
   */
  status?: string;
  /**
   * @remarks
   * 仅终态返回：SUCCEEDED 为 true，FAILED 为 false；ACCEPTED 时不返回，不能将已受理当成写入成功。与表示请求受理或查询成功的接口顶层 success 独立。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkSeq: 'chunkSeq',
      failureReason: 'failureReason',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkSeq: 'number',
      failureReason: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChunksResponseBodyDataChunkUpdate extends $dara.Model {
  /**
   * @remarks
   * 仅异步内容编辑返回原 UpdateChunk 的 clientToken，用于幂等重试；GetAsset 不接收或返回 clientToken。纯启停不创建异步回执。同一资产内不同参数复用同 token 返回 IdempotencyConflict。
   * 
   * @example
   * chunk-update-001
   */
  clientToken?: string;
  /**
   * @remarks
   * 预留的幂等结果保留截止时间，当前未输出；不作为文档状态查询或自动重试的依据。
   * 
   * @example
   * 2026-11-03T02:05:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * 本次 FAILED 项数量；异步内容编辑仍为 ACCEPTED 时，不能将 0 视为修改成功。
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * 本次 UpdateChunk 或 UpdateChunks 的逐项结果。纯启停同步返回 SUCCEEDED/FAILED，批量允许部分成功；内容编辑先返回 ACCEPTED，幂等重放可返回已记录的处理结果。当前文档是否完成通过 GetAsset 的 status 判断。逐项结果与顶层 success 独立。
   */
  results?: UpdateChunksResponseBodyDataChunkUpdateResults[];
  /**
   * @remarks
   * 本次提交的 Chunk 数量；UpdateChunk 为 1，UpdateChunks 为 1 至 100。
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      expiresAt: 'expiresAt',
      failedCount: 'failedCount',
      results: 'results',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      expiresAt: 'string',
      failedCount: 'number',
      results: { 'type': 'array', 'itemType': UpdateChunksResponseBodyDataChunkUpdateResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChunksResponseBodyDataLastError extends $dara.Model {
  /**
   * @remarks
   * 稳定的产品错误码；不返回内部任务标识、堆栈或存储地址。
   * 
   * @example
   * ProcessingFailed
   */
  code?: string;
  /**
   * @remarks
   * 可向用户展示的脱敏错误摘要。
   * 
   * @example
   * 文件解析失败。
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChunksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 处理目标资产。
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * UpdateChunk 或 UpdateChunks 返回的逐项结果。同步启停直接返回最终结果；异步内容编辑返回受理结果，幂等重放返回已记录的请求结果。文档当前状态通过 GetAsset 查询，GetAsset 不返回此字段。逐项结果不由接口顶层 success 表示。
   */
  chunkUpdate?: UpdateChunksResponseBodyDataChunkUpdate;
  /**
   * @remarks
   * 目标知识库。
   * 
   * @example
   * kb-001
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * 当前处理的脱敏错误摘要。
   */
  lastError?: UpdateChunksResponseBodyDataLastError;
  /**
   * @remarks
   * 考虑禁用和墓碑后的已发布结果可用性。
   * 
   * @example
   * true
   */
  publishedResultAvailable?: boolean;
  /**
   * @remarks
   * UpdateChunk 或 UpdateChunks 的受理或执行结果；同步 Chunk 启停响应的 COMPLETED 仅表示本次写入结束，不改变资产原处理状态。异步内容编辑的受理和幂等重放结果不代表文档当前状态，文档状态通过 GetAsset 查询。
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * ISO 8601 UTC 时间。
   * 
   * @example
   * 2026-10-27T02:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * 目标工作空间。
   * 
   * @example
   * ws-001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      chunkUpdate: 'chunkUpdate',
      knowledgeBaseId: 'knowledgeBaseId',
      lastError: 'lastError',
      publishedResultAvailable: 'publishedResultAvailable',
      status: 'status',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      chunkUpdate: UpdateChunksResponseBodyDataChunkUpdate,
      knowledgeBaseId: 'string',
      lastError: UpdateChunksResponseBodyDataLastError,
      publishedResultAvailable: 'boolean',
      status: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.chunkUpdate && typeof (this.chunkUpdate as any).validate === 'function') {
      (this.chunkUpdate as any).validate();
    }
    if(this.lastError && typeof (this.lastError as any).validate === 'function') {
      (this.lastError as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChunksResponseBody extends $dara.Model {
  code?: string;
  /**
   * @remarks
   * 同步返回 COMPLETED 表示本次写入结束，不改变资产原有处理状态；逐项返回 SUCCEEDED 或 FAILED，允许部分成功，不保证整批原子性或并发发布的新结果继承本次修改。无需轮询。
   */
  data?: UpdateChunksResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  /**
   * @remarks
   * true 表示请求已处理，不表示每一项都成功；检查 results 和 failedCount。令牌过期或资源状态等整次拒绝时为 false。
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateChunksResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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


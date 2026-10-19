// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkItemArtifactsResponseBodyItemsRef extends $dara.Model {
  /**
   * @remarks
   * 产物ID
   * 
   * @example
   * example
   */
  id?: string;
  /**
   * @remarks
   * 引用类型
   * 
   * @example
   * WORK_ITEM_ARTIFACT
   */
  kind?: string;
  /**
   * @remarks
   * OpenAPI 产物访问入口
   * 
   * @example
   * example
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      kind: 'kind',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      kind: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkItemArtifactsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 产物ID
   * 
   * @example
   * example
   */
  artifactId?: string;
  /**
   * @remarks
   * 产物键
   * 
   * @example
   * example
   */
  artifactKey?: string;
  /**
   * @remarks
   * 节点尝试序号
   * 
   * @example
   * 1
   */
  attemptSeq?: number;
  /**
   * @remarks
   * 内容类型
   * 
   * @example
   * example
   */
  contentType?: string;
  /**
   * @remarks
   * 创建时间(ISO8601)
   * 
   * @example
   * example
   */
  createdAt?: string;
  /**
   * @remarks
   * 节点键
   * 
   * @example
   * example
   */
  nodeKey?: string;
  /**
   * @remarks
   * 计划ID
   * 
   * @example
   * example
   */
  planId?: string;
  /**
   * @remarks
   * 引用信息
   * 
   * @example
   * example
   */
  ref?: ListWorkItemArtifactsResponseBodyItemsRef;
  /**
   * @remarks
   * 运行ID
   * 
   * @example
   * example
   */
  runId?: string;
  /**
   * @remarks
   * 内容SHA-256
   * 
   * @example
   * example
   */
  sha256?: string;
  /**
   * @remarks
   * 产物大小(字节)
   * 
   * @example
   * 1
   */
  sizeBytes?: number;
  /**
   * @remarks
   * 产物摘要
   * 
   * @example
   * example
   */
  summary?: string;
  /**
   * @remarks
   * 产物标题
   * 
   * @example
   * example
   */
  title?: string;
  /**
   * @remarks
   * 会话轮次序号
   * 
   * @example
   * 1
   */
  turnSeq?: number;
  /**
   * @remarks
   * 产物类型
   * 
   * @example
   * example
   */
  type?: string;
  /**
   * @remarks
   * 工作项ID
   * 
   * @example
   * example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      artifactKey: 'artifactKey',
      attemptSeq: 'attemptSeq',
      contentType: 'contentType',
      createdAt: 'createdAt',
      nodeKey: 'nodeKey',
      planId: 'planId',
      ref: 'ref',
      runId: 'runId',
      sha256: 'sha256',
      sizeBytes: 'sizeBytes',
      summary: 'summary',
      title: 'title',
      turnSeq: 'turnSeq',
      type: 'type',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactKey: 'string',
      attemptSeq: 'number',
      contentType: 'string',
      createdAt: 'string',
      nodeKey: 'string',
      planId: 'string',
      ref: ListWorkItemArtifactsResponseBodyItemsRef,
      runId: 'string',
      sha256: 'string',
      sizeBytes: 'number',
      summary: 'string',
      title: 'string',
      turnSeq: 'number',
      type: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    if(this.ref && typeof (this.ref as any).validate === 'function') {
      (this.ref as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkItemArtifactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 历史产物列表
   * 
   * @example
   * example
   */
  items?: ListWorkItemArtifactsResponseBodyItems[];
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 返回产物数量
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListWorkItemArtifactsResponseBodyItems },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


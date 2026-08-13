// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBaseContentsResponseBodyItemsShareInfos extends $dara.Model {
  /**
   * @remarks
   * 知识库提交审批单 ID
   * 
   * @example
   * submission_example
   */
  submissionId?: string;
  /**
   * @remarks
   * 提交人用户 ID
   * 
   * @example
   * 1
   */
  submitterId?: number;
  /**
   * @remarks
   * 提交人名称
   * 
   * @example
   * 张三
   */
  submitterName?: string;
  /**
   * @remarks
   * 目标目录 ID
   * 
   * @example
   * dir_target
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * 目标目录名称
   * 
   * @example
   * 共享目录
   */
  targetDirectoryName?: string;
  /**
   * @remarks
   * 目标企业知识库根目录 ID
   * 
   * @example
   * dir_kb_root
   */
  targetKbRootDirectoryId?: string;
  /**
   * @remarks
   * 目标企业知识库名称
   * 
   * @example
   * 产品知识库
   */
  targetKbRootDirectoryName?: string;
  static names(): { [key: string]: string } {
    return {
      submissionId: 'submissionId',
      submitterId: 'submitterId',
      submitterName: 'submitterName',
      targetDirectoryId: 'targetDirectoryId',
      targetDirectoryName: 'targetDirectoryName',
      targetKbRootDirectoryId: 'targetKbRootDirectoryId',
      targetKbRootDirectoryName: 'targetKbRootDirectoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submissionId: 'string',
      submitterId: 'number',
      submitterName: 'string',
      targetDirectoryId: 'string',
      targetDirectoryName: 'string',
      targetKbRootDirectoryId: 'string',
      targetKbRootDirectoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVisibleKnowledgeBaseContentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 创建人名称
   * 
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @remarks
   * 知识库描述
   * 
   * @example
   * 产品资料与使用说明
   */
  description?: string;
  /**
   * @remarks
   * 目录归属类型
   * 
   * @example
   * normal
   */
  directoryKind?: string;
  /**
   * @remarks
   * 目录类型
   * 
   * @example
   * TENANT
   */
  directoryType?: string;
  /**
   * @remarks
   * 创建时间戳（毫秒）
   * 
   * @example
   * 1
   */
  gmtCreate?: number;
  /**
   * @remarks
   * 修改时间戳（毫秒）
   * 
   * @example
   * 1
   */
  gmtModified?: number;
  /**
   * @remarks
   * 目录 ID 或资源 ID
   * 
   * @example
   * source_example
   */
  itemId?: string;
  /**
   * @remarks
   * 内容类型：directory 或 resource
   * 
   * @example
   * resource
   */
  itemType?: string;
  /**
   * @remarks
   * 资源是否存在待审批的知识库提交记录
   * 
   * @example
   * false
   */
  kbSubmissionPending?: boolean;
  /**
   * @remarks
   * 更新人名称
   * 
   * @example
   * 李四
   */
  modifierName?: string;
  /**
   * @remarks
   * 目录或资源名称
   * 
   * @example
   * 产品说明.pdf
   */
  name?: string;
  objectBindings?: { [key: string]: any }[];
  /**
   * @remarks
   * 知识库对数字员工的可见模式
   * 
   * @example
   * PUBLIC
   */
  ooVisibilityMode?: string;
  /**
   * @remarks
   * 是否为只读关联内容
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  shareInfos?: ListUserVisibleKnowledgeBaseContentsResponseBodyItemsShareInfos[];
  /**
   * @remarks
   * 是否已直接共享到企业知识库
   * 
   * @example
   * false
   */
  shared?: boolean;
  /**
   * @remarks
   * 目录 FAILED 资源数
   * 
   * @example
   * 0
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * 资源归属类型
   * 
   * @example
   * normal
   */
  sourceKind?: string;
  /**
   * @remarks
   * 目录 READY 资源数
   * 
   * @example
   * 1
   */
  sourceReadyCount?: number;
  /**
   * @remarks
   * 资源状态；本接口只返回 READY 资源
   * 
   * @example
   * READY
   */
  sourceStatus?: string;
  /**
   * @remarks
   * 目录资源总数
   * 
   * @example
   * 1
   */
  sourceTotalCount?: number;
  /**
   * @remarks
   * 资源类型，目录项为空
   * 
   * @example
   * FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      description: 'description',
      directoryKind: 'directoryKind',
      directoryType: 'directoryType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      itemId: 'itemId',
      itemType: 'itemType',
      kbSubmissionPending: 'kbSubmissionPending',
      modifierName: 'modifierName',
      name: 'name',
      objectBindings: 'objectBindings',
      ooVisibilityMode: 'ooVisibilityMode',
      readOnly: 'readOnly',
      shareInfos: 'shareInfos',
      shared: 'shared',
      sourceFailedCount: 'sourceFailedCount',
      sourceKind: 'sourceKind',
      sourceReadyCount: 'sourceReadyCount',
      sourceStatus: 'sourceStatus',
      sourceTotalCount: 'sourceTotalCount',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      description: 'string',
      directoryKind: 'string',
      directoryType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itemId: 'string',
      itemType: 'string',
      kbSubmissionPending: 'boolean',
      modifierName: 'string',
      name: 'string',
      objectBindings: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      ooVisibilityMode: 'string',
      readOnly: 'boolean',
      shareInfos: { 'type': 'array', 'itemType': ListUserVisibleKnowledgeBaseContentsResponseBodyItemsShareInfos },
      shared: 'boolean',
      sourceFailedCount: 'number',
      sourceKind: 'string',
      sourceReadyCount: 'number',
      sourceStatus: 'string',
      sourceTotalCount: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    if(Array.isArray(this.shareInfos)) {
      $dara.Model.validateArray(this.shareInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVisibleKnowledgeBaseContentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  items?: ListUserVisibleKnowledgeBaseContentsResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * 命中总数
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
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListUserVisibleKnowledgeBaseContentsResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
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


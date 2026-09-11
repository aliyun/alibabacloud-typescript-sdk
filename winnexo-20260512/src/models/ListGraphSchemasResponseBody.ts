// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphSchemasResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * active Schema 版本
   * 
   * @example
   * 0.0.0
   */
  activeVersion?: string;
  /**
   * @remarks
   * 业务说明，未设置时为空字符串
   * 
   * @example
   * 客户域语义图谱
   */
  businessProfile?: string;
  /**
   * @remarks
   * 图谱展示名，空值时兜底 graphName
   * 
   * @example
   * CRM 图谱
   */
  displayName?: string;
  /**
   * @remarks
   * 图谱名称
   * 
   * This parameter is required.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * 图谱状态：PUBLISHED / DEVELOPING（当前用户有活动草稿）/ PUBLISHING（当前用户发布中）
   * 
   * This parameter is required.
   * 
   * @example
   * PUBLISHED
   */
  graphStatus?: string;
  /**
   * @remarks
   * 当前调用者视角是否存在个人活动草稿；部署/系统级 Token 恒 false
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  hasDraft?: boolean;
  /**
   * @remarks
   * 是否为租户默认图谱
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * object_type 数量，解析失败兜底 0
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  objectTypeCount?: number;
  /**
   * @remarks
   * relation 数量，解析失败兜底 0
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  relationCount?: number;
  /**
   * @remarks
   * 语义标签列表，未配置时为空数组
   * 
   * This parameter is required.
   */
  semanticTags?: string[];
  static names(): { [key: string]: string } {
    return {
      activeVersion: 'activeVersion',
      businessProfile: 'businessProfile',
      displayName: 'displayName',
      graphName: 'graphName',
      graphStatus: 'graphStatus',
      hasDraft: 'hasDraft',
      isDefault: 'isDefault',
      objectTypeCount: 'objectTypeCount',
      relationCount: 'relationCount',
      semanticTags: 'semanticTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeVersion: 'string',
      businessProfile: 'string',
      displayName: 'string',
      graphName: 'string',
      graphStatus: 'string',
      hasDraft: 'boolean',
      isDefault: 'boolean',
      objectTypeCount: 'number',
      relationCount: 'number',
      semanticTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.semanticTags)) {
      $dara.Model.validateArray(this.semanticTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGraphSchemasResponseBody extends $dara.Model {
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
   * 租户下 active 图谱摘要列表
   */
  items?: ListGraphSchemasResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   * 
   * @example
   * ok
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListGraphSchemasResponseBodyItems },
      message: 'string',
      requestId: 'string',
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


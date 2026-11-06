// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFreeExplorationWorkItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * 已选择的数字员工技术名称
   * 
   * @example
   * ["sales-agent"]
   */
  agentNames?: string[];
  /**
   * @remarks
   * 业务状态码，成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 所属协作空间 ID
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 真实群话题 ID，可在 queryWorkItemFeed 中关联；不可作为 Workflow workItemId
   * 
   * @example
   * conv_20261105_9f2c
   */
  conversationId?: string;
  /**
   * @remarks
   * 平台创建人用户 ID
   * 
   * @example
   * 10001
   */
  createdByUserId?: number;
  /**
   * @remarks
   * 工作项模式，固定 FREE_EXPLORATION
   * 
   * @example
   * FREE_EXPLORATION
   */
  itemType?: string;
  /**
   * @remarks
   * 实际话题成员，含创建人；公开档不枚举全空间成员
   * 
   * @example
   * [43]
   */
  memberUserIds?: number[];
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
   * 工作项标题
   * 
   * @example
   * 调查销售机会
   */
  title?: string;
  /**
   * @remarks
   * 实际可见范围 PRIVATE/COLLABORATIVE/PUBLIC
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      agentNames: 'agentNames',
      code: 'code',
      collaborationGroupId: 'collaborationGroupId',
      conversationId: 'conversationId',
      createdByUserId: 'createdByUserId',
      itemType: 'itemType',
      memberUserIds: 'memberUserIds',
      message: 'message',
      requestId: 'requestId',
      title: 'title',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNames: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      collaborationGroupId: 'string',
      conversationId: 'string',
      createdByUserId: 'number',
      itemType: 'string',
      memberUserIds: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      requestId: 'string',
      title: 'string',
      visibility: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentNames)) {
      $dara.Model.validateArray(this.agentNames);
    }
    if(Array.isArray(this.memberUserIds)) {
      $dara.Model.validateArray(this.memberUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


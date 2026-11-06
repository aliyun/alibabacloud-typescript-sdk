// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendWorkItemMessageRequest extends $dara.Model {
  /**
   * @remarks
   * 目标会话所属的协作空间ID，必填，长度1至64，不能为空白。调用者须具有目标话题的查看和发送权限。
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 用户发送的文本正文，必填，长度1至32768，不能全为空白；保留原有文本格式。
   * 
   * This parameter is required.
   * 
   * @example
   * 请根据刚才的讨论整理下一步行动清单。
   */
  content?: string;
  /**
   * @remarks
   * 已有自由探索话题的会话ID，长度1至128，可使用创建自由探索接口返回的conversation_id。与workItemId至少传一个，同时传入时须指向同一会话。
   * 
   * @example
   * 01234567-89ab-4def-8123-456789abcdef
   */
  conversationId?: string;
  /**
   * @remarks
   * 业务租户ID，可选。必须属于当前调用身份的可访问租户；无权访问时拒绝请求。未传时按现有鉴权规则解析租户，多租户用户无法唯一确定时需显式指定。
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  /**
   * @remarks
   * 自由探索工作项ID，长度1至256；兼容legacy-topic:<conversationId>形式。与conversationId至少传一个，同时传入时须指向同一会话。普通工作项必须为FREE_EXPLORATION类型。
   * 
   * @example
   * wi_0123456789abcdef0123456789abcdef
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      content: 'content',
      conversationId: 'conversationId',
      tenantId: 'tenantId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      content: 'string',
      conversationId: 'string',
      tenantId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


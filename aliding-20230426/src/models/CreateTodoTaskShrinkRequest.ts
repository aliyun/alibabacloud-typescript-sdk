// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoTaskShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  actionListShrink?: string;
  contentFieldListShrink?: string;
  /**
   * @example
   * PUoiinWIpa2yH2ymhiiGiP6g
   */
  creatorId?: string;
  /**
   * @example
   * 应用可以调用该接口发起一个钉钉待办任务，该待办事项会出现在钉钉客户端“待办”页面，需要注意的是，通过开放接口发起的待办，目前仅支持直接跳转ISV应用详情页（ISV在调该接口时需传入自身应用详情页链接）。
   */
  description?: string;
  detailUrlShrink?: string;
  /**
   * @example
   * 1617675000000
   */
  dueTime?: number;
  executorIdsShrink?: string;
  /**
   * @example
   * true
   */
  isOnlyShowExecutor?: boolean;
  notifyConfigsShrink?: string;
  /**
   * @example
   * 12345
   */
  operatorId?: string;
  participantIdsShrink?: string;
  /**
   * @example
   * 20
   */
  priority?: number;
  /**
   * @example
   * isv_dingtalkTodo1
   */
  sourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 接入钉钉待办
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      actionListShrink: 'actionList',
      contentFieldListShrink: 'contentFieldList',
      creatorId: 'creatorId',
      description: 'description',
      detailUrlShrink: 'detailUrl',
      dueTime: 'dueTime',
      executorIdsShrink: 'executorIds',
      isOnlyShowExecutor: 'isOnlyShowExecutor',
      notifyConfigsShrink: 'notifyConfigs',
      operatorId: 'operatorId',
      participantIdsShrink: 'participantIds',
      priority: 'priority',
      sourceId: 'sourceId',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      actionListShrink: 'string',
      contentFieldListShrink: 'string',
      creatorId: 'string',
      description: 'string',
      detailUrlShrink: 'string',
      dueTime: 'number',
      executorIdsShrink: 'string',
      isOnlyShowExecutor: 'boolean',
      notifyConfigsShrink: 'string',
      operatorId: 'string',
      participantIdsShrink: 'string',
      priority: 'number',
      sourceId: 'string',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


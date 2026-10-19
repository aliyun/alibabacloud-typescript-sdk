// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 处理人平台用户ID列表（1~100，去重后生效）
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  assigneeUserIdsShrink?: string;
  /**
   * @remarks
   * 协作空间 ID（可选）
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 优先级
   * 
   * @example
   * MEDIUM
   */
  priority?: string;
  /**
   * @remarks
   * 问题清单（1~N）
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  questionsShrink?: string;
  /**
   * @remarks
   * 来源上下文（原样透传落库，不校验）
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  sourceContextShrink?: string;
  /**
   * @remarks
   * 待办来源（仅 OPEN_API）
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_API
   */
  sourceType?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 待办标题（≤200 字）
   * 
   * This parameter is required.
   * 
   * @example
   * 治理审批
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      assigneeUserIdsShrink: 'assigneeUserIds',
      collaborationGroupId: 'collaborationGroupId',
      priority: 'priority',
      questionsShrink: 'questions',
      sourceContextShrink: 'sourceContext',
      sourceType: 'sourceType',
      tenantId: 'tenantId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigneeUserIdsShrink: 'string',
      collaborationGroupId: 'string',
      priority: 'string',
      questionsShrink: 'string',
      sourceContextShrink: 'string',
      sourceType: 'string',
      tenantId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoRequestQuestionsOptions extends $dara.Model {
  /**
   * @remarks
   * 选项补充说明
   * 
   * @example
   * 选项补充说明
   */
  description?: string;
  /**
   * @remarks
   * 选项文案（引用键）
   * 
   * This parameter is required.
   * 
   * @example
   * 通过
   */
  label?: string;
  /**
   * @remarks
   * 是否推荐
   * 
   * @example
   * false
   */
  recommended?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      label: 'label',
      recommended: 'recommended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      recommended: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoRequestQuestions extends $dara.Model {
  /**
   * @remarks
   * 是否允许自定义输入
   * 
   * @example
   * false
   */
  allowCustom?: boolean;
  /**
   * @remarks
   * 自定义输入项文案
   * 
   * @example
   * 其他
   */
  customLabel?: string;
  /**
   * @remarks
   * 自定义输入长度上限
   * 
   * @example
   * 200
   */
  customMaxLength?: number;
  /**
   * @remarks
   * 自定义输入占位符
   * 
   * @example
   * 请说明
   */
  customPlaceholder?: string;
  /**
   * @remarks
   * TEXT 题长度上限
   * 
   * @example
   * 500
   */
  maxLength?: number;
  /**
   * @remarks
   * 作答形态：SINGLE_CHOICE/MULTI_CHOICE/TEXT
   * 
   * This parameter is required.
   * 
   * @example
   * SINGLE_CHOICE
   */
  mode?: string;
  /**
   * @remarks
   * 问题的选项列表；选择题必填，每项含选项文案（label）、补充说明（description）与是否推荐（recommended）
   */
  options?: CreateTodoRequestQuestionsOptions[];
  /**
   * @remarks
   * TEXT 题占位符
   * 
   * @example
   * 请输入
   */
  placeholder?: string;
  /**
   * @remarks
   * 问题正文（引用键，清单内唯一）
   * 
   * This parameter is required.
   * 
   * @example
   * 是否通过审批
   */
  question?: string;
  /**
   * @remarks
   * 是否必答
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowCustom: 'allowCustom',
      customLabel: 'customLabel',
      customMaxLength: 'customMaxLength',
      customPlaceholder: 'customPlaceholder',
      maxLength: 'maxLength',
      mode: 'mode',
      options: 'options',
      placeholder: 'placeholder',
      question: 'question',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCustom: 'boolean',
      customLabel: 'string',
      customMaxLength: 'number',
      customPlaceholder: 'string',
      maxLength: 'number',
      mode: 'string',
      options: { 'type': 'array', 'itemType': CreateTodoRequestQuestionsOptions },
      placeholder: 'string',
      question: 'string',
      required: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoRequest extends $dara.Model {
  /**
   * @remarks
   * 处理人平台用户ID列表（1~100，去重后生效）
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  assigneeUserIds?: string[];
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
  questions?: CreateTodoRequestQuestions[];
  /**
   * @remarks
   * 来源上下文（原样透传落库，不校验）
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  sourceContext?: { [key: string]: any };
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
      assigneeUserIds: 'assigneeUserIds',
      collaborationGroupId: 'collaborationGroupId',
      priority: 'priority',
      questions: 'questions',
      sourceContext: 'sourceContext',
      sourceType: 'sourceType',
      tenantId: 'tenantId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigneeUserIds: { 'type': 'array', 'itemType': 'string' },
      collaborationGroupId: 'string',
      priority: 'string',
      questions: { 'type': 'array', 'itemType': CreateTodoRequestQuestions },
      sourceContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceType: 'string',
      tenantId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assigneeUserIds)) {
      $dara.Model.validateArray(this.assigneeUserIds);
    }
    if(Array.isArray(this.questions)) {
      $dara.Model.validateArray(this.questions);
    }
    if(this.sourceContext) {
      $dara.Model.validateMap(this.sourceContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoRequestQuestionsOptions extends $dara.Model {
  /**
   * @remarks
   * The supplementary description of the option.
   * 
   * @example
   * Supplementary description of the option
   */
  description?: string;
  /**
   * @remarks
   * The option text. This is a reference key.
   * 
   * This parameter is required.
   * 
   * @example
   * Approve
   */
  label?: string;
  /**
   * @remarks
   * Specifies whether the option is recommended.
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
   * Specifies whether custom input is allowed.
   * 
   * @example
   * false
   */
  allowCustom?: boolean;
  /**
   * @remarks
   * The text for the custom input item.
   * 
   * @example
   * Other
   */
  customLabel?: string;
  /**
   * @remarks
   * The maximum length of the custom input.
   * 
   * @example
   * 200
   */
  customMaxLength?: number;
  /**
   * @remarks
   * The placeholder for the custom input.
   * 
   * @example
   * Please specify
   */
  customPlaceholder?: string;
  /**
   * @remarks
   * The maximum length for text questions.
   * 
   * @example
   * 500
   */
  maxLength?: number;
  /**
   * @remarks
   * The response mode. Valid values: SINGLE_CHOICE, MULTI_CHOICE, and TEXT.
   * 
   * This parameter is required.
   * 
   * @example
   * SINGLE_CHOICE
   */
  mode?: string;
  /**
   * @remarks
   * The list of options for the question. This parameter is required for choice questions. Each option includes the option text (label), supplementary description (description), and whether it is recommended (recommended).
   */
  options?: CreateTodoRequestQuestionsOptions[];
  /**
   * @remarks
   * The placeholder for text questions.
   * 
   * @example
   * Please enter
   */
  placeholder?: string;
  /**
   * @remarks
   * The question text. This is a reference key and must be unique within the list.
   * 
   * This parameter is required.
   * 
   * @example
   * Whether to approve the request
   */
  question?: string;
  /**
   * @remarks
   * Specifies whether the question is required.
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
   * The list of platform user IDs of the assignees. You can specify 1 to 100 IDs. Duplicate IDs are automatically removed.
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  assigneeUserIds?: string[];
  /**
   * @remarks
   * The ID of the collaboration workspace. This parameter is optional.
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * MEDIUM
   */
  priority?: string;
  /**
   * @remarks
   * The list of questions.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  questions?: CreateTodoRequestQuestions[];
  /**
   * @remarks
   * The source context. The value is passed through and stored in the database as-is without validation.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  sourceContext?: { [key: string]: any };
  /**
   * @remarks
   * The source of the to-do item. Only OPEN_API is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_API
   */
  sourceType?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The title of the to-do item. The maximum length is 200 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Governance approval
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


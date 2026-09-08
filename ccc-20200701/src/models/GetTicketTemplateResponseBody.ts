// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketTemplateResponseBodyDataTicketFields extends $dara.Model {
  /**
   * @remarks
   * Whether the field is an array.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Extension attributes.
   * 
   * @example
   * {}
   */
  attributes?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1717664210000
   */
  createdTime?: number;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * creator@cccV2-kmz
   */
  creator?: string;
  /**
   * @remarks
   * Data type.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 姓名描述
   */
  description?: string;
  /**
   * @remarks
   * Whether the field is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * Display name.
   * 
   * @example
   * 姓名
   */
  displayName?: string;
  /**
   * @remarks
   * Display order in lists.
   * 
   * @example
   * 1
   */
  displayOrder?: number;
  /**
   * @remarks
   * Editor type.
   * 
   * @example
   * textbox
   */
  editorType?: string;
  /**
   * @remarks
   * Maximum length.
   * 
   * @example
   * 30
   */
  maxLength?: number;
  /**
   * @remarks
   * Numeric maximum value.
   * 
   * @example
   * 10
   */
  maximum?: number;
  /**
   * @remarks
   * Minimum length.
   * 
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @remarks
   * Numeric minimum value.
   * 
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Regular expression validation rule.
   * 
   * @example
   * ^
   */
  pattern?: string;
  /**
   * @remarks
   * Error message for regular expression validation.
   * 
   * @example
   * 不是有效的email地址
   */
  patternErrorMessage?: string;
  /**
   * @remarks
   * Whether the field is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * Whether the field is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * Whether the field is a system field.
   * 
   * @example
   * false
   */
  system?: boolean;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 1717664210000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      attributes: 'Attributes',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      dataType: 'DataType',
      description: 'Description',
      disabled: 'Disabled',
      displayName: 'DisplayName',
      displayOrder: 'DisplayOrder',
      editorType: 'EditorType',
      maxLength: 'MaxLength',
      maximum: 'Maximum',
      minLength: 'MinLength',
      minimum: 'Minimum',
      name: 'Name',
      pattern: 'Pattern',
      patternErrorMessage: 'PatternErrorMessage',
      readOnly: 'ReadOnly',
      required: 'Required',
      system: 'System',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      attributes: 'string',
      createdTime: 'number',
      creator: 'string',
      dataType: 'string',
      description: 'string',
      disabled: 'boolean',
      displayName: 'string',
      displayOrder: 'number',
      editorType: 'string',
      maxLength: 'number',
      maximum: 'number',
      minLength: 'number',
      minimum: 'number',
      name: 'string',
      pattern: 'string',
      patternErrorMessage: 'string',
      readOnly: 'boolean',
      required: 'boolean',
      system: 'boolean',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Ticket category ID.
   * 
   * @example
   * 43c2671b-****-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * Template editor.
   * 
   * @example
   * editor-xxx@ccc-test
   */
  editor?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * 测试模板。
   */
  name?: string;
  /**
   * @remarks
   * Workflow information.
   * 
   * @example
   * [{\\"id\\":\\"TICKET_START\\",\\"name\\":\\"开始\\",\\"nodeIndex\\":0,\\"properties\\":{\\"position\\":{\\"x\\":250,\\"y\\":200}},\\"type\\":\\"TICKET_START\\",\\"events\\":[{\\"edgeId\\":\\"8bd07339\\",\\"sourceAnchor\\":0,\\"next\\":\\"APPROVAL__JNBSSREc\\",\\"targetAnchor\\":0}]},{\\"id\\":\\"TICKET_FINISH\\",\\"name\\":\\"结束\\",\\"nodeIndex\\":9999,\\"properties\\":{\\"position\\":{\\"x\\":767,\\"y\\":206}},\\"type\\":\\"TICKET_FINISH\\",\\"events\\":[]},{\\"id\\":\\"APPROVAL__JNBSSREc\\",\\"name\\":\\"流程节点\\",\\"nodeIndex\\":1,\\"properties\\":{\\"skillGroupId\\":\\"chat001@cccV2-kmz\\",\\"position\\":{\\"x\\":537,\\"y\\":164.5}},\\"type\\":\\"APPROVAL\\",\\"events\\":[{\\"edgeId\\":\\"74031613\\",\\"sourceAnchor\\":1,\\"next\\":\\"TICKET_FINISH\\",\\"targetAnchor\\":0}]}]
   */
  processDefinition?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * Enabled
   */
  state?: string;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * 4ca2e2-c8d19b82c-d7ce393ac8197d3ab
   */
  templateId?: string;
  /**
   * @remarks
   * List of template fields.
   */
  ticketFields?: GetTicketTemplateResponseBodyDataTicketFields[];
  /**
   * @remarks
   * Last modified time.
   * 
   * @example
   * 1717664210000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      processDefinition: 'ProcessDefinition',
      state: 'State',
      templateId: 'TemplateId',
      ticketFields: 'TicketFields',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      processDefinition: 'string',
      state: 'string',
      templateId: 'string',
      ticketFields: { 'type': 'array', 'itemType': GetTicketTemplateResponseBodyDataTicketFields },
      updatedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ticketFields)) {
      $dara.Model.validateArray(this.ticketFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: GetTicketTemplateResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * List of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BF268B34-09C2-43FD-BAC4-5D31EA633111
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTicketTemplateResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


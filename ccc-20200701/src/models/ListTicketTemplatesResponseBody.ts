// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketTemplatesResponseBodyDataListTicketFields extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the field is an array.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * The extended properties.
   * 
   * @example
   * {}
   */
  attribute?: string;
  /**
   * @remarks
   * The time when the field was created.
   * 
   * @example
   * 1715780670000
   */
  createdTime?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * creator
   */
  creator?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * String
   */
  dataType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 姓名字段
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the field is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 姓名
   */
  displayName?: string;
  /**
   * @remarks
   * The display order in the list.
   * 
   * @example
   * 1
   */
  displayOrder?: number;
  /**
   * @remarks
   * The type of the editor.
   * 
   * @example
   * textbox
   */
  editorType?: string;
  /**
   * @remarks
   * The maximum length.
   * 
   * @example
   * 30
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum value for a number.
   * 
   * @example
   * 10
   */
  maximum?: number;
  /**
   * @remarks
   * The minimum length.
   * 
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @remarks
   * The minimum value for a number.
   * 
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The regular expression that is used for validation.
   * 
   * @example
   * ^
   */
  pattern?: string;
  /**
   * @remarks
   * The error message that is returned when the regular expression validation fails.
   * 
   * @example
   * 不是有效的email地址
   */
  patternErrorMessage?: string;
  /**
   * @remarks
   * Indicates whether the field is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * Indicates whether the field is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a system field.
   * 
   * @example
   * false
   */
  system?: boolean;
  /**
   * @remarks
   * The time when the field was last updated.
   * 
   * @example
   * 1715780670000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      attribute: 'Attribute',
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
      attribute: 'string',
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

export class ListTicketTemplatesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The current working version.
   * 
   * @example
   * 0
   */
  appliedVersion?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 43c2671b-*****-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * The user who last edited the template.
   * 
   * @example
   * creator@ccc-test
   */
  editor?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The draft version.
   * 
   * @example
   * 1715780670000
   */
  latestVersion?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * 测试模板
   */
  name?: string;
  /**
   * @remarks
   * The process information. This parameter is deprecated.
   * 
   * @example
   * 无
   */
  processDefinition?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Enabled
   */
  state?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * b5c21219-3a1e-4bc0-92e7-da66e057d2f6
   */
  templateId?: string;
  /**
   * @remarks
   * The list of fields in the template.
   */
  ticketFields?: ListTicketTemplatesResponseBodyDataListTicketFields[];
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 1715780670000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'AppliedVersion',
      categoryId: 'CategoryId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      latestVersion: 'LatestVersion',
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
      appliedVersion: 'string',
      categoryId: 'string',
      editor: 'string',
      instanceId: 'string',
      latestVersion: 'string',
      name: 'string',
      processDefinition: 'string',
      state: 'string',
      templateId: 'string',
      ticketFields: { 'type': 'array', 'itemType': ListTicketTemplatesResponseBodyDataListTicketFields },
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

export class ListTicketTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of templates.
   */
  list?: ListTicketTemplatesResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListTicketTemplatesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListTicketTemplatesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The list of invalid parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8707EB29-BAED-4302-B999-40BA61877437
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
      data: ListTicketTemplatesResponseBodyData,
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


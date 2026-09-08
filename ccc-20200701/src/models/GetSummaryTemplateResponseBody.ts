// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSummaryTemplateResponseBodyDataPropertyList extends $dara.Model {
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
  attributes?: string;
  /**
   * @remarks
   * The time when the field was created.
   * 
   * @example
   * 1717664210000
   */
  createdTime?: number;
  /**
   * @remarks
   * The user who created the field.
   * 
   * @example
   * cretor-xxx@ccc-test
   */
  creator?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * Description-xxxx
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
   * DisplayName-A
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
   * The maximum value of the number.
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
   * The minimum value of the number.
   * 
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * Name-A
   */
  name?: string;
  /**
   * @remarks
   * The validation rule that is specified by a regular expression.
   * 
   * @example
   * ^
   */
  pattern?: string;
  /**
   * @remarks
   * The error message that is returned when the regular expression fails to pass the validation.
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

export class GetSummaryTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the summary category.
   * 
   * @example
   * 8939-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * The user who edited the template.
   * 
   * @example
   * editor-xxx@ccc-test
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
   * The name of the template.
   * 
   * @example
   * 测试模板
   */
  name?: string;
  /**
   * @remarks
   * The list of template fields.
   */
  propertyList?: GetSummaryTemplateResponseBodyDataPropertyList[];
  /**
   * @remarks
   * The status code.
   * 
   * - Enabled: The template is enabled.
   * 
   * - Disabled: The template is disabled.
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
   * 43c2671b-8939-4223-86d0-6bd187905cc8_1717664210492
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      propertyList: 'PropertyList',
      state: 'State',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      propertyList: { 'type': 'array', 'itemType': GetSummaryTemplateResponseBodyDataPropertyList },
      state: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTemplateResponseBody extends $dara.Model {
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
  data?: GetSummaryTemplateResponseBodyData;
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
   * The list of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30C7D235-DDCF-4C7F-A462-5E2598252C2B
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
      data: GetSummaryTemplateResponseBodyData,
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


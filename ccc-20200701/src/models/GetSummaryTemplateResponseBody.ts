// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSummaryTemplateResponseBodyDataPropertyList extends $dara.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * {}
   */
  attributes?: string;
  /**
   * @example
   * 1717664210000
   */
  createdTime?: number;
  /**
   * @example
   * cretor-xxx@ccc-test
   */
  creator?: string;
  /**
   * @example
   * string
   */
  dataType?: string;
  /**
   * @example
   * Description-xxxx
   */
  description?: string;
  /**
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @example
   * DisplayName-A
   */
  displayName?: string;
  /**
   * @example
   * 1
   */
  displayOrder?: number;
  /**
   * @example
   * textbox
   */
  editorType?: string;
  /**
   * @example
   * 30
   */
  maxLength?: number;
  /**
   * @example
   * 10
   */
  maximum?: number;
  /**
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @example
   * Name-A
   */
  name?: string;
  /**
   * @example
   * ^
   */
  pattern?: string;
  patternErrorMessage?: string;
  /**
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @example
   * false
   */
  system?: boolean;
  /**
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
   * @example
   * 8939-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @example
   * editor-xxx@ccc-test
   */
  editor?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  propertyList?: GetSummaryTemplateResponseBodyDataPropertyList[];
  /**
   * @example
   * Enabled
   */
  state?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetSummaryTemplateResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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


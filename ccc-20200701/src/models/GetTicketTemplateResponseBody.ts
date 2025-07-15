// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketTemplateResponseBodyDataTicketFields extends $dara.Model {
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
   * creator@cccV2-kmz
   */
  creator?: string;
  /**
   * @example
   * string
   */
  dataType?: string;
  description?: string;
  /**
   * @example
   * false
   */
  disabled?: boolean;
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
   * name
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

export class GetTicketTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 43c2671b-****-4223-86d0-6bd187905cc8
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
  processDefinition?: string;
  /**
   * @example
   * Enabled
   */
  state?: string;
  /**
   * @example
   * 4ca2e2-c8d19b82c-d7ce393ac8197d3ab
   */
  templateId?: string;
  ticketFields?: GetTicketTemplateResponseBodyDataTicketFields[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetTicketTemplateResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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


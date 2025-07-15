// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketTemplatesResponseBodyDataListTicketFields extends $dara.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * {}
   */
  attribute?: string;
  /**
   * @example
   * 1715780670000
   */
  createdTime?: number;
  /**
   * @example
   * creator
   */
  creator?: string;
  /**
   * @example
   * String
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
   * @example
   * 0
   */
  appliedVersion?: string;
  /**
   * @example
   * 43c2671b-*****-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @example
   * creator@ccc-test
   */
  editor?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1715780670000
   */
  latestVersion?: string;
  name?: string;
  processDefinition?: string;
  /**
   * @example
   * Enabled
   */
  state?: string;
  /**
   * @example
   * b5c21219-3a1e-4bc0-92e7-da66e057d2f6
   */
  templateId?: string;
  ticketFields?: ListTicketTemplatesResponseBodyDataListTicketFields[];
  /**
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
  list?: ListTicketTemplatesResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListTicketTemplatesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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


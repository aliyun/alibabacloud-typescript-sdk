// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVariableResponseBodyDataVariables extends $dara.Model {
  /**
   * @example
   * 1754013825102
   */
  createdTime?: number;
  description?: string;
  displayName?: string;
  /**
   * @example
   * llm-zop7ukgtksltamo4
   */
  instanceId?: string;
  /**
   * @example
   * age
   */
  name?: string;
  /**
   * @example
   * 1308144684576655
   */
  tenantId?: string;
  /**
   * @example
   * 1754013825102
   */
  updatedTime?: number;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  variableId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      name: 'Name',
      tenantId: 'TenantId',
      updatedTime: 'UpdatedTime',
      variableId: 'VariableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      name: 'string',
      tenantId: 'string',
      updatedTime: 'number',
      variableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  variables?: ListVariableResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      variables: { 'type': 'array', 'itemType': ListVariableResponseBodyDataVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVariableResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListVariableResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance llm-rj6aqmctjcit4acy does not exist.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * CF6D3484-19A1-5C77-863B-AC8B5754D37C
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
      data: ListVariableResponseBodyData,
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


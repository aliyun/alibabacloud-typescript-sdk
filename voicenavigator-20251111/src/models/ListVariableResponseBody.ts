// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVariableResponseBodyDataVariables extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1754013825102
   */
  createdTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * The current age of the user
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Age
   */
  displayName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66c
   */
  instanceId?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1308144684576655
   */
  tenantId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1754013825102
   */
  updatedTime?: number;
  /**
   * @remarks
   * The variable ID.
   * 
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of variable objects.
   */
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
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated data of the variable list.
   */
  data?: ListVariableResponseBodyData;
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
   * The error message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4060
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


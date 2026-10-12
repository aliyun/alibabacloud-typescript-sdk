// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParametersResponseBodyPagingInfoParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: production environment.
   * - Dev: development environment.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * value123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBodyPagingInfoParameters extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit number, such as `1640000000000`.
   * 
   * @example
   * 1640000000000
   */
  createTime?: number;
  /**
   * @remarks
   * The user who created the parameter.
   * 
   * @example
   * 123456789
   */
  createUser?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a test parameter
   */
  description?: string;
  /**
   * @remarks
   * The parameter ID.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * The value is a 13-digit number, such as `1640000000000`.
   * 
   * @example
   * 1640000000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user who last modified the parameter.
   * 
   * @example
   * 123456789
   */
  modifyUser?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * workspace.para
   */
  name?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The parameter value configuration.
   */
  properties?: ListParametersResponseBodyPagingInfoParametersProperties[];
  /**
   * @remarks
   * The scope of the parameter.
   * 
   * @example
   * Project
   */
  scope?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * - PlainConstant: plaintext constant.
   * - SecretConstant: ciphertext constant.
   * - Variable: variable.
   * 
   * @example
   * PlainConstant
   */
  type?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      properties: 'Properties',
      scope: 'Scope',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      properties: { 'type': 'array', 'itemType': ListParametersResponseBodyPagingInfoParametersProperties },
      scope: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBodyPagingInfo extends $dara.Model {
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of parameters.
   */
  parameters?: ListParametersResponseBodyPagingInfoParameters[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parameters: 'Parameters',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parameters: { 'type': 'array', 'itemType': ListParametersResponseBodyPagingInfoParameters },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  pagingInfo?: ListParametersResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListParametersResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


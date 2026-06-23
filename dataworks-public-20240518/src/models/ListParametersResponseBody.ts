// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParametersResponseBodyPagingInfoParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The environment type. Valid values:
   * 
   * - `Prod`: production environment
   * 
   * - `Dev`: development environment
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
   * The time when the parameter was created. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640000000000
   */
  createTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 123456789
   */
  createUser?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * This is a test parameter.
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
   * The time when the parameter was last modified. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640000000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who last modified the parameter.
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
   * The Alibaba Cloud account ID of the owner.
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
   * The environment-specific values for the parameter.
   */
  properties?: ListParametersResponseBodyPagingInfoParametersProperties[];
  /**
   * @remarks
   * The parameter scope.
   * 
   * @example
   * Project
   */
  scope?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - `PlainConstant`: a plaintext constant
   * 
   * - `SecretConstant`: an encrypted constant
   * 
   * - `Variable`: a variable
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of parameters.
   */
  parameters?: ListParametersResponseBodyPagingInfoParameters[];
  /**
   * @remarks
   * The total number of parameters.
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
   * The pagination information.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Tenant ID.
   * 
   * @example
   * 1
   */
  buId?: number;
  /**
   * @remarks
   * Role code.
   * 
   * @example
   * admin
   */
  code?: string;
  /**
   * @remarks
   * Creation Time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2020-01-03T20:25:33Z
   */
  createTime?: string;
  /**
   * @remarks
   * Role description.
   * 
   * @example
   * Admin
   */
  description?: string;
  /**
   * @remarks
   * ID of the group to which the role belongs.
   * 
   * @example
   * 0
   */
  roleGroupId?: number;
  /**
   * @remarks
   * Name of the role group to which the role belongs.
   * 
   * @example
   * 角色组名称
   */
  roleGroupName?: string;
  /**
   * @remarks
   * Role ID.
   * 
   * @example
   * 1
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * 企业管理员
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      code: 'Code',
      createTime: 'CreateTime',
      description: 'Description',
      roleGroupId: 'RoleGroupId',
      roleGroupName: 'RoleGroupName',
      roleId: 'RoleId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      code: 'string',
      createTime: 'string',
      description: 'string',
      roleGroupId: 'number',
      roleGroupName: 'string',
      roleId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Role information.
   */
  data?: ListRolesResponseBodyData[];
  /**
   * @remarks
   * Status code. A return value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Status code description.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRolesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


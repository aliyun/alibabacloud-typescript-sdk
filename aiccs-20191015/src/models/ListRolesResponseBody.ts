// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1
   */
  buId?: number;
  /**
   * @remarks
   * The role code.
   * 
   * @example
   * admin
   */
  code?: string;
  /**
   * @remarks
   * The creation time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-01-03T20:25:33Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the role.
   * 
   * @example
   * Admin
   */
  description?: string;
  /**
   * @remarks
   * The ID of the role group to which the role belongs.
   * 
   * @example
   * 0
   */
  roleGroupId?: number;
  /**
   * @remarks
   * The name of the role group to which the role belongs.
   * 
   * @example
   * Role group name
   */
  roleGroupName?: string;
  /**
   * @remarks
   * The role ID.
   * 
   * @example
   * 1
   */
  roleId?: number;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * Enterprise administrator
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
   * The role information.
   */
  data?: ListRolesResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
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


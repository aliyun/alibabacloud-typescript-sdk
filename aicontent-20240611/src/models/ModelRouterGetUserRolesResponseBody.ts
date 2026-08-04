// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserDepartmentDTO } from "./UserDepartmentDto";


export class ModelRouterGetUserRolesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of department role assignments.
   * 
   * @example
   * []
   */
  departmentRoles?: UserDepartmentDTO[];
  static names(): { [key: string]: string } {
    return {
      departmentRoles: 'departmentRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentRoles: { 'type': 'array', 'itemType': UserDepartmentDTO },
    };
  }

  validate() {
    if(Array.isArray(this.departmentRoles)) {
      $dara.Model.validateArray(this.departmentRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterGetUserRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data object.
   * 
   * @example
   * {}
   */
  data?: ModelRouterGetUserRolesResponseBodyData;
  /**
   * @remarks
   * The error message code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterGetUserRolesResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


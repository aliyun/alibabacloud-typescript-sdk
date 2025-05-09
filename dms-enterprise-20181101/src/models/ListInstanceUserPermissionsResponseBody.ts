// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceUserPermissionsResponseBodyUserPermissions } from "./ListInstanceUserPermissionsResponseBodyUserPermissions";


export class ListInstanceUserPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D162AAE-6501-5691-BF14-D7018F662895
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The permissions of the user on the instance.
   */
  userPermissions?: ListInstanceUserPermissionsResponseBodyUserPermissions;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userPermissions: ListInstanceUserPermissionsResponseBodyUserPermissions,
    };
  }

  validate() {
    if(this.userPermissions && typeof (this.userPermissions as any).validate === 'function') {
      (this.userPermissions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabaseUserPermssionsResponseBodyUserPermissions } from "./ListDatabaseUserPermssionsResponseBodyUserPermissions";


export class ListDatabaseUserPermssionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * 68075D06-7406-4887-83A7-F558A4D28C13
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of user permissions.
   */
  userPermissions?: ListDatabaseUserPermssionsResponseBodyUserPermissions;
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
      userPermissions: ListDatabaseUserPermssionsResponseBodyUserPermissions,
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


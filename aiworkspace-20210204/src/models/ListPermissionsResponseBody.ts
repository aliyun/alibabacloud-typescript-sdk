// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPermissionsResponseBodyPermissions } from "./ListPermissionsResponseBodyPermissions";


export class ListPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permissions.
   */
  permissions?: ListPermissionsResponseBodyPermissions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-B******8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of permissions that meet the filter conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


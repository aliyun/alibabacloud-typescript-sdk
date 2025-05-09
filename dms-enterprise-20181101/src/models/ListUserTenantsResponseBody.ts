// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserTenantsResponseBodyTenantList } from "./ListUserTenantsResponseBodyTenantList";


export class ListUserTenantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * TenantNotExist
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified tenant does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C478D9DA-3615-50F6-A2BC-7855AD65****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of the tenants that were returned.
   */
  tenantList?: ListUserTenantsResponseBodyTenantList[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tenantList: 'TenantList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tenantList: { 'type': 'array', 'itemType': ListUserTenantsResponseBodyTenantList },
    };
  }

  validate() {
    if(Array.isArray(this.tenantList)) {
      $dara.Model.validateArray(this.tenantList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


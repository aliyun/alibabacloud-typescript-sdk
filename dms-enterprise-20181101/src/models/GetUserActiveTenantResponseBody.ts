// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserActiveTenantResponseBodyTenant extends $dara.Model {
  /**
   * @remarks
   * The status of the tenant. Valid values:
   * 
   * *   **ACTIVE**: The tenant is used to access DMS.
   * *   **IN_ACTIVE**: The tenant is not used.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * test_name
   */
  tenantName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tenantName: 'TenantName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tenantName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserActiveTenantResponseBody extends $dara.Model {
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
   * 4B63CAC5-BD7F-5C7C-82C9-59DFFBC3C5C2
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
   * The details of the tenant.
   */
  tenant?: GetUserActiveTenantResponseBodyTenant;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tenant: 'Tenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tenant: GetUserActiveTenantResponseBodyTenant,
    };
  }

  validate() {
    if(this.tenant && typeof (this.tenant as any).validate === 'function') {
      (this.tenant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


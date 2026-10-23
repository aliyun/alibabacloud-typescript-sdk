// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAppResourcePermissionsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-12-31T23:59:59+08:00
   */
  expireAt?: string;
  /**
   * @remarks
   * The platform user ID of the grantor.
   * 
   * @example
   * 10086
   */
  grantedBy?: string;
  /**
   * @remarks
   * The principal ID.
   * 
   * @example
   * 10086
   */
  granteeId?: string;
  /**
   * @remarks
   * The principal name.
   * 
   * @example
   * Zhang San
   */
  granteeName?: string;
  /**
   * @remarks
   * The tenant to which the cross-tenant USER belongs.
   * 
   * @example
   * 10000
   */
  granteeTenantId?: string;
  /**
   * @remarks
   * The principal type.
   * 
   * @example
   * USER
   */
  granteeType?: string;
  /**
   * @remarks
   * The permission.
   * 
   * @example
   * APP/VIEW
   */
  permission?: string;
  /**
   * @remarks
   * The permission record ID.
   * 
   * @example
   * 1001
   */
  permissionId?: number;
  /**
   * @remarks
   * The resource key.
   * 
   * @example
   * app.demo.resource_1
   */
  resourceKey?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      expireAt: 'expireAt',
      grantedBy: 'grantedBy',
      granteeId: 'granteeId',
      granteeName: 'granteeName',
      granteeTenantId: 'granteeTenantId',
      granteeType: 'granteeType',
      permission: 'permission',
      permissionId: 'permissionId',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      expireAt: 'string',
      grantedBy: 'string',
      granteeId: 'string',
      granteeName: 'string',
      granteeTenantId: 'string',
      granteeType: 'string',
      permission: 'string',
      permissionId: 'number',
      resourceKey: 'string',
      resourceType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAppResourcePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is empty if the request is successful.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The newly created or idempotently matched permission records.
   */
  records?: RegisterAppResourcePermissionsResponseBodyRecords[];
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      records: 'records',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      records: { 'type': 'array', 'itemType': RegisterAppResourcePermissionsResponseBodyRecords },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


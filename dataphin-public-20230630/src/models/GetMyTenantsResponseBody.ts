// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMyTenantsResponseBodyTenantList extends $dara.Model {
  /**
   * @remarks
   * The time when the tenant was deleted.
   * 
   * @example
   * 1717343597000
   */
  deleteTime?: number;
  /**
   * @remarks
   * Indicates whether the tenant is deleted.
   * 
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @remarks
   * The tenant description.
   * 
   * @example
   * xx 测试
   */
  description?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 132311
   */
  id?: number;
  /**
   * @remarks
   * The tenant name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the tenant is an O&M tenant.
   * 
   * @example
   * false
   */
  opsTenant?: boolean;
  /**
   * @remarks
   * The ID of the user to whom the tenant belongs.
   * 
   * @example
   * 21323231
   */
  ownerId?: string;
  /**
   * @remarks
   * Indicates whether resource quota calculation is performed.
   * 
   * @example
   * false
   */
  resourceLimited?: boolean;
  /**
   * @remarks
   * The tenant types.
   */
  tenantTypeList?: string[];
  /**
   * @remarks
   * The title type of the tenant.
   * 
   * @example
   * icon
   */
  titleType?: string;
  /**
   * @remarks
   * Indicates whether the tenant is visible.
   * 
   * @example
   * true
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteTime: 'DeleteTime',
      deleted: 'Deleted',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      opsTenant: 'OpsTenant',
      ownerId: 'OwnerId',
      resourceLimited: 'ResourceLimited',
      tenantTypeList: 'TenantTypeList',
      titleType: 'TitleType',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteTime: 'number',
      deleted: 'boolean',
      description: 'string',
      id: 'number',
      name: 'string',
      opsTenant: 'boolean',
      ownerId: 'string',
      resourceLimited: 'boolean',
      tenantTypeList: { 'type': 'array', 'itemType': 'string' },
      titleType: 'string',
      visible: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tenantTypeList)) {
      $dara.Model.validateArray(this.tenantTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyTenantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
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
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
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
  /**
   * @remarks
   * The list of tenants.
   */
  tenantList?: GetMyTenantsResponseBodyTenantList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tenantList: 'TenantList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tenantList: { 'type': 'array', 'itemType': GetMyTenantsResponseBodyTenantList },
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


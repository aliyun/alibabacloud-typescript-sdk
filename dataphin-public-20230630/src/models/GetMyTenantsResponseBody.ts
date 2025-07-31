// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMyTenantsResponseBodyTenantList extends $dara.Model {
  /**
   * @example
   * 1717343597000
   */
  deleteTime?: number;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  description?: string;
  /**
   * @example
   * 132311
   */
  id?: number;
  name?: string;
  /**
   * @example
   * false
   */
  opsTenant?: boolean;
  /**
   * @example
   * 21323231
   */
  ownerId?: string;
  /**
   * @example
   * false
   */
  resourceLimited?: boolean;
  tenantTypeList?: string[];
  /**
   * @example
   * icon
   */
  titleType?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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


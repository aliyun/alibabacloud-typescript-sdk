// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsResponseBodyPermissionsMember extends $dara.Model {
  /**
   * @example
   * 123456
   */
  corpId?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * ORG
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBodyPermissionsRole extends $dara.Model {
  /**
   * @example
   * OWNER
   */
  id?: string;
  /**
   * @example
   * 拥有者
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBodyPermissions extends $dara.Model {
  /**
   * @example
   * 123456
   */
  dentryUuid?: string;
  member?: ListPermissionsResponseBodyPermissionsMember;
  role?: ListPermissionsResponseBodyPermissionsRole;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      member: 'Member',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      member: ListPermissionsResponseBodyPermissionsMember,
      role: ListPermissionsResponseBodyPermissionsRole,
    };
  }

  validate() {
    if(this.member && typeof (this.member as any).validate === 'function') {
      (this.member as any).validate();
    }
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBody extends $dara.Model {
  /**
   * @example
   * 59886
   */
  duration?: number;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  permissions?: ListPermissionsResponseBodyPermissions[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      nextToken: 'nextToken',
      permissions: 'permissions',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      nextToken: 'string',
      permissions: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissions },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
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


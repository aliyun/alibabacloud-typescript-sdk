// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the permissions were granted.
   * 
   * @example
   * 2019-12-12 00:00:00
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the permissions expire.
   * 
   * @example
   * 2020-12-12 00:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * XXX
   */
  extraData?: string;
  /**
   * @remarks
   * The user who grants the permissions.
   * 
   * @example
   * xxx authorization
   */
  originFrom?: string;
  /**
   * @remarks
   * The type of the permissions. Valid values:
   * 
   * *   LOGIN: the logon permissions
   * *   PERF: the query permissions on the instance
   * 
   * @example
   * LOGIN
   */
  permType?: string;
  /**
   * @remarks
   * The ID of the authorization record.
   * 
   * @example
   * 773****
   */
  userAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      expireDate: 'ExpireDate',
      extraData: 'ExtraData',
      originFrom: 'OriginFrom',
      permType: 'PermType',
      userAccessId: 'UserAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      expireDate: 'string',
      extraData: 'string',
      originFrom: 'string',
      permType: 'string',
      userAccessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails extends $dara.Model {
  permDetail?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
    };
  }

  validate() {
    if(Array.isArray(this.permDetail)) {
      $dara.Model.validateArray(this.permDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 174****
   */
  instanceId?: string;
  /**
   * @remarks
   * The details of permissions.
   */
  permDetails?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 51****
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * test_nick_name
   */
  userNickName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      permDetails: 'PermDetails',
      userId: 'UserId',
      userNickName: 'UserNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      permDetails: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails,
      userId: 'string',
      userNickName: 'string',
    };
  }

  validate() {
    if(this.permDetails && typeof (this.permDetails as any).validate === 'function') {
      (this.permDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceUserPermissionsResponseBodyUserPermissions extends $dara.Model {
  userPermission?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission },
    };
  }

  validate() {
    if(Array.isArray(this.userPermission)) {
      $dara.Model.validateArray(this.userPermission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $dara.Model {
  createDate?: string;
  expireDate?: string;
  extraData?: string;
  originFrom?: string;
  permType?: string;
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
  instanceId?: string;
  permDetails?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
  userId?: string;
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


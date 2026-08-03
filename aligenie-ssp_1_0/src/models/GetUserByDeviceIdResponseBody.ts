// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserByDeviceIdResponseBodyResultUserUnionIds extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 1**2
   */
  organizationId?: string;
  /**
   * @remarks
   * The user\\"s UnionID.
   * 
   * @example
   * 1553*B0C3
   */
  userUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      userUnionId: 'UserUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      userUnionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The openID corresponding to the user information.
   * 
   * @example
   * 0963*0158
   */
  userOpenId?: string;
  /**
   * @remarks
   * The list of organization IDs and UnionIDs for the user.
   */
  userUnionIds?: GetUserByDeviceIdResponseBodyResultUserUnionIds[];
  static names(): { [key: string]: string } {
    return {
      userOpenId: 'UserOpenId',
      userUnionIds: 'UserUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userOpenId: 'string',
      userUnionIds: { 'type': 'array', 'itemType': GetUserByDeviceIdResponseBodyResultUserUnionIds },
    };
  }

  validate() {
    if(Array.isArray(this.userUnionIds)) {
      $dara.Model.validateArray(this.userUnionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByDeviceIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned. A value of 200 indicates that the call succeeded.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return result of invoking this API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @remarks
   * The list of user information returned.
   * 
   * @example
   * true
   */
  result?: GetUserByDeviceIdResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetUserByDeviceIdResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


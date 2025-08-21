// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserByDeviceIdResponseBodyResultUserUnionIds extends $dara.Model {
  /**
   * @example
   * 1**2
   */
  organizationId?: string;
  /**
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
   * @example
   * 0963*0158
   */
  userOpenId?: string;
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
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


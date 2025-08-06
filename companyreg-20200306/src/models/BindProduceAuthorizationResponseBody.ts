// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BindProduceAuthorizationResponseBodyDataAuthorizedUserList extends $dara.Model {
  /**
   * @example
   * 2
   */
  accountValidType?: number;
  /**
   * @example
   * 1219541161213058
   */
  userId?: string;
  /**
   * @example
   * test@alibaba-inc.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountValidType: 'AccountValidType',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountValidType: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindProduceAuthorizationResponseBodyData extends $dara.Model {
  authorizedUserList?: BindProduceAuthorizationResponseBodyDataAuthorizedUserList[];
  message?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      authorizedUserList: 'AuthorizedUserList',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserList: { 'type': 'array', 'itemType': BindProduceAuthorizationResponseBodyDataAuthorizedUserList },
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.authorizedUserList)) {
      $dara.Model.validateArray(this.authorizedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindProduceAuthorizationResponseBody extends $dara.Model {
  data?: BindProduceAuthorizationResponseBodyData;
  /**
   * @example
   * 200
   */
  errorCode?: string;
  errorMsg?: string;
  /**
   * @example
   * AC492C5D-29D0-5103-9271-2C3A9D99F5CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BindProduceAuthorizationResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


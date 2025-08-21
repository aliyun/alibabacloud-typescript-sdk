// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindUserlistToAuthLoginWithPhoneNumberResponseBodyDataObj extends $dara.Model {
  /**
   * @example
   * dbe2eb4458302b9246c6da17fbc95f4b
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberResponseBodyResultUserListToAuthLogin extends $dara.Model {
  /**
   * @example
   * https://xxx
   */
  avatar?: string;
  /**
   * @example
   * KsVgypxAipf+xNECMZV2ONMcheqiIoEGFvgx+T8s1oV6/euTK9+ImYvLVPsSqFDh
   */
  encryptedUserIdentifier?: string;
  /**
   * @example
   * PHONE_NUMBER_BINDING_WITH_ALIGENIE：phoneNumber
   */
  findingType?: string;
  /**
   * @example
   * XXX
   */
  nickname?: string;
  /**
   * @example
   * ALIGENIE
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      encryptedUserIdentifier: 'EncryptedUserIdentifier',
      findingType: 'FindingType',
      nickname: 'Nickname',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      encryptedUserIdentifier: 'string',
      findingType: 'string',
      nickname: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberResponseBodyResult extends $dara.Model {
  userListToAuthLogin?: FindUserlistToAuthLoginWithPhoneNumberResponseBodyResultUserListToAuthLogin[];
  static names(): { [key: string]: string } {
    return {
      userListToAuthLogin: 'UserListToAuthLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userListToAuthLogin: { 'type': 'array', 'itemType': FindUserlistToAuthLoginWithPhoneNumberResponseBodyResultUserListToAuthLogin },
    };
  }

  validate() {
    if(Array.isArray(this.userListToAuthLogin)) {
      $dara.Model.validateArray(this.userListToAuthLogin);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserlistToAuthLoginWithPhoneNumberResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  dataObj?: FindUserlistToAuthLoginWithPhoneNumberResponseBodyDataObj;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  result?: FindUserlistToAuthLoginWithPhoneNumberResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataObj: 'DataObj',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataObj: FindUserlistToAuthLoginWithPhoneNumberResponseBodyDataObj,
      message: 'string',
      requestId: 'string',
      result: FindUserlistToAuthLoginWithPhoneNumberResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataObj && typeof (this.dataObj as any).validate === 'function') {
      (this.dataObj as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


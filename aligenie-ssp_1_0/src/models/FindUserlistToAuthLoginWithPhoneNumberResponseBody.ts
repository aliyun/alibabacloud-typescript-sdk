// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindUserlistToAuthLoginWithPhoneNumberResponseBodyDataObj extends $dara.Model {
  /**
   * @remarks
   * Session ID
   * 
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
   * @remarks
   * Profile picture
   * 
   * @example
   * https://xxx
   */
  avatar?: string;
  /**
   * @remarks
   * Encrypted User Identifier
   * 
   * @example
   * KsVgypxAipf+xNECMZV2ONMcheqiIoEGFvgx+T8s1oV6/euTK9+ImYvLVPsSqFDh
   */
  encryptedUserIdentifier?: string;
  /**
   * @remarks
   * User Search Type  
   * 
   * For Taobao users, the value is fixed as:  
   * PHONE_NUMBER_BINDING_WITH_TAOBAO: The phoneNumber is queried as the phone number bound to a Taobao account.  
   * 
   * For Tmall Genie users, the value can be:  
   * PHONE_NUMBER_BINDING_WITH_ALIGENIE: The phoneNumber is queried as the phone number bound to a Tmall Genie device;  
   * PHONE_NUMBER_BINDING_WITH_TAOBAO: The phoneNumber is queried as the phone number bound to a Taobao account.
   * 
   * @example
   * PHONE_NUMBER_BINDING_WITH_ALIGENIE：phoneNumber
   */
  findingType?: string;
  /**
   * @remarks
   * Nickname
   * 
   * @example
   * XXX
   */
  nickname?: string;
  /**
   * @remarks
   * User Type  
   * TAOBAO: Taobao user  
   * ALIGENIE: Tmall Genie user
   * 
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
  /**
   * @remarks
   * List of accounts eligible for authorization login
   */
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
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * When the code is 5140003, it indicates that the invocation failed because no account list eligible for authorization login was found for the given phone number. The frontend can prompt the user to confirm generating a Jingle account via the phone number or suggest registering a Taobao account using the phone number first. In subsequent flows, the frontend must return the sessionId from DataObj to the server.
   */
  dataObj?: FindUserlistToAuthLoginWithPhoneNumberResponseBodyDataObj;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @remarks
   * Response Result
   */
  result?: FindUserlistToAuthLoginWithPhoneNumberResponseBodyResult;
  /**
   * @remarks
   * Flag indicating whether the invocation succeeded
   */
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


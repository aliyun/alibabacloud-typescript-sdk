// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcologyOpennessAuthenticateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * entity key
   * 
   * @example
   * 12****7
   */
  encodeKey?: string;
  /**
   * @remarks
   * entity Type
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * scenario code
   * 
   * @example
   * ******
   */
  sceneCode?: string;
  /**
   * @remarks
   * Third-party user identifier
   * 
   * @example
   * ******
   */
  thirdUserIdentifier?: string;
  /**
   * @remarks
   * Third-party user type
   * 
   * @example
   * ******
   */
  thirdUserType?: string;
  /**
   * @remarks
   * Tmall Genie user openId
   * 
   * @example
   * o****RnNAW/smBNX9By7Zlc3J7iQUXPiUj/6OizU+ifLSzn1vpQL9ZgSp22u7hsxj0UZ2i6urbv9HQ==
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      sceneCode: 'SceneCode',
      thirdUserIdentifier: 'ThirdUserIdentifier',
      thirdUserType: 'ThirdUserType',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      sceneCode: 'string',
      thirdUserIdentifier: 'string',
      thirdUserType: 'string',
      userOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessAuthenticateResponseBody extends $dara.Model {
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
   * 73****9-175A-1324-8202-9FAAB*****A
   */
  requestId?: string;
  /**
   * @remarks
   * Response Result
   */
  result?: EcologyOpennessAuthenticateResponseBodyResult;
  /**
   * @remarks
   * Flag indicating whether the invocation succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: EcologyOpennessAuthenticateResponseBodyResult,
      success: 'boolean',
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


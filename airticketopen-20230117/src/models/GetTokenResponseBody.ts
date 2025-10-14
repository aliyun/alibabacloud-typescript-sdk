// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Remaining valid time of the token in seconds
   * 
   * @example
   * 7200
   */
  expireTime?: number;
  /**
   * @remarks
   * Timestamp of token generation in seconds
   * 
   * @example
   * 1677055176
   */
  generateTime?: number;
  /**
   * @remarks
   * token
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiIyUlRjY0Ezc1puSndpYU11R1ctTkVRIiwiaWF0IjoxNjc3MTU1Njg3LCJleHAiOjE2NzcxNjI4ODcsIm5iZiI6MTY3NzE1NTYyN30.bd8qBedJ7R24NC8VpMtM4Ni5OR-Cc0utPiKSx8fjoj9taalt7zXBF8uIVTETw1N-Fx9reLflwVXrbDHky7ZKqlE5o_B5Bkx-crQKlJL-NzasEmNnuJNb5kmmbCy3mvIrQfo5Q5Y0ZaQ110pXK4qd1shRbklvuQXn8lPueJtNqo8VdIOAPGG_rPwOw2P767I0fyFHcome8FR4ST1UrwxeApNKMB_BkpCsUZLgpm9h9trhKbB-3qtk6UK1GKmfw6qlWpL3PQN7FAObNruS0r0CGh3Muc9PaGsuu8Xu5on21h9WmI7L0-jatZkS55p4PEerU56XpkwJfa35_hltKNTauu
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expire_time',
      generateTime: 'generate_time',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      generateTime: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * Correctly processed return data
   */
  data?: GetTokenResponseBodyData;
  /**
   * @remarks
   * Business error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * Data carried during error handling
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * When the HTTP request is successful, the status value is 200.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Whether it is correct
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetTokenResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
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


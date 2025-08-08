// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CrossAccountVerifyTokenResponseBodyResult extends $dara.Model {
  authRoles?: string[];
  /**
   * @example
   * 1676974108866
   */
  authTime?: number;
  /**
   * @example
   * marketplace_wangxiao_test
   */
  name?: string;
  /**
   * @example
   * 1744526877246715
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      authRoles: 'AuthRoles',
      authTime: 'AuthTime',
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authRoles: { 'type': 'array', 'itemType': 'string' },
      authTime: 'number',
      name: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authRoles)) {
      $dara.Model.validateArray(this.authRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrossAccountVerifyTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * C19D103F-EA2D-50A5-8441-0267CE9FBA56
   */
  requestId?: string;
  result?: CrossAccountVerifyTokenResponseBodyResult;
  /**
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CrossAccountVerifyTokenResponseBodyResult,
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


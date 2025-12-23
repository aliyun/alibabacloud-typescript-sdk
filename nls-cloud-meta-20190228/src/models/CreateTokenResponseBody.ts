// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateTokenResponseBodyToken extends $dara.Model {
  /**
   * @example
   * 1553825814
   */
  expireTime?: number;
  /**
   * @example
   * fb1c4648a61b426589dab0fe90d1****
   */
  id?: string;
  /**
   * @example
   * 107992689699****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      id: 'Id',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      id: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 50000000
   */
  errCode?: number;
  /**
   * @example
   * Specified access key is not found.
   */
  errMsg?: string;
  /**
   * @example
   * dd05a301b40441c99a2671905325****
   */
  nlsRequestId?: string;
  /**
   * @example
   * A51587CB-5193-4DB8-9AED-CD4365C2****
   */
  requestId?: string;
  token?: CreateTokenResponseBodyToken;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      nlsRequestId: 'NlsRequestId',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'number',
      errMsg: 'string',
      nlsRequestId: 'string',
      requestId: 'string',
      token: CreateTokenResponseBodyToken,
    };
  }

  validate() {
    if(this.token && typeof (this.token as any).validate === 'function') {
      (this.token as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiTokenResponseBodyDataTokens extends $dara.Model {
  /**
   * @remarks
   * The names of authorized RAM users.
   */
  accountNames?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1755496031000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator\\"s name.
   * 
   * @example
   * admin
   */
  createdBy?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1787033891000
   */
  expireTime?: number;
  /**
   * @remarks
   * The last used time.
   * 
   * @example
   * 1760366232121
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The ARNs of authorized users.
   */
  memberArns?: string[];
  /**
   * @remarks
   * The token name.
   * 
   * @example
   * dev_serverless_spark
   */
  name?: string;
  sparkRole?: string[];
  /**
   * @remarks
   * The masked token.
   * 
   * @example
   * dxj**********wfg
   */
  token?: string;
  /**
   * @remarks
   * The token ID.
   * 
   * @example
   * tk-zpi0*****hdv4y
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNames: 'accountNames',
      createTime: 'createTime',
      createdBy: 'createdBy',
      expireTime: 'expireTime',
      lastUsedTime: 'lastUsedTime',
      memberArns: 'memberArns',
      name: 'name',
      sparkRole: 'sparkRole',
      token: 'token',
      tokenId: 'tokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNames: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      createdBy: 'string',
      expireTime: 'number',
      lastUsedTime: 'number',
      memberArns: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      sparkRole: { 'type': 'array', 'itemType': 'string' },
      token: 'string',
      tokenId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountNames)) {
      $dara.Model.validateArray(this.accountNames);
    }
    if(Array.isArray(this.memberArns)) {
      $dara.Model.validateArray(this.memberArns);
    }
    if(Array.isArray(this.sparkRole)) {
      $dara.Model.validateArray(this.sparkRole);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKyuubiTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of tokens.
   */
  tokens?: ListKyuubiTokenResponseBodyDataTokens[];
  static names(): { [key: string]: string } {
    return {
      tokens: 'tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokens: { 'type': 'array', 'itemType': ListKyuubiTokenResponseBodyDataTokens },
    };
  }

  validate() {
    if(Array.isArray(this.tokens)) {
      $dara.Model.validateArray(this.tokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKyuubiTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListKyuubiTokenResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListKyuubiTokenResponseBodyData,
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


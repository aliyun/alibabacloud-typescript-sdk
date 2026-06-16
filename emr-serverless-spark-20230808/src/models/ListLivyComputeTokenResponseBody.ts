// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivyComputeTokenResponseBodyDataTokens extends $dara.Model {
  /**
   * @remarks
   * The time when the token was created.
   * 
   * @example
   * 1749456094000
   */
  createTime?: number;
  /**
   * @remarks
   * The user who created the token.
   * 
   * @example
   * alice
   */
  createdby?: string;
  /**
   * @remarks
   * The time when the token expires.
   * 
   * @example
   * 1749456994000
   */
  expireTime?: number;
  /**
   * @remarks
   * The time when the token was last used.
   * 
   * @example
   * 1749456098000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The token name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The token content.
   * 
   * @example
   * 5d37843fb6f1e8
   */
  token?: string;
  /**
   * @remarks
   * The token ID.
   * 
   * @example
   * lctk-xxxxxxxxxxx
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      createdby: 'createdby',
      expireTime: 'expireTime',
      lastUsedTime: 'lastUsedTime',
      name: 'name',
      token: 'token',
      tokenId: 'tokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createdby: 'string',
      expireTime: 'number',
      lastUsedTime: 'number',
      name: 'string',
      token: 'string',
      tokenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivyComputeTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of tokens.
   */
  tokens?: ListLivyComputeTokenResponseBodyDataTokens[];
  static names(): { [key: string]: string } {
    return {
      tokens: 'tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokens: { 'type': 'array', 'itemType': ListLivyComputeTokenResponseBodyDataTokens },
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

export class ListLivyComputeTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 1000000 indicates that the request was successful. Other values indicate that the request failed. See the message parameter for failure details.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListLivyComputeTokenResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
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
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLivyComputeTokenResponseBodyData,
      message: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivyComputeTokenResponseBodyDataTokens extends $dara.Model {
  /**
   * @example
   * 1749456094000
   */
  createTime?: number;
  /**
   * @example
   * alice
   */
  createdby?: string;
  /**
   * @example
   * 1749456994000
   */
  expireTime?: number;
  /**
   * @example
   * 1749456098000
   */
  lastUsedTime?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 5d37843fb6f1e8
   */
  token?: string;
  /**
   * @remarks
   * Token ID。
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
   * @example
   * 1000000
   */
  code?: string;
  data?: ListLivyComputeTokenResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
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


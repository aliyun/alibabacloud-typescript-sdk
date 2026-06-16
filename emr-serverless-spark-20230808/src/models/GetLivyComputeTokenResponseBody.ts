// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLivyComputeTokenResponseBodyDataAutoExpireConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the token automatically expires.
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The expiration period, in days.
   * 
   * @example
   * 7
   */
  expireDays?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      expireDays: 'expireDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      expireDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLivyComputeTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about token expiration.
   */
  autoExpireConfiguration?: GetLivyComputeTokenResponseBodyDataAutoExpireConfiguration;
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
   * The name of the user who created the token.
   * 
   * @example
   * alice
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the token expires.
   * 
   * @example
   * 1749457994000
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
   * The name of the token.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The content of the token.
   * 
   * @example
   * d25561157a635bb
   */
  token?: string;
  /**
   * @remarks
   * The ID of the token.
   * 
   * @example
   * lctk-xxxxxxxxxx
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      autoExpireConfiguration: 'autoExpireConfiguration',
      createTime: 'createTime',
      createdBy: 'createdBy',
      expireTime: 'expireTime',
      lastUsedTime: 'lastUsedTime',
      name: 'name',
      token: 'token',
      tokenId: 'tokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoExpireConfiguration: GetLivyComputeTokenResponseBodyDataAutoExpireConfiguration,
      createTime: 'number',
      createdBy: 'string',
      expireTime: 'number',
      lastUsedTime: 'number',
      name: 'string',
      token: 'string',
      tokenId: 'string',
    };
  }

  validate() {
    if(this.autoExpireConfiguration && typeof (this.autoExpireConfiguration as any).validate === 'function') {
      (this.autoExpireConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLivyComputeTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 1000000 indicates that the request was successful. Other values indicate that the request failed. For more information about the error, see the message parameter.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetLivyComputeTokenResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 484D9DDA-300D-525E-AF7A-0CCCA5C64A7A
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
      data: GetLivyComputeTokenResponseBodyData,
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


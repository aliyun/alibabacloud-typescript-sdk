// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLivyComputeTokenResponseBodyDataAutoExpireConfiguration extends $dara.Model {
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
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
  autoExpireConfiguration?: GetLivyComputeTokenResponseBodyDataAutoExpireConfiguration;
  /**
   * @example
   * 1749456094000
   */
  createTime?: number;
  /**
   * @example
   * alice
   */
  createdBy?: string;
  /**
   * @example
   * 1749457994000
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
   * d25561157a635bb
   */
  token?: string;
  /**
   * @remarks
   * Token ID。
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
   * @example
   * 1000000
   */
  code?: string;
  data?: GetLivyComputeTokenResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKyuubiTokenResponseBodyDataAutoExpireConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the token automatically expires.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The expiration period, in days.
   * 
   * @example
   * 365
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

export class GetKyuubiTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The automatic expiration configuration.
   */
  autoExpireConfiguration?: GetKyuubiTokenResponseBodyDataAutoExpireConfiguration;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1749456094000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator name.
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
   * 1753932319390
   */
  expireTime?: number;
  /**
   * @remarks
   * The last used time.
   * 
   * @example
   * 1749456098000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Names (ARNs) of the authorized users.
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
      autoExpireConfiguration: 'autoExpireConfiguration',
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
      autoExpireConfiguration: GetKyuubiTokenResponseBodyDataAutoExpireConfiguration,
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
    if(this.autoExpireConfiguration && typeof (this.autoExpireConfiguration as any).validate === 'function') {
      (this.autoExpireConfiguration as any).validate();
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

export class GetKyuubiTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetKyuubiTokenResponseBodyData;
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
      data: GetKyuubiTokenResponseBodyData,
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


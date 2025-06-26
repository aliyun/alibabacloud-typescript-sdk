// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiTokenResponseBodyDataTokens extends $dara.Model {
  /**
   * @example
   * 2025-02-11T02:23:02Z
   */
  createTime?: number;
  /**
   * @example
   * test_user
   */
  createdBy?: string;
  /**
   * @example
   * 1740366769165
   */
  expireTime?: number;
  /**
   * @example
   * 1740366232121
   */
  lastUsedTime?: number;
  /**
   * @example
   * dev_serveless_spark
   */
  name?: string;
  /**
   * @example
   * f14c1347-dcfd-4082-b101-77aa96b5de36
   */
  token?: string;
  /**
   * @remarks
   * Token ID。
   * 
   * @example
   * f14c1347-dcfd-4082-b101-77aa96b5de36
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


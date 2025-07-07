// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLivyComputeTokenResponseBodyDataAutoExpireConfiguration } from "./GetLivyComputeTokenResponseBodyDataAutoExpireConfiguration";


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


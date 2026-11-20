// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindBatchAxgShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of AXG bindings.
   * 
   * This parameter is required.
   */
  axgBindListShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * You can log on to the Phone Number Protection console and obtain the key on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool) page.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      axgBindListShrink: 'AxgBindList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axgBindListShrink: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


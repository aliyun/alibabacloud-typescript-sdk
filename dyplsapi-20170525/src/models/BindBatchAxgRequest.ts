// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindBatchAxgRequestAxgBindList } from "./BindBatchAxgRequestAxgBindList";


export class BindBatchAxgRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  axgBindList?: BindBatchAxgRequestAxgBindList[];
  ownerId?: number;
  /**
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      axgBindList: 'AxgBindList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axgBindList: { 'type': 'array', 'itemType': BindBatchAxgRequestAxgBindList },
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.axgBindList)) {
      $dara.Model.validateArray(this.axgBindList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


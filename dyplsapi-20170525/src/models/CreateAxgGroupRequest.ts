// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAxgGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of number group G. If the name of number group G is not specified, the ID of number group G is used as the name of number group G.
   * 
   * >  The value must be 1 to 128 characters in length.
   * 
   * @example
   * Aliyun
   */
  name?: string;
  /**
   * @remarks
   * The phone numbers that you add to number group G. Separate multiple phone numbers with commas (,). A maximum of 200 phone numbers can be added to number group G.
   * 
   * @example
   * 1390000****,1380000****
   */
  numbers?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  /**
   * @remarks
   * The remarks of number group G. The value must be 0 to 256 characters in length.
   * 
   * @example
   * test
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      numbers: 'string',
      ownerId: 'number',
      poolKey: 'string',
      remark: 'string',
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


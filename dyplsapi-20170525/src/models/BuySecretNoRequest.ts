// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuySecretNoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the home location of the phone number.
   * 
   * > 
   * 
   * *   The home location can be set only to a location in the Chinese mainland.
   * 
   * *   A phone number that starts with 95 does not have a home location. If you purchase a phone number that starts with 95, set this parameter to **Nationwide**.
   * 
   * This parameter is required.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * Specifies whether to add the phone number to the pool of numbers that will be displayed during calls.
   * 
   * >  This parameter takes effect only for customers who have enabled the number display feature.
   * 
   * @example
   * true
   */
  displayPool?: boolean;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The prefix of the phone number. If you specify the value of **SecretNo** when you purchase a phone number, a phone number starting with the specified prefix is selected.
   * 
   * >  You can specify up to 18 digits of the phone number prefix.
   * 
   * @example
   * 130
   */
  secretNo?: string;
  /**
   * @remarks
   * The type of the phone number. Valid values:
   * 
   * *   **1**: a phone number assigned by a virtual network operator, that is, a phone number that belongs to the 170 or 171 number segment.
   * *   **2**: a phone number provided by a carrier.
   * *   **3**: a phone number that starts with 95.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      displayPool: 'DisplayPool',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      displayPool: 'boolean',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
      specId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


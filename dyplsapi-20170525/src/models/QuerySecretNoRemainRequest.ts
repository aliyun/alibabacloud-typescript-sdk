// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecretNoRemainRequest extends $dara.Model {
  /**
   * @remarks
   * The home location of the phone number.
   * 
   * *   If **SpecId** is set to 1 or 2, you can specify the **City** parameter to query the quantity of available phone numbers.
   * 
   * 1.  You can enter a single city name to perform a query.
   * 2.  You can enter National to query the quantity of remaining phone numbers available in the Chinese mainland for online purchase.
   * 3.  You can enter National List to query the cities with available phone numbers and the quantities of remaining phone numbers in the Chinese mainland. Cities without available phone numbers will not be returned.
   * 
   * *   If **SpecId** is set to 3, home locations are not distinguished for phone numbers that start with 95 and only the quantity of all the remaining phone numbers that start with 95 and are available for online purchase can be queried. If SpecId is set to 3, **City** must be set to **Nationwide**.
   * 
   * >  Home locations can be set to only locations in the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The prefix of the phone number. When you call the QuerySecretNoRemain operation with **SecretNo** specified, the quantity of remaining phone numbers with the specified prefix that are available for online purchase is queried.
   * 
   * Up to 18 digits of a phone number prefix can be specified.
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
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      ownerId: 'number',
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


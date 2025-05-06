// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStoragePlanRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value. Make sure that the value is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the subscription duration for the storage plan. Valid values:
   * 
   * *   **Month**
   * *   **Year**
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  period?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The capacity of the storage plan. Unit: GB. Valid values: 50, 100, 200, 300, 500, 1000, 2000, 3000, 5000, 10000, 15000, 20000, 25000, 30000, 50000, 100000, and 200000
   * 
   * This parameter is required.
   * 
   * @example
   * 500
   */
  storageClass?: string;
  /**
   * @remarks
   * The type of the storage plan. Valid values:
   * 
   * *   **Mainland**: The storage plan is used inside the Chinese mainland.
   * *   **Overseas**: The storage plan is used outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * Mainland
   */
  storageType?: string;
  /**
   * @remarks
   * The subscription duration of the storage plan.
   * 
   * *   If **Period** is set to **Month**, the value ranges from 1 to 9.
   * *   If **Period** is set to **Year**, the value can be 1, 2, 3, or 5.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageClass: 'StorageClass',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageClass: 'string',
      storageType: 'string',
      usedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


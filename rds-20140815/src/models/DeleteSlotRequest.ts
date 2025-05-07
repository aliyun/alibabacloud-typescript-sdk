// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSlotRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group. You can leave this parameter empty.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the replication slot. You can call the DescribeSlots operation to query the name of the replication slot.
   * 
   * This parameter is required.
   * 
   * @example
   * slot_test01
   */
  slotName?: string;
  /**
   * @remarks
   * The status of the replication slot. You can call the DescribeSlots operation to query the status of the replication slot. Valid values:
   * 
   * *   **ACTIVE**
   * *   **INACTIVE**
   * 
   * This parameter is required.
   * 
   * @example
   * INACTIVE
   */
  slotStatus?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slotName: 'SlotName',
      slotStatus: 'SlotStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slotName: 'string',
      slotStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


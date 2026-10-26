// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSlotRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client and make sure that the value is unique across different requests. The client token supports only ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the target instance. You can call the DescribeDBInstances operation to query instance ID.
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
   * The ID of the resource group. This parameter can be left empty.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the replication slot. You can call the DescribeSlots operation to query the name.
   * 
   * This parameter is required.
   * 
   * @example
   * slot_test01
   */
  slotName?: string;
  /**
   * @remarks
   * The status of the replication slot. You can call the DescribeSlots operation to query the status. Valid values:
   * - **ACTIVE**: The replication slot is active.
   * - **INACTIVE**: The replication slot is inactive.
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


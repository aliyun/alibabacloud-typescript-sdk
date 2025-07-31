// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreDBInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * Find instances created after the specified time, formatted as <i>yyyy-MM-dd</i>T<i>HH:00:00</i>Z (UTC time).
   * 
   * > 
   * > - The time must be on the hour.
   * > - The time cannot be earlier than 7 days before the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-07-24T14:00:00Z
   */
  creationTimeAfter?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp114f14849d****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      creationTimeAfter: 'CreationTimeAfter',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTimeAfter: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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


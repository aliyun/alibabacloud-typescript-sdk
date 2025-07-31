// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of the classic network endpoint of the instance. Valid values: **14**, **30**, **60**, and **120**. Unit: day.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  classicExpendExpiredDays?: number;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      classicExpendExpiredDays: 'ClassicExpendExpiredDays',
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpendExpiredDays: 'number',
      connectionString: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateInstancePublicConnectionRequest extends $dara.Model {
  babelfishPort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  generalGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  PGBouncerPort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      babelfishPort: 'BabelfishPort',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      generalGroupName: 'GeneralGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      PGBouncerPort: 'PGBouncerPort',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      babelfishPort: 'string',
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      generalGroupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      PGBouncerPort: 'string',
      port: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateReadWriteSplittingConnectionRequest extends $dara.Model {
  connectionStringPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  distributionType?: string;
  maxDelayTime?: string;
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      distributionType: 'DistributionType',
      maxDelayTime: 'MaxDelayTime',
      netType: 'NetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      distributionType: 'string',
      maxDelayTime: 'string',
      netType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


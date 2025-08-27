// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySrvNetworkAddressRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  connectionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dds-bp1fd530f271****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyuntest111
   */
  newConnectionString?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      DBInstanceId: 'DBInstanceId',
      newConnectionString: 'NewConnectionString',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      DBInstanceId: 'string',
      newConnectionString: 'string',
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


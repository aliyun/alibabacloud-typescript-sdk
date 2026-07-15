// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySrvNetworkAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the SRV connection address to modify. Valid values:
   * 
   * - **VPC**: virtual private cloud (VPC)
   * 
   * - **Public**: Internet connection
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  connectionType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1fd530f271****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The new connection address. The address must meet the following requirements:
   * 
   * - Starts with a lowercase letter.
   * 
   * - Ends with a lowercase letter or a digit.
   * 
   * - Contains only lowercase letters, digits, and hyphens (-).
   * 
   * - Is 8 to 63 characters in length.
   * 
   * > You only need to specify the prefix of the connection address. The rest of the address cannot be modified.
   * 
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


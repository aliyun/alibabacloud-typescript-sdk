// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySrvNetworkAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the SRV endpoint to be modified. Valid values:
   * - **VPC**: VPC
   * - **Public**: public network connection
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
   * The new endpoint. The endpoint must meet the following requirements:
   * - Start with a lowercase letter.
   * - End with a lowercase letter or a digit.
   * - Contain only lowercase letters, digits, and hyphens (-).
   * - Be 8 to 63 characters in length.
   * 
   * > Specify only the prefix of the endpoint. The remaining part cannot be modified.
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


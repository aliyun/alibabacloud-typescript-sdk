// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBProxyEndpointId?: string;
  DBProxyEngineType?: string;
  DBProxyNewConnectString?: string;
  DBProxyNewConnectStringPort?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyNewConnectString: 'DBProxyNewConnectString',
      DBProxyNewConnectStringPort: 'DBProxyNewConnectStringPort',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEngineType: 'string',
      DBProxyNewConnectString: 'string',
      DBProxyNewConnectStringPort: 'string',
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


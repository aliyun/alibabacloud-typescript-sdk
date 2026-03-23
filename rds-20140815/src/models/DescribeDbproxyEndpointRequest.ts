// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBProxyConnectString?: string;
  DBProxyEndpointId?: string;
  DBProxyEngineType?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyConnectString: 'DBProxyConnectString',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEngineType: 'DBProxyEngineType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyConnectString: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEngineType: 'string',
      ownerId: 'number',
      regionId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBProxyEndpointAddressRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBProxyEndpointId?: string;
  DBProxyEngineType?: string;
  DBProxyNewConnectStringPort?: string;
  regionId?: string;
  resourceGroupId?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyNewConnectStringPort: 'DBProxyNewConnectStringPort',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEngineType: 'string',
      DBProxyNewConnectStringPort: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


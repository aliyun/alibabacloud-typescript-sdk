// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBProxyEndpointAddressRequest extends $dara.Model {
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEngineType: 'DBProxyEngineType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEngineType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDbProxyInstanceSslRequest extends $dara.Model {
  DBProxyEngineType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbProxyConnectString?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbProxyEndpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbProxySslEnabled?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBProxyEngineType: 'DBProxyEngineType',
      dbInstanceId: 'DbInstanceId',
      dbProxyConnectString: 'DbProxyConnectString',
      dbProxyEndpointId: 'DbProxyEndpointId',
      dbProxySslEnabled: 'DbProxySslEnabled',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyEngineType: 'string',
      dbInstanceId: 'string',
      dbProxyConnectString: 'string',
      dbProxyEndpointId: 'string',
      dbProxySslEnabled: 'string',
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


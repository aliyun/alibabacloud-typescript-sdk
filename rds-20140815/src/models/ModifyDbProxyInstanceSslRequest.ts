// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDbProxyInstanceSslRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The endpoint for which you want to enable SSL encryption.
   * 
   * This parameter is required.
   * 
   * @example
   * test123456.rwlb.rds.aliyuncs.com
   */
  dbProxyConnectString?: string;
  /**
   * @remarks
   * The ID of the database proxy endpoint. You can call DescribeDBProxyEndpoint to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta9um4****
   */
  dbProxyEndpointId?: string;
  /**
   * @remarks
   * The operation that you want to perform on SSL encryption. Valid values:
   * * 0: Disables SSL encryption.
   * * 1: Enables SSL encryption or changes the endpoint for which SSL encryption is enabled.
   * * 2: Updates the validity period of the SSL certificate.
   * 
   * >The preceding operations restart the instance. Proceed with caution.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dbProxySslEnabled?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDbProxyInstanceSslRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter. No configuration is required.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The endpoint for which you want to enable Secure Sockets Layer (SSL) encryption.
   * 
   * This parameter is required.
   * 
   * @example
   * test123456.rwlb.rds.aliyuncs.com
   */
  dbProxyConnectString?: string;
  /**
   * @remarks
   * The ID of the proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta9um4****
   */
  dbProxyEndpointId?: string;
  /**
   * @remarks
   * The operation to perform on Secure Sockets Layer (SSL) encryption. Valid values:
   * * 0: Disables Secure Sockets Layer (SSL) encryption.
   * * 1: Enables Secure Sockets Layer (SSL) encryption or modifies the Secure Sockets Layer (SSL) encryption endpoint.
   * * 2: Updates the certificate validity period.
   * 
   * > Performing the preceding operations restarts the instance. Proceed with caution.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dbProxySslEnabled?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
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


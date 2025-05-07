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
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3axxxxx
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The dedicated proxy endpoint of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test123456.rwlb.rds.aliyuncs.com
   */
  dbProxyConnectString?: string;
  /**
   * @remarks
   * The ID of the proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the ID of the proxy endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * ta9um4xxxxx
   */
  dbProxyEndpointId?: string;
  /**
   * @remarks
   * The SSL configuration setting that you want to apply on the instance. Valid values:
   * 
   * *   0: disables SSL encryption.
   * *   1: enables SSL encryption or modifies the endpoint that requires SSL encryption.
   * *   2: updates the validity period of the SSL certificate.
   * 
   * > This setting causes your instance to restart. Proceed with caution.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dbProxySslEnabled?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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


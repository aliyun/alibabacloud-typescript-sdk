// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBProxyEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type of the proxy endpoint. Valid values:
   * 
   * *   **Public**: Internet
   * *   **VPC**: virtual private cloud (VPC)
   * *   **Classic**: classic network
   * 
   * If the instance runs MySQL, the default value of this parameter is **Classic**.
   * 
   * > If the instance runs PostgreSQL, you must set this parameter to **Public** or **VPC**.
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * The proxy endpoint ID. You can call the DescribeDBProxyEndpoint operation to query the proxy endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta9um4****
   */
  DBProxyEndpointId?: string;
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
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
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


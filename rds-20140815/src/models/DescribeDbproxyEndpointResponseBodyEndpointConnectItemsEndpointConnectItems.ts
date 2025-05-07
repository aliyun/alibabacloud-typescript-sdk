// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems extends $dara.Model {
  /**
   * @remarks
   * The proxy endpoint queried.
   * 
   * @example
   * testproxy****.rwlb.rds.aliyuncs.com
   */
  dbProxyEndpointConnectString?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **0**: Internet
   * *   **1**: classic network
   * *   **2**: virtual private cloud (VPC)
   * 
   * @example
   * 2
   */
  dbProxyEndpointNetType?: string;
  /**
   * @remarks
   * The port number that is associated with the proxy endpoint. Default value: **3306**.
   * 
   * @example
   * 3306
   */
  dbProxyEndpointPort?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointConnectString: 'DbProxyEndpointConnectString',
      dbProxyEndpointNetType: 'DbProxyEndpointNetType',
      dbProxyEndpointPort: 'DbProxyEndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointConnectString: 'string',
      dbProxyEndpointNetType: 'string',
      dbProxyEndpointPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


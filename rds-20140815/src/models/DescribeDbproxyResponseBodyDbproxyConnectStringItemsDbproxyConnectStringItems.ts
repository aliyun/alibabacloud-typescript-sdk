// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems extends $dara.Model {
  /**
   * @remarks
   * The database proxy endpoint.
   * 
   * @example
   * gos787jog2wk0ye1****-rw4rm.rwlb.rds.aliyuncs.com
   */
  DBProxyConnectString?: string;
  /**
   * @remarks
   * The network type of the database proxy endpoint. A database proxy endpoint is formerly referred to as a proxy terminal. Valid values:
   * 
   * *   OuterString: Internet
   * *   InnerString: internal network
   * 
   * @example
   * InnerString
   */
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * The network type of the database proxy. Valid values:
   * 
   * *   0: Internet
   * *   1: classic network
   * *   2: virtual private cloud (VPC)
   * 
   * @example
   * 2
   */
  DBProxyConnectStringNetWorkType?: string;
  /**
   * @remarks
   * The port that is associated with the database proxy endpoint.
   * 
   * @example
   * 3306
   */
  DBProxyConnectStringPort?: string;
  /**
   * @remarks
   * The ID of the backend database proxy endpoint.
   * 
   * @example
   * 20****
   */
  DBProxyEndpointId?: string;
  /**
   * @remarks
   * The name of the database proxy endpoint. The name can be replaced by the ID of the database proxy endpoint.
   * 
   * @example
   * gos787jog2wk0ye1****
   */
  DBProxyEndpointName?: string;
  /**
   * @remarks
   * The VPC of the database proxy.
   * 
   * @example
   * vpc-uf6oobt****
   */
  DBProxyVpcId?: string;
  /**
   * @remarks
   * The ID of the database proxy instance.
   * 
   * @example
   * rm-bp145737x5****131161274792****
   */
  DBProxyVpcInstanceId?: string;
  /**
   * @remarks
   * The vSwitch of the database proxy.
   * 
   * @example
   * vsw-uf6l0pic17****
   */
  DBProxyVswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      DBProxyConnectString: 'DBProxyConnectString',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyConnectStringNetWorkType: 'DBProxyConnectStringNetWorkType',
      DBProxyConnectStringPort: 'DBProxyConnectStringPort',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEndpointName: 'DBProxyEndpointName',
      DBProxyVpcId: 'DBProxyVpcId',
      DBProxyVpcInstanceId: 'DBProxyVpcInstanceId',
      DBProxyVswitchId: 'DBProxyVswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyConnectString: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyConnectStringNetWorkType: 'string',
      DBProxyConnectStringPort: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEndpointName: 'string',
      DBProxyVpcId: 'string',
      DBProxyVpcInstanceId: 'string',
      DBProxyVswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


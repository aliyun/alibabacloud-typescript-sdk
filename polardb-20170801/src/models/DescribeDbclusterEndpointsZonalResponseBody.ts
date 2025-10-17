// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems extends $dara.Model {
  /**
   * @example
   * ********.rwlb.polardb-pg-public.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * True
   */
  dashboardUsed?: boolean;
  /**
   * @example
   * 192.***.***.***
   */
  IPAddress?: string;
  /**
   * @example
   * Private
   */
  netType?: string;
  /**
   * @example
   * 1521
   */
  port?: string;
  /**
   * @example
   * ***.***.**.com
   */
  privateZoneConnectionString?: string;
  /**
   * @example
   * vpc-***************
   */
  VPCId?: string;
  /**
   * @example
   * vsw-************
   */
  vSwitchId?: string;
  /**
   * @example
   * pe-*************
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      dashboardUsed: 'DashboardUsed',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      privateZoneConnectionString: 'PrivateZoneConnectionString',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      dashboardUsed: 'boolean',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      privateZoneConnectionString: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsZonalResponseBodyItems extends $dara.Model {
  addressItems?: DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems[];
  /**
   * @example
   * Enable
   */
  autoAddNewNodes?: string;
  /**
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @example
   * test
   */
  DBEndpointDescription?: string;
  /**
   * @example
   * pe-*************
   */
  DBEndpointId?: string;
  /**
   * @example
   * {\\"DistributedTransaction\\":\\"off\\",\\"ConsistLevel\\":\\"0\\",\\"LoadBalanceStrategy\\":\\"load\\",\\"MasterAcceptReads\\":\\"on\\"}
   */
  endpointConfig?: string;
  /**
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @example
   * Reader1
   */
  nodeWithRoles?: string;
  /**
   * @example
   * pi-***************,pi-***************
   */
  nodes?: string;
  /**
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
  /**
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  /**
   * @example
   * on
   */
  sccMode?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      autoAddNewNodes: 'AutoAddNewNodes',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      DBEndpointId: 'DBEndpointId',
      endpointConfig: 'EndpointConfig',
      endpointType: 'EndpointType',
      nodeWithRoles: 'NodeWithRoles',
      nodes: 'Nodes',
      polarSccTimeoutAction: 'PolarSccTimeoutAction',
      polarSccWaitTimeout: 'PolarSccWaitTimeout',
      readWriteMode: 'ReadWriteMode',
      sccMode: 'SccMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems },
      autoAddNewNodes: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      DBEndpointId: 'string',
      endpointConfig: 'string',
      endpointType: 'string',
      nodeWithRoles: 'string',
      nodes: 'string',
      polarSccTimeoutAction: 'string',
      polarSccWaitTimeout: 'string',
      readWriteMode: 'string',
      sccMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressItems)) {
      $dara.Model.validateArray(this.addressItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsZonalResponseBody extends $dara.Model {
  items?: DescribeDBClusterEndpointsZonalResponseBodyItems[];
  /**
   * @example
   * 2DC120BF-6EBA-4C63-BE99-B09F9E******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsZonalResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


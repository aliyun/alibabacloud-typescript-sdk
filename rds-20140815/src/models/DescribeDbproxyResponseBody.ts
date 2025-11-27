// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyResponseBodyDBProxyAVZones extends $dara.Model {
  DBProxyAVZones?: string[];
  static names(): { [key: string]: string } {
    return {
      DBProxyAVZones: 'DBProxyAVZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyAVZones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyAVZones)) {
      $dara.Model.validateArray(this.DBProxyAVZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeDBProxyResponseBodyDBProxyConnectStringItems extends $dara.Model {
  DBProxyConnectStringItems?: DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems[];
  static names(): { [key: string]: string } {
    return {
      DBProxyConnectStringItems: 'DBProxyConnectStringItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyConnectStringItems: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyConnectStringItems)) {
      $dara.Model.validateArray(this.DBProxyConnectStringItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions extends $dara.Model {
  DBProxyInstanceMinorVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      DBProxyInstanceMinorVersions: 'DBProxyInstanceMinorVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyInstanceMinorVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyInstanceMinorVersions)) {
      $dara.Model.validateArray(this.DBProxyInstanceMinorVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of the node.
   * 
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @remarks
   * The ID of the proxy node.
   * 
   * @example
   * pn-xxxxxxx01
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the zone in which the node is deployed.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      nodeId: 'nodeId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'string',
      nodeId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDBProxyNodes extends $dara.Model {
  DBProxyNodes?: DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes[];
  static names(): { [key: string]: string } {
    return {
      DBProxyNodes: 'DBProxyNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyNodes: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyNodes)) {
      $dara.Model.validateArray(this.DBProxyNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems extends $dara.Model {
  /**
   * @remarks
   * The description of the database proxy endpoint.
   * 
   * @example
   * proxy-test
   */
  dbProxyEndpointAliases?: string;
  /**
   * @remarks
   * The ID of the database proxy endpoint.
   * 
   * @example
   * gos787jog2wk0ye1****
   */
  dbProxyEndpointName?: string;
  /**
   * @remarks
   * The type of the database proxy endpoint. Valid values:
   * 
   * *   Custom: custom database proxy endpoint
   * *   RWSplit: default database proxy endpoint
   * 
   * @example
   * RWSplit
   */
  dbProxyEndpointType?: string;
  /**
   * @remarks
   * The read and write attributes of the database proxy endpoint.
   * 
   * *   ReadOnly
   * *   ReadWrite
   * 
   * @example
   * ReadWrite
   */
  dbProxyReadWriteMode?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointAliases: 'DbProxyEndpointAliases',
      dbProxyEndpointName: 'DbProxyEndpointName',
      dbProxyEndpointType: 'DbProxyEndpointType',
      dbProxyReadWriteMode: 'DbProxyReadWriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointAliases: 'string',
      dbProxyEndpointName: 'string',
      dbProxyEndpointType: 'string',
      dbProxyReadWriteMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDbProxyEndpointItems extends $dara.Model {
  dbProxyEndpointItems?: DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems[];
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointItems: 'DbProxyEndpointItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointItems: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems },
    };
  }

  validate() {
    if(Array.isArray(this.dbProxyEndpointItems)) {
      $dara.Model.validateArray(this.dbProxyEndpointItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of zones that are available for the database proxy.
   */
  DBProxyAVZones?: DescribeDBProxyResponseBodyDBProxyAVZones;
  /**
   * @remarks
   * An array consisting of the information about the database proxy endpoint that is created for the instance.
   */
  DBProxyConnectStringItems?: DescribeDBProxyResponseBodyDBProxyConnectStringItems;
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The version of the proxy instance.
   * 
   * @example
   * 1.13.11
   */
  DBProxyInstanceCurrentMinorVersion?: string;
  /**
   * @remarks
   * The latest version that is available for the proxy instance.
   * 
   * @example
   * 1.13.12
   */
  DBProxyInstanceLatestMinorVersion?: string;
  DBProxyInstanceMinorVersions?: DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions;
  /**
   * @remarks
   * The name of the proxy instance.
   * 
   * @example
   * gos787jog2wk0ye1****
   */
  DBProxyInstanceName?: string;
  /**
   * @remarks
   * The number of proxies that are enabled on the instance.
   * 
   * @example
   * 1
   */
  DBProxyInstanceNum?: number;
  /**
   * @remarks
   * This parameter is available only for ApsaraDB RDS for PostgreSQL instances. The specifications of the proxy instance that is enabled.
   * 
   * Format: `Number of cores/Memory capacity`.
   * 
   * For example, a value of 4/8 indicates that the proxy instance has 4 cores and 8 GB of memory.
   * 
   * @example
   * 4/8
   */
  DBProxyInstanceSize?: string;
  /**
   * @remarks
   * The status of the proxy instance.
   * 
   * *   DBInstanceClassChanging: The specifications of the proxy instance are being changed.
   * *   Creating: The proxy instance is being created.
   * *   Running: The proxy instance is running.
   * *   Deleting: The proxy instance is being deleted.
   * 
   * @example
   * Running
   */
  DBProxyInstanceStatus?: string;
  /**
   * @remarks
   * The type of the database proxy that is enabled on the instance. Valid values:
   * 
   * *   1: shared database proxy
   * *   2: dedicated database proxy
   * *   3: general-purpose database proxy
   * 
   * >  ApsaraDB RDS for PostgreSQL does not support shared database proxies.
   * 
   * @example
   * 2
   */
  DBProxyInstanceType?: string;
  /**
   * @remarks
   * An internal parameter. You do not need to specify this parameter.
   * 
   * @example
   * 18
   */
  DBProxyKindCode?: string;
  /**
   * @remarks
   * The proxy nodes.
   */
  DBProxyNodes?: DescribeDBProxyResponseBodyDBProxyNodes;
  /**
   * @remarks
   * The status of persistence connections. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * *   **Unsupported**
   * 
   * @example
   * Disabled
   */
  DBProxyPersistentConnectionStatus?: string;
  /**
   * @remarks
   * The status of the database proxy.
   * 
   * *   Shutdown: disabled
   * *   Startup: enabled
   * 
   * @example
   * Startup
   */
  DBProxyServiceStatus?: string;
  /**
   * @remarks
   * The proxy terminals of the instance.
   */
  dbProxyEndpointItems?: DescribeDBProxyResponseBodyDbProxyEndpointItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 909A69EE-71C8-4417-A0B9-FF085407E1E3
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBProxyAVZones: 'DBProxyAVZones',
      DBProxyConnectStringItems: 'DBProxyConnectStringItems',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyInstanceCurrentMinorVersion: 'DBProxyInstanceCurrentMinorVersion',
      DBProxyInstanceLatestMinorVersion: 'DBProxyInstanceLatestMinorVersion',
      DBProxyInstanceMinorVersions: 'DBProxyInstanceMinorVersions',
      DBProxyInstanceName: 'DBProxyInstanceName',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      DBProxyInstanceSize: 'DBProxyInstanceSize',
      DBProxyInstanceStatus: 'DBProxyInstanceStatus',
      DBProxyInstanceType: 'DBProxyInstanceType',
      DBProxyKindCode: 'DBProxyKindCode',
      DBProxyNodes: 'DBProxyNodes',
      DBProxyPersistentConnectionStatus: 'DBProxyPersistentConnectionStatus',
      DBProxyServiceStatus: 'DBProxyServiceStatus',
      dbProxyEndpointItems: 'DbProxyEndpointItems',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyAVZones: DescribeDBProxyResponseBodyDBProxyAVZones,
      DBProxyConnectStringItems: DescribeDBProxyResponseBodyDBProxyConnectStringItems,
      DBProxyEngineType: 'string',
      DBProxyInstanceCurrentMinorVersion: 'string',
      DBProxyInstanceLatestMinorVersion: 'string',
      DBProxyInstanceMinorVersions: DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions,
      DBProxyInstanceName: 'string',
      DBProxyInstanceNum: 'number',
      DBProxyInstanceSize: 'string',
      DBProxyInstanceStatus: 'string',
      DBProxyInstanceType: 'string',
      DBProxyKindCode: 'string',
      DBProxyNodes: DescribeDBProxyResponseBodyDBProxyNodes,
      DBProxyPersistentConnectionStatus: 'string',
      DBProxyServiceStatus: 'string',
      dbProxyEndpointItems: DescribeDBProxyResponseBodyDbProxyEndpointItems,
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(this.DBProxyAVZones && typeof (this.DBProxyAVZones as any).validate === 'function') {
      (this.DBProxyAVZones as any).validate();
    }
    if(this.DBProxyConnectStringItems && typeof (this.DBProxyConnectStringItems as any).validate === 'function') {
      (this.DBProxyConnectStringItems as any).validate();
    }
    if(this.DBProxyInstanceMinorVersions && typeof (this.DBProxyInstanceMinorVersions as any).validate === 'function') {
      (this.DBProxyInstanceMinorVersions as any).validate();
    }
    if(this.DBProxyNodes && typeof (this.DBProxyNodes as any).validate === 'function') {
      (this.DBProxyNodes as any).validate();
    }
    if(this.dbProxyEndpointItems && typeof (this.dbProxyEndpointItems as any).validate === 'function') {
      (this.dbProxyEndpointItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


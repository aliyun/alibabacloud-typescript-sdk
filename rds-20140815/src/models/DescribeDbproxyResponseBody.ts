// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyResponseBodyDBProxyAVZones } from "./DescribeDbproxyResponseBodyDbproxyAvzones";
import { DescribeDBProxyResponseBodyDBProxyConnectStringItems } from "./DescribeDbproxyResponseBodyDbproxyConnectStringItems";
import { DescribeDBProxyResponseBodyDBProxyNodes } from "./DescribeDbproxyResponseBodyDbproxyNodes";
import { DescribeDBProxyResponseBodyDbProxyEndpointItems } from "./DescribeDbproxyResponseBodyDbProxyEndpointItems";


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
   * Internal parameters, no need to pay attention.
   * 
   * @example
   * 18
   */
  DBProxyKindCode?: string;
  /**
   * @remarks
   * The proxy node list.
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


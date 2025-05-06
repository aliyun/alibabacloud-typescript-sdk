// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyDBNodes extends $dara.Model {
  /**
   * @remarks
   * Number of CPU cores for second-level elastic scaling.
   * 
   * @example
   * 6
   */
  addedCpuCores?: string;
  /**
   * @remarks
   * Number of CPU cores for the node.
   * 
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @remarks
   * Node creation time.
   * 
   * @example
   * 2020-03-23T21:35:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Node specification.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @example
   * test
   */
  DBNodeDescription?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * Node role, with possible values as follows:
   * 
   * - **Writer**: Primary node.
   * - **Reader**: Read-only node.
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * Node status, with possible values as follows:
   * * **Creating**: Creating
   * * **Running**: Running
   * * **Deleting**: Deleting
   * * **Rebooting**: Rebooting
   * * **DBNodeCreating**: Adding node
   * * **DBNodeDeleting**: Removing node
   * * **ClassChanging**: Modifying node specification
   * * **NetAddressCreating**: Creating network connection
   * * **NetAddressDeleting**: Deleting network connection
   * * **NetAddressModifying**: Modifying network connection
   * * **MinorVersionUpgrading**: Upgrading minor version
   * * **Maintaining**: Instance maintenance
   * * **Switching**: Switching
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * Failover priority. Each node has a failover priority, determining the likelihood of being elected as the primary node during a failover. A higher value indicates a higher priority.
   * Range: 1 to 15.
   * 
   * @example
   * 1
   */
  failoverPriority?: number;
  /**
   * @remarks
   * Whether hot standby is enabled. Possible values are:
   * 
   * - **ON**: Enabled
   * - **OFF**: Disabled
   * 
   * @example
   * ON
   */
  hotReplicaMode?: string;
  /**
   * @remarks
   * Whether columnar index is enabled. Possible values are:
   * 
   * - **ON**: Enabled
   * - **OFF**: Disabled
   * 
   * @example
   * ON
   */
  imciSwitch?: string;
  /**
   * @remarks
   * Primary node ID of the multi-master architecture cluster edition.
   * 
   * @example
   * pi-bp18z52akld3*****
   */
  masterId?: string;
  /**
   * @remarks
   * Maximum concurrent connections of the cluster.
   * 
   * @example
   * 8000
   */
  maxConnections?: number;
  /**
   * @remarks
   * Maximum number of I/O requests, that is, IOPS.
   * 
   * @example
   * 32000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * Node memory size, in MB.
   * 
   * @example
   * 8192
   */
  memorySize?: string;
  /**
   * @remarks
   * The name of the hot standby compute node corresponding to the node when the hot standby storage and compute clusters feature is enabled.
   * 
   * @example
   * pi-bp18z52mirror*****
   */
  mirrorInsName?: string;
  multiMasterLocalStandby?: string;
  multiMasterPrimaryNode?: string;
  /**
   * @remarks
   * Orca feature, valid values are:
   * - on: enabled
   * - off: disabled
   * 
   * @example
   * off
   */
  orca?: string;
  /**
   * @remarks
   * Remote memory size, in MB.
   * 
   * @example
   * 3072
   */
  remoteMemorySize?: string;
  /**
   * @remarks
   * Whether the node has the global consistency (high-performance mode) feature enabled. Possible values are:
   * 
   * - **ON**: Enabled
   * 
   * - **OFF**: Disabled
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  sccMode?: string;
  /**
   * @remarks
   * Routing weight.
   * Range: 1~100. Default is 1.
   * 
   * @example
   * 1
   */
  serverWeight?: string;
  /**
   * @remarks
   * Serverless type. Possible values include:
   * 
   * - **AgileServerless**: Agile
   * - **SteadyServerless**: Steady
   * 
   * > This parameter is only supported by Serverless clusters.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * Identifies whether the node is in the primary or standby availability zone, primarily used in resource mirroring scenarios.
   * Values include:
   * - **Primary**: Primary Availability Zone
   * - **Standby**: Standby Availability Zone
   * 
   * @example
   * Primary
   */
  subCluster?: string;
  subGroupDescription?: string;
  /**
   * @remarks
   * Availability zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addedCpuCores: 'AddedCpuCores',
      cpuCores: 'CpuCores',
      creationTime: 'CreationTime',
      DBNodeClass: 'DBNodeClass',
      DBNodeDescription: 'DBNodeDescription',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      failoverPriority: 'FailoverPriority',
      hotReplicaMode: 'HotReplicaMode',
      imciSwitch: 'ImciSwitch',
      masterId: 'MasterId',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      memorySize: 'MemorySize',
      mirrorInsName: 'MirrorInsName',
      multiMasterLocalStandby: 'MultiMasterLocalStandby',
      multiMasterPrimaryNode: 'MultiMasterPrimaryNode',
      orca: 'Orca',
      remoteMemorySize: 'RemoteMemorySize',
      sccMode: 'SccMode',
      serverWeight: 'ServerWeight',
      serverlessType: 'ServerlessType',
      subCluster: 'SubCluster',
      subGroupDescription: 'SubGroupDescription',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedCpuCores: 'string',
      cpuCores: 'string',
      creationTime: 'string',
      DBNodeClass: 'string',
      DBNodeDescription: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      failoverPriority: 'number',
      hotReplicaMode: 'string',
      imciSwitch: 'string',
      masterId: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      memorySize: 'string',
      mirrorInsName: 'string',
      multiMasterLocalStandby: 'string',
      multiMasterPrimaryNode: 'string',
      orca: 'string',
      remoteMemorySize: 'string',
      sccMode: 'string',
      serverWeight: 'string',
      serverlessType: 'string',
      subCluster: 'string',
      subGroupDescription: 'string',
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


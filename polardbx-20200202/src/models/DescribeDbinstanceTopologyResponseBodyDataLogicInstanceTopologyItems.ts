// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList } from "./DescribeDbinstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList";
import { DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp } from "./DescribeDbinstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp";


export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems extends $dara.Model {
  /**
   * @example
   * true
   */
  activated?: boolean;
  /**
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  azoneRoleList?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList[];
  characterType?: string;
  connectionIp?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp[];
  DBInstanceConnType?: number;
  /**
   * @example
   * 2021-10-21T10:30:45Z
   */
  DBInstanceCreateTime?: string;
  DBInstanceDescription?: string;
  /**
   * @example
   * 304726049
   */
  DBInstanceId?: string;
  /**
   * @example
   * pxc-i-tk6t4z****
   */
  DBInstanceName?: string;
  /**
   * @example
   * 8
   */
  DBInstanceStatus?: number;
  DBInstanceStatusDescription?: string;
  /**
   * @example
   * 3145728
   */
  diskSize?: number;
  /**
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @example
   * 0
   */
  lockMode?: number;
  lockReason?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  /**
   * @example
   * 4000
   */
  maxConnections?: number;
  /**
   * @example
   * 7000
   */
  maxIops?: number;
  /**
   * @example
   * polarx.x4.large.2e
   */
  nodeClass?: string;
  phyInstanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * master
   */
  role?: string;
  /**
   * @example
   * 0
   */
  status?: string;
  storageUsed?: string;
  /**
   * @example
   * polarx-cdc-kernel-2.0.0-3985896
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      activated: 'Activated',
      azone: 'Azone',
      azoneRoleList: 'AzoneRoleList',
      characterType: 'CharacterType',
      connectionIp: 'ConnectionIp',
      DBInstanceConnType: 'DBInstanceConnType',
      DBInstanceCreateTime: 'DBInstanceCreateTime',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStatusDescription: 'DBInstanceStatusDescription',
      diskSize: 'DiskSize',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      maxConnections: 'MaxConnections',
      maxIops: 'MaxIops',
      nodeClass: 'NodeClass',
      phyInstanceName: 'PhyInstanceName',
      region: 'Region',
      role: 'Role',
      status: 'Status',
      storageUsed: 'StorageUsed',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activated: 'boolean',
      azone: 'string',
      azoneRoleList: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList },
      characterType: 'string',
      connectionIp: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp },
      DBInstanceConnType: 'number',
      DBInstanceCreateTime: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      DBInstanceStatus: 'number',
      DBInstanceStatusDescription: 'string',
      diskSize: 'number',
      engine: 'string',
      engineVersion: 'string',
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      maxConnections: 'number',
      maxIops: 'number',
      nodeClass: 'string',
      phyInstanceName: 'string',
      region: 'string',
      role: 'string',
      status: 'string',
      storageUsed: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.azoneRoleList)) {
      $dara.Model.validateArray(this.azoneRoleList);
    }
    if(Array.isArray(this.connectionIp)) {
      $dara.Model.validateArray(this.connectionIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the migration can be canceled. This parameter is valid only for resource units that are being manually immigrated or emigrated.
   * 
   * @example
   * true
   */
  enableCancelMigrateUnit?: boolean;
  /**
   * @remarks
   * Indicates whether the resource unit can be migrated.
   * 
   * @example
   * true
   */
  enableMigrateUnit?: boolean;
  /**
   * @remarks
   * Indicates whether the resource unit is manually migrated.
   * 
   * @example
   * true
   */
  manualMigrate?: boolean;
  /**
   * @remarks
   * The ID of the OBServer node in which the resource unit resides.
   * 
   * @example
   * i-bp16niirq4zdmgvm****
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the replica. Node filtering conditions are configured based on the replica type when you query the monitoring data of the OceanBase cluster. 
   * * By default, the replica type is not specified when you query the monitoring data of OceanBase clusters or the access proxy. If you do not specify the replica type when you query the monitoring data of an OceanBase cluster, the monitoring data of all nodes is queried. 
   * * If you set the replica type to FULL when you query the monitoring data of an OceanBase cluster, the monitoring data of only the full-featured replica nodes is queried. 
   * * If you set the replica type to READONLY when you query the monitoring data of an OceanBase cluster, the monitoring data of only the read-only replica nodes is queried.
   * 
   * @example
   * FULL
   */
  replicaType?: string;
  /**
   * @remarks
   * The number of CPU cores of the resource unit.
   * 
   * @example
   * 2
   */
  unitCpu?: number;
  /**
   * @remarks
   * The data size of the resource unit.
   * 
   * @example
   * 10
   */
  unitDataSize?: number;
  /**
   * @remarks
   * The ID of the resource unit.
   * 
   * @example
   * 1002
   */
  unitId?: string;
  /**
   * @remarks
   * The memory size of the resource unit, in GB.
   * 
   * @example
   * 10
   */
  unitMemory?: number;
  /**
   * @remarks
   * The status of the resource unit. Valid values: 
   * * ONLINE: The resource unit is running. 
   * * IMMIGRATING: The resource unit is being immigrated. 
   * * EMIGRATING: The resource unit is being emigrated. 
   * * CANCEL_EMIGRATING: The immigration of the resource unit is being canceled. 
   * * CANCEL_EMIGRATING: The emigration of the resource unit is being canceled. 
   * * DELETING: The resource unit is being deleted.
   * 
   * @example
   * ONLINE
   */
  unitStatus?: string;
  static names(): { [key: string]: string } {
    return {
      enableCancelMigrateUnit: 'EnableCancelMigrateUnit',
      enableMigrateUnit: 'EnableMigrateUnit',
      manualMigrate: 'ManualMigrate',
      nodeId: 'NodeId',
      replicaType: 'ReplicaType',
      unitCpu: 'UnitCpu',
      unitDataSize: 'UnitDataSize',
      unitId: 'UnitId',
      unitMemory: 'UnitMemory',
      unitStatus: 'UnitStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCancelMigrateUnit: 'boolean',
      enableMigrateUnit: 'boolean',
      manualMigrate: 'boolean',
      nodeId: 'string',
      replicaType: 'string',
      unitCpu: 'number',
      unitDataSize: 'number',
      unitId: 'string',
      unitMemory: 'number',
      unitStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


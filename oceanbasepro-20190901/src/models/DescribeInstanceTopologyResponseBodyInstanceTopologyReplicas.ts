// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResource } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResource";


export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicas extends $dara.Model {
  /**
   * @remarks
   * The ID of the replica.
   * 
   * @example
   * cn-hangzhou-h-z0
   */
  logicalZone?: string;
  /**
   * @remarks
   * The number of nodes of the replica.
   * 
   * @example
   * 1
   */
  nodeNum?: number;
  onlineNodeNum?: number;
  /**
   * @remarks
   * The type of the read-only replica.
   * 
   * @example
   * ROW_STORE
   */
  readOnlyReplicaType?: string;
  /**
   * @remarks
   * The information about the replica resources.
   */
  replicaResource?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResource;
  /**
   * @remarks
   * The type of the replica.
   * 
   * @example
   * FULL
   */
  replicaType?: string;
  /**
   * @remarks
   * The status of the replica. Valid values: ACTIVE, INACTIVE, and UNKNOWN.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The serial number of the replica.
   * 
   * @example
   * 1
   */
  zoneLogicalId?: number;
  /**
   * @remarks
   * The region of the replica.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneLogicalName?: string;
  /**
   * @remarks
   * The zone of the replica.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      logicalZone: 'LogicalZone',
      nodeNum: 'NodeNum',
      onlineNodeNum: 'OnlineNodeNum',
      readOnlyReplicaType: 'ReadOnlyReplicaType',
      replicaResource: 'ReplicaResource',
      replicaType: 'ReplicaType',
      status: 'Status',
      zoneLogicalId: 'ZoneLogicalId',
      zoneLogicalName: 'ZoneLogicalName',
      zoneRegionName: 'ZoneRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalZone: 'string',
      nodeNum: 'number',
      onlineNodeNum: 'number',
      readOnlyReplicaType: 'string',
      replicaResource: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResource,
      replicaType: 'string',
      status: 'string',
      zoneLogicalId: 'number',
      zoneLogicalName: 'string',
      zoneRegionName: 'string',
    };
  }

  validate() {
    if(this.replicaResource && typeof (this.replicaResource as any).validate === 'function') {
      (this.replicaResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


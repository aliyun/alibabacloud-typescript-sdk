// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterState } from "./ClusterState";
import { FlussVswitch } from "./FlussVswitch";


export class FlussInstance extends $dara.Model {
  /**
   * @remarks
   * The running state information of the cluster.
   */
  clusterState?: ClusterState;
  /**
   * @remarks
   * The status of the Fluss cluster.
   * 
   * @example
   * RUNNING
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The console access URL of the Fluss instance.
   */
  consoleUrl?: string;
  /**
   * @remarks
   * The disk size of a single TabletServer node, in GiB.
   * 
   * @example
   * 900
   */
  diskSize?: number;
  /**
   * @remarks
   * Specifies whether multi-zone high availability is enabled.
   */
  ha?: boolean;
  /**
   * @remarks
   * The ID of the Fluss instance.
   * 
   * @example
   * f-cn-zvp2q0z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Fluss instance.
   * 
   * @example
   * fluss-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The order status of the instance.
   * 
   * @example
   * NORMAL
   */
  orderState?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The creation time of the instance, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1629879567394
   */
  resourceCreateTime?: number;
  /**
   * @remarks
   * The time when the instance expires, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1637337600000
   */
  resourceExpiredTime?: number;
  /**
   * @remarks
   * The TabletServer node specifications.
   * 
   * @example
   * 4 RCU
   */
  tabletServerModel?: string;
  /**
   * @remarks
   * The number of TabletServer nodes.
   * 
   * @example
   * 3
   */
  tabletServerNum?: number;
  /**
   * @remarks
   * The type of TabletServer node specifications.
   * 
   * @example
   * 4 RCU
   */
  tabletServerType?: string;
  /**
   * @remarks
   * The upper limit of elastic compute resources for the lake-stream synchronization service, in CUs.
   * 
   * @example
   * 100
   */
  tieringPostCu?: number;
  /**
   * @remarks
   * The base compute resource count for the lake-stream synchronization service, in CUs.
   */
  tieringPreCu?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the instance belongs.
   * 
   * @example
   * 183899668736****
   */
  uid?: string;
  /**
   * @remarks
   * The list of zone and vSwitch configurations used by the instance.
   */
  vSwitches?: FlussVswitch[];
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-2ze9*******nxfmfcdi
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterState: 'ClusterState',
      clusterStatus: 'ClusterStatus',
      consoleUrl: 'ConsoleUrl',
      diskSize: 'DiskSize',
      ha: 'Ha',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      orderState: 'OrderState',
      regionId: 'RegionId',
      resourceCreateTime: 'ResourceCreateTime',
      resourceExpiredTime: 'ResourceExpiredTime',
      tabletServerModel: 'TabletServerModel',
      tabletServerNum: 'TabletServerNum',
      tabletServerType: 'TabletServerType',
      tieringPostCu: 'TieringPostCu',
      tieringPreCu: 'TieringPreCu',
      uid: 'Uid',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterState: ClusterState,
      clusterStatus: 'string',
      consoleUrl: 'string',
      diskSize: 'number',
      ha: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      orderState: 'string',
      regionId: 'string',
      resourceCreateTime: 'number',
      resourceExpiredTime: 'number',
      tabletServerModel: 'string',
      tabletServerNum: 'number',
      tabletServerType: 'string',
      tieringPostCu: 'number',
      tieringPreCu: 'number',
      uid: 'string',
      vSwitches: { 'type': 'array', 'itemType': FlussVswitch },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.clusterState && typeof (this.clusterState as any).validate === 'function') {
      (this.clusterState as any).validate();
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


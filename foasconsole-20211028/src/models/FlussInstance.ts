// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterState } from "./ClusterState";
import { FlussVswitch } from "./FlussVswitch";


export class FlussInstance extends $dara.Model {
  clusterState?: ClusterState;
  /**
   * @remarks
   * The cluster status.
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The URL of the instance management console.
   */
  consoleUrl?: string;
  /**
   * @remarks
   * The disk size, in GB.
   */
  diskSize?: number;
  /**
   * @remarks
   * Specifies whether high availability (HA) is enabled.
   */
  ha?: boolean;
  /**
   * @remarks
   * The instance ID.
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   */
  instanceName?: string;
  /**
   * @remarks
   * The order state.
   */
  orderState?: string;
  /**
   * @remarks
   * The ID of the region.
   */
  regionId?: string;
  /**
   * @remarks
   * The creation time of the resource, as a UNIX timestamp in milliseconds.
   */
  resourceCreateTime?: number;
  /**
   * @remarks
   * The expiration time of the resource, as a UNIX timestamp in milliseconds.
   */
  resourceExpiredTime?: number;
  /**
   * @remarks
   * The tablet server model.
   */
  tabletServerModel?: string;
  /**
   * @remarks
   * The number of tablet servers.
   */
  tabletServerNum?: number;
  /**
   * @remarks
   * The tablet server type.
   */
  tabletServerType?: string;
  /**
   * @remarks
   * The number of compute units (CUs) for post-tiering.
   */
  tieringPostCu?: number;
  /**
   * @remarks
   * The number of compute units (CUs) for pre-tiering.
   */
  tieringPreCu?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID (UID).
   */
  uid?: string;
  /**
   * @remarks
   * The VSwitch details.
   */
  vSwitches?: FlussVswitch[];
  /**
   * @remarks
   * The VPC ID.
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


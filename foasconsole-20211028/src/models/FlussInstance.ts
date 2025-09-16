// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterState } from "./ClusterState";
import { FlussVswitch } from "./FlussVswitch";


export class FlussInstance extends $dara.Model {
  clusterState?: ClusterState;
  clusterStatus?: string;
  consoleUrl?: string;
  diskSize?: number;
  instanceId?: string;
  instanceName?: string;
  orderState?: string;
  regionId?: string;
  resourceCreateTime?: number;
  resourceExpiredTime?: number;
  tabletServerModel?: string;
  tabletServerNum?: number;
  tabletServerType?: string;
  uid?: string;
  vSwitches?: FlussVswitch[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterState: 'ClusterState',
      clusterStatus: 'ClusterStatus',
      consoleUrl: 'ConsoleUrl',
      diskSize: 'DiskSize',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      orderState: 'OrderState',
      regionId: 'RegionId',
      resourceCreateTime: 'ResourceCreateTime',
      resourceExpiredTime: 'ResourceExpiredTime',
      tabletServerModel: 'TabletServerModel',
      tabletServerNum: 'TabletServerNum',
      tabletServerType: 'TabletServerType',
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
      instanceId: 'string',
      instanceName: 'string',
      orderState: 'string',
      regionId: 'string',
      resourceCreateTime: 'number',
      resourceExpiredTime: 'number',
      tabletServerModel: 'string',
      tabletServerNum: 'number',
      tabletServerType: 'string',
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


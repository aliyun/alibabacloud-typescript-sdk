// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesClusterState } from "./DescribeInstancesResponseBodyInstancesClusterState";
import { DescribeInstancesResponseBodyInstancesClusterUsedResources } from "./DescribeInstancesResponseBodyInstancesClusterUsedResources";
import { DescribeInstancesResponseBodyInstancesClusterUsedStorage } from "./DescribeInstancesResponseBodyInstancesClusterUsedStorage";
import { DescribeInstancesResponseBodyInstancesElasticResourceSpec } from "./DescribeInstancesResponseBodyInstancesElasticResourceSpec";
import { DescribeInstancesResponseBodyInstancesHaResourceSpec } from "./DescribeInstancesResponseBodyInstancesHaResourceSpec";
import { DescribeInstancesResponseBodyInstancesHaVSwitchInfo } from "./DescribeInstancesResponseBodyInstancesHaVswitchInfo";
import { DescribeInstancesResponseBodyInstancesHostAliases } from "./DescribeInstancesResponseBodyInstancesHostAliases";
import { DescribeInstancesResponseBodyInstancesOssInfo } from "./DescribeInstancesResponseBodyInstancesOssInfo";
import { DescribeInstancesResponseBodyInstancesResourceSpec } from "./DescribeInstancesResponseBodyInstancesResourceSpec";
import { DescribeInstancesResponseBodyInstancesStorage } from "./DescribeInstancesResponseBodyInstancesStorage";
import { DescribeInstancesResponseBodyInstancesTags } from "./DescribeInstancesResponseBodyInstancesTags";
import { DescribeInstancesResponseBodyInstancesVSwitchInfo } from "./DescribeInstancesResponseBodyInstancesVswitchInfo";
import { DescribeInstancesResponseBodyInstancesVpcInfo } from "./DescribeInstancesResponseBodyInstancesVpcInfo";


export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  ansm?: boolean;
  architectureType?: string;
  askClusterId?: string;
  /**
   * @example
   * PRE
   */
  chargeType?: string;
  clusterState?: DescribeInstancesResponseBodyInstancesClusterState;
  /**
   * @example
   * RUNNING
   */
  clusterStatus?: string;
  clusterUsedResources?: DescribeInstancesResponseBodyInstancesClusterUsedResources;
  clusterUsedStorage?: DescribeInstancesResponseBodyInstancesClusterUsedStorage;
  elastic?: boolean;
  elasticOrderState?: string;
  elasticResourceSpec?: DescribeInstancesResponseBodyInstancesElasticResourceSpec;
  ha?: boolean;
  haResourceSpec?: DescribeInstancesResponseBodyInstancesHaResourceSpec;
  haVSwitchIds?: string[];
  haVSwitchInfo?: DescribeInstancesResponseBodyInstancesHaVSwitchInfo[];
  haZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hostAliases?: DescribeInstancesResponseBodyInstancesHostAliases[];
  /**
   * @example
   * f-cn-zvp2q0zik06
   */
  instanceId?: string;
  /**
   * @example
   * vvp1
   */
  instanceName?: string;
  monitorType?: string;
  /**
   * @example
   * NORMAL
   */
  orderState?: string;
  ossInfo?: DescribeInstancesResponseBodyInstancesOssInfo;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 1629879567394
   */
  resourceCreateTime?: number;
  /**
   * @example
   * 1637337600000
   */
  resourceExpiredTime?: number;
  resourceGroupId?: string;
  /**
   * @example
   * b3690a1655da47
   */
  resourceId?: string;
  resourceSpec?: DescribeInstancesResponseBodyInstancesResourceSpec;
  storage?: DescribeInstancesResponseBodyInstancesStorage;
  tags?: DescribeInstancesResponseBodyInstancesTags[];
  /**
   * @example
   * 1838996687368452
   */
  uid?: string;
  vSwitchIds?: string[];
  vSwitchInfo?: DescribeInstancesResponseBodyInstancesVSwitchInfo[];
  /**
   * @example
   * vpc-2ze9*******nxfmfcdi
   */
  vpcId?: string;
  vpcInfo?: DescribeInstancesResponseBodyInstancesVpcInfo;
  /**
   * @example
   * cn-beijing-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ansm: 'Ansm',
      architectureType: 'ArchitectureType',
      askClusterId: 'AskClusterId',
      chargeType: 'ChargeType',
      clusterState: 'ClusterState',
      clusterStatus: 'ClusterStatus',
      clusterUsedResources: 'ClusterUsedResources',
      clusterUsedStorage: 'ClusterUsedStorage',
      elastic: 'Elastic',
      elasticOrderState: 'ElasticOrderState',
      elasticResourceSpec: 'ElasticResourceSpec',
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      haVSwitchInfo: 'HaVSwitchInfo',
      haZoneId: 'HaZoneId',
      hostAliases: 'HostAliases',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      monitorType: 'MonitorType',
      orderState: 'OrderState',
      ossInfo: 'OssInfo',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
      resourceExpiredTime: 'ResourceExpiredTime',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      tags: 'Tags',
      uid: 'Uid',
      vSwitchIds: 'VSwitchIds',
      vSwitchInfo: 'VSwitchInfo',
      vpcId: 'VpcId',
      vpcInfo: 'VpcInfo',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ansm: 'boolean',
      architectureType: 'string',
      askClusterId: 'string',
      chargeType: 'string',
      clusterState: DescribeInstancesResponseBodyInstancesClusterState,
      clusterStatus: 'string',
      clusterUsedResources: DescribeInstancesResponseBodyInstancesClusterUsedResources,
      clusterUsedStorage: DescribeInstancesResponseBodyInstancesClusterUsedStorage,
      elastic: 'boolean',
      elasticOrderState: 'string',
      elasticResourceSpec: DescribeInstancesResponseBodyInstancesElasticResourceSpec,
      ha: 'boolean',
      haResourceSpec: DescribeInstancesResponseBodyInstancesHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      haVSwitchInfo: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesHaVSwitchInfo },
      haZoneId: 'string',
      hostAliases: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesHostAliases },
      instanceId: 'string',
      instanceName: 'string',
      monitorType: 'string',
      orderState: 'string',
      ossInfo: DescribeInstancesResponseBodyInstancesOssInfo,
      region: 'string',
      resourceCreateTime: 'number',
      resourceExpiredTime: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceSpec: DescribeInstancesResponseBodyInstancesResourceSpec,
      storage: DescribeInstancesResponseBodyInstancesStorage,
      tags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesTags },
      uid: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchInfo: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesVSwitchInfo },
      vpcId: 'string',
      vpcInfo: DescribeInstancesResponseBodyInstancesVpcInfo,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.clusterState && typeof (this.clusterState as any).validate === 'function') {
      (this.clusterState as any).validate();
    }
    if(this.clusterUsedResources && typeof (this.clusterUsedResources as any).validate === 'function') {
      (this.clusterUsedResources as any).validate();
    }
    if(this.clusterUsedStorage && typeof (this.clusterUsedStorage as any).validate === 'function') {
      (this.clusterUsedStorage as any).validate();
    }
    if(this.elasticResourceSpec && typeof (this.elasticResourceSpec as any).validate === 'function') {
      (this.elasticResourceSpec as any).validate();
    }
    if(this.haResourceSpec && typeof (this.haResourceSpec as any).validate === 'function') {
      (this.haResourceSpec as any).validate();
    }
    if(Array.isArray(this.haVSwitchIds)) {
      $dara.Model.validateArray(this.haVSwitchIds);
    }
    if(Array.isArray(this.haVSwitchInfo)) {
      $dara.Model.validateArray(this.haVSwitchInfo);
    }
    if(Array.isArray(this.hostAliases)) {
      $dara.Model.validateArray(this.hostAliases);
    }
    if(this.ossInfo && typeof (this.ossInfo as any).validate === 'function') {
      (this.ossInfo as any).validate();
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    if(Array.isArray(this.vSwitchInfo)) {
      $dara.Model.validateArray(this.vSwitchInfo);
    }
    if(this.vpcInfo && typeof (this.vpcInfo as any).validate === 'function') {
      (this.vpcInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


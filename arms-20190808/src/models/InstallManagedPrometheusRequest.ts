// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallManagedPrometheusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ASK cluster.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster. This parameter is required if the ClusterType parameter is set to ecs.
   * 
   * @example
   * prd-ecs
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * Valid values:
   * 
   * *   ecs: ECS
   * *   one: ACK One
   * *   ask: ASK
   * *   pro: Container Monitoring Pro
   * 
   * This parameter is required.
   * 
   * @example
   * ask
   */
  clusterType?: string;
  /**
   * @remarks
   * The ID of the managed Grafana workspace that is associated with the cluster. If you set this parameter to free or leave this parameter empty, the cluster is associated with a shared Grafana workspace.
   * 
   * @example
   * grafana-bp1*****
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * -
   * 
   * **if can be null:**
   * true
   */
  kubeConfig?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group to which the cluster belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp1********
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is used by the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1*********
   */
  vSwitchId?: string;
  vcExtraInfo?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) where the cluster resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xxxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      grafanaInstanceId: 'GrafanaInstanceId',
      kubeConfig: 'KubeConfig',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vcExtraInfo: 'VcExtraInfo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      grafanaInstanceId: 'string',
      kubeConfig: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vcExtraInfo: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


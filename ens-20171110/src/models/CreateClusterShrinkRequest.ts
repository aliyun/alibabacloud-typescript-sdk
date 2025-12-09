// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 1.18.8
   */
  clusterVersion?: string;
  /**
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  controlPlaneConfigShrink?: string;
  /**
   * @example
   * cn-beijing
   */
  ensRegionId?: string;
  /**
   * @example
   * 1.32.1
   */
  kubernetesVersion?: string;
  /**
   * @example
   * lb-wz9t256gqa3vbouk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * mycluster-1
   */
  name?: string;
  podVswitchIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @example
   * true
   */
  publicAccess?: boolean;
  /**
   * @example
   * 172.19.0.0/20
   */
  serviceCidr?: string;
  /**
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  /**
   * @example
   * ["vsw-xxx", "vsw-yyy"]
   */
  vswitchIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      clusterVersion: 'ClusterVersion',
      containerCidr: 'ContainerCidr',
      controlPlaneConfigShrink: 'ControlPlaneConfig',
      ensRegionId: 'EnsRegionId',
      kubernetesVersion: 'KubernetesVersion',
      loadBalancerId: 'LoadBalancerId',
      name: 'Name',
      podVswitchIdsShrink: 'PodVswitchIds',
      profile: 'Profile',
      publicAccess: 'PublicAccess',
      serviceCidr: 'ServiceCidr',
      vpcId: 'VpcId',
      vswitchIdsShrink: 'VswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      clusterVersion: 'string',
      containerCidr: 'string',
      controlPlaneConfigShrink: 'string',
      ensRegionId: 'string',
      kubernetesVersion: 'string',
      loadBalancerId: 'string',
      name: 'string',
      podVswitchIdsShrink: 'string',
      profile: 'string',
      publicAccess: 'boolean',
      serviceCidr: 'string',
      vpcId: 'string',
      vswitchIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


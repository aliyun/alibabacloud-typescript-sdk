// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestControlPlaneConfig extends $dara.Model {
  /**
   * @example
   * m-5ul335umat4e2y9ynwi84p3f9
   */
  imageId?: string;
  /**
   * @example
   * ens.esk.sn1.medium
   */
  instanceSpec?: string;
  loginPassword?: string;
  /**
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @example
   * 3
   */
  size?: number;
  /**
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @example
   * 120
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceSpec: 'InstanceSpec',
      loginPassword: 'LoginPassword',
      nodePortRange: 'NodePortRange',
      runtime: 'Runtime',
      size: 'Size',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceSpec: 'string',
      loginPassword: 'string',
      nodePortRange: 'string',
      runtime: 'string',
      size: 'number',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $dara.Model {
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
  controlPlaneConfig?: CreateClusterRequestControlPlaneConfig;
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
  podVswitchIds?: string[];
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
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      clusterVersion: 'ClusterVersion',
      containerCidr: 'ContainerCidr',
      controlPlaneConfig: 'ControlPlaneConfig',
      ensRegionId: 'EnsRegionId',
      kubernetesVersion: 'KubernetesVersion',
      loadBalancerId: 'LoadBalancerId',
      name: 'Name',
      podVswitchIds: 'PodVswitchIds',
      profile: 'Profile',
      publicAccess: 'PublicAccess',
      serviceCidr: 'ServiceCidr',
      vpcId: 'VpcId',
      vswitchIds: 'VswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      clusterVersion: 'string',
      containerCidr: 'string',
      controlPlaneConfig: CreateClusterRequestControlPlaneConfig,
      ensRegionId: 'string',
      kubernetesVersion: 'string',
      loadBalancerId: 'string',
      name: 'string',
      podVswitchIds: { 'type': 'array', 'itemType': 'string' },
      profile: 'string',
      publicAccess: 'boolean',
      serviceCidr: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.controlPlaneConfig && typeof (this.controlPlaneConfig as any).validate === 'function') {
      (this.controlPlaneConfig as any).validate();
    }
    if(Array.isArray(this.podVswitchIds)) {
      $dara.Model.validateArray(this.podVswitchIds);
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


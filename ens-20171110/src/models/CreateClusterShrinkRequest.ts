// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Kubernetes or ManagedKubernetes. The former indicates an ECK cluster, and the latter indicates a serverless VC. This parameter must be used together with the Profile parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The CIDR block for pods. It must be a valid private CIDR block, such as 10.0.0.0/8, 172.16.0.0/12 to 172.31.0.0/16, or 192.168.0.0/16, and their subnets. The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks used by existing Kubernetes clusters in the VPC. The CIDR block cannot be modified after the cluster is created.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The control plane configuration.
   */
  controlPlaneConfigShrink?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) region where the cluster is deployed.
   * 
   * @example
   * cn-beijing
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) information. Valid values:
   * 
   * - **cmcc**: China Mobile.
   * - **unicom**: China Unicom.
   * - **telecom**: China Telecom.
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster. The version aligns with the Kubernetes community baseline version. We recommend that you select the latest version. If you do not specify this parameter, the latest version is used by default.
   * 
   * @example
   * 1.32.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB) instance used for API server access. If you specify this parameter, automatic creation of a CLB instance for the API server is skipped.
   * 
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
  /**
   * @remarks
   * The ID of the NAT gateway used by the cluster. If you specify this parameter, automatic creation of a NAT gateway is skipped.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The IDs of the pod vSwitches. Each pod vSwitch corresponds to a worker node vSwitch. The pod vSwitch and the worker node vSwitch must be in the same zone. If you do not specify this parameter, the vSwitches specified by the VswitchIds parameter are used by default.
   */
  podVswitchIdsShrink?: string;
  /**
   * @remarks
   * Default or Serverless. The former indicates an ECK cluster, and the latter indicates a serverless VC. This parameter must be used together with the ClusterType parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to enable public network access. You can expose the API server by using an elastic IP address (EIP) to enable public network access to the cluster. Valid values:
   * - true: enables public network access.
   * - false: disables public network access. If you select false, you cannot access the API server of the cluster over the Internet.
   * Default value: false.
   * 
   * @example
   * true
   */
  publicAccess?: boolean;
  /**
   * @remarks
   * The CIDR block for Services. Valid ranges include 10.0.0.0/16 to 10.0.0.0/24, 172.16.0.0/16 to 172.31.0.0/24, and 192.168.0.0/16 to 192.168.0.0/24. The CIDR block cannot overlap with the VPC CIDR block 10.1.0.0/21 or the CIDR blocks used by existing Kubernetes clusters in the VPC. The CIDR block cannot be modified after the cluster is created.
   * 
   * @example
   * 172.19.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) used by the cluster.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches where the cluster nodes are deployed. The ENS region of the vSwitches must be the same as the ENS region specified by the EnsRegionId parameter.
   * 
   * @example
   * ["vsw-xxx", "vsw-yyy"]
   */
  vswitchIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      containerCidr: 'ContainerCidr',
      controlPlaneConfigShrink: 'ControlPlaneConfig',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      kubernetesVersion: 'KubernetesVersion',
      loadBalancerId: 'LoadBalancerId',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
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
      containerCidr: 'string',
      controlPlaneConfigShrink: 'string',
      ensRegionId: 'string',
      isp: 'string',
      kubernetesVersion: 'string',
      loadBalancerId: 'string',
      name: 'string',
      natGatewayId: 'string',
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


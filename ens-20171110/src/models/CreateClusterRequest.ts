// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestControlPlaneConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the virtual machine image for the control plane.
   * 
   * @example
   * m-5ul335umat4e2y9ynwi84p3f9
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type of the node.
   * 
   * @example
   * ens.esk.sn1.medium
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The logon password for the control plane machines of the cluster.
   * 
   * @example
   * ThisIsAPassword
   */
  loginPassword?: string;
  /**
   * @remarks
   * The edge zone service port range.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The name of the runtime for the control plane nodes.
   * 
   * @example
   * containerd
   */
  runtime?: string;
  /**
   * @remarks
   * The number of control plane nodes. Valid values: 3 and 5.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * The category of the system cloud disk for the node. Valid values: local_ssd, cloud_ssd, cloud_efficiency, and local_hdd.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system cloud disk for the node.
   * 
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
  controlPlaneConfig?: CreateClusterRequestControlPlaneConfig;
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
  podVswitchIds?: string[];
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
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      containerCidr: 'ContainerCidr',
      controlPlaneConfig: 'ControlPlaneConfig',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      kubernetesVersion: 'KubernetesVersion',
      loadBalancerId: 'LoadBalancerId',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
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
      containerCidr: 'string',
      controlPlaneConfig: CreateClusterRequestControlPlaneConfig,
      ensRegionId: 'string',
      isp: 'string',
      kubernetesVersion: 'string',
      loadBalancerId: 'string',
      name: 'string',
      natGatewayId: 'string',
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


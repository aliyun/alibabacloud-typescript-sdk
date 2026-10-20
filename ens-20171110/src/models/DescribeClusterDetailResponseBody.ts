// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterDetailResponseBodyControlPlaneConfig extends $dara.Model {
  /**
   * @remarks
   * The runtime type.
   * 
   * @example
   * containerd
   */
  containerRuntime?: string;
  /**
   * @remarks
   * The ID of the control plane virtual machine image.
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
   * The node service port range.
   * 
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The number of control plane nodes.
   * 
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * The system cloud disk category of the node.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The system cloud disk size of the node.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      containerRuntime: 'ContainerRuntime',
      imageId: 'ImageId',
      instanceSpec: 'InstanceSpec',
      nodePortRange: 'NodePortRange',
      size: 'Size',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerRuntime: 'string',
      imageId: 'string',
      instanceSpec: 'string',
      nodePortRange: 'string',
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

export class DescribeClusterDetailResponseBodyControlPlaneMetaMasterInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-573utia8wbecrbgsm6o8fx132
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IP address.
   * 
   * @example
   * 10.10.0.2
   */
  ip?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * i-573utia8wbecrbgsm6o8fx132
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyControlPlaneMetaMasterUrl extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the API server.
   * 
   * @example
   * https://10.0.0.1:6443
   */
  privateUrl?: string;
  /**
   * @remarks
   * The public address of the API server.
   * 
   * @example
   * https://0.0.0.0:6443
   */
  publicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      privateUrl: 'PrivateUrl',
      publicUrl: 'PublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateUrl: 'string',
      publicUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyControlPlaneMeta extends $dara.Model {
  /**
   * @remarks
   * The master node information.
   */
  masterInstances?: DescribeClusterDetailResponseBodyControlPlaneMetaMasterInstances[];
  /**
   * @remarks
   * The API server address.
   */
  masterUrl?: DescribeClusterDetailResponseBodyControlPlaneMetaMasterUrl;
  static names(): { [key: string]: string } {
    return {
      masterInstances: 'MasterInstances',
      masterUrl: 'MasterUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterInstances: { 'type': 'array', 'itemType': DescribeClusterDetailResponseBodyControlPlaneMetaMasterInstances },
      masterUrl: DescribeClusterDetailResponseBodyControlPlaneMetaMasterUrl,
    };
  }

  validate() {
    if(Array.isArray(this.masterInstances)) {
      $dara.Model.validateArray(this.masterInstances);
    }
    if(this.masterUrl && typeof (this.masterUrl as any).validate === 'function') {
      (this.masterUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyNodeCount extends $dara.Model {
  /**
   * @remarks
   * The number of ready nodes.
   * 
   * @example
   * 3
   */
  ready?: number;
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      ready: 'Ready',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ready: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyPodStatus extends $dara.Model {
  /**
   * @remarks
   * The number of pods in the Running state.
   * 
   * @example
   * 10
   */
  running?: number;
  /**
   * @remarks
   * The total number of pods.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      running: 'Running',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      running: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1574790082031102
   */
  aliUid?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * eck-11111111
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster kubeconfig.
   * 
   * @example
   * apiVersion: v1
   * clusters:
   * - cluster:
   *     certificate-authority-data: x
   *     server: https://111.111.111.111:6443
   *   name: kubernetes
   * contexts:
   * - context:
   *     cluster: kubernetes
   *     user: user
   *   name: eck-xxxxx
   * current-context: eck-xxxx
   * kind: Config
   * preferences: {}
   * users:
   * - name: user
   *   user:
   *     client-certificate-data: x
   *     client-key-data: x
   */
  config?: any;
  /**
   * @remarks
   * The pod CIDR block.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The control plane configuration.
   */
  controlPlaneConfig?: DescribeClusterDetailResponseBodyControlPlaneConfig;
  /**
   * @remarks
   * The control plane metadata.
   */
  controlPlaneMeta?: DescribeClusterDetailResponseBodyControlPlaneMeta;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2025-04-07T09:57:26+08:00
   */
  created?: string;
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * @example
   * cn-fuzhou-23
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ISP information.
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * The authentication token for joining the cluster.
   * 
   * @example
   * xxxx.yyy
   */
  joinToken?: string;
  /**
   * @remarks
   * The cluster version, which aligns with the Kubernetes community baseline version. Select the latest version. If not specified, the latest version is used by default.
   * 
   * @example
   * 1.32.1.aliyunedge.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB) instance for the API server.
   * 
   * @example
   * lb-5snthcyu1x10g7tywj7iu****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * your-cluster-name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * nat-5tawjw5j7sgd2deujxuk0****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The number of nodes in the cluster.
   */
  nodeCount?: DescribeClusterDetailResponseBodyNodeCount;
  /**
   * @remarks
   * The pod status information of the cluster.
   */
  podStatus?: DescribeClusterDetailResponseBodyPodStatus;
  /**
   * @remarks
   * The pod vSwitch IDs.
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * @example
   * true
   */
  publicAccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The service CIDR block.
   * 
   * @example
   * 172.19.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * - **initial**: Creating.
   * - **failed**: Creation failed.
   * - **running**: Running.
   * - **deleting**: Releasing.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The VPC used by the cluster.
   * 
   * @example
   * n-xxxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch IDs where the cluster nodes reside.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      clusterId: 'ClusterId',
      config: 'Config',
      containerCidr: 'ContainerCidr',
      controlPlaneConfig: 'ControlPlaneConfig',
      controlPlaneMeta: 'ControlPlaneMeta',
      created: 'Created',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      joinToken: 'JoinToken',
      kubernetesVersion: 'KubernetesVersion',
      loadBalancerId: 'LoadBalancerId',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      nodeCount: 'NodeCount',
      podStatus: 'PodStatus',
      podVswitchIds: 'PodVswitchIds',
      publicAccess: 'PublicAccess',
      requestId: 'RequestId',
      serviceCidr: 'ServiceCidr',
      state: 'State',
      vpcId: 'VpcId',
      vswitchIds: 'VswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      clusterId: 'string',
      config: 'any',
      containerCidr: 'string',
      controlPlaneConfig: DescribeClusterDetailResponseBodyControlPlaneConfig,
      controlPlaneMeta: DescribeClusterDetailResponseBodyControlPlaneMeta,
      created: 'string',
      ensRegionId: 'string',
      isp: 'string',
      joinToken: 'string',
      kubernetesVersion: 'string',
      loadBalancerId: 'string',
      name: 'string',
      natGatewayId: 'string',
      nodeCount: DescribeClusterDetailResponseBodyNodeCount,
      podStatus: DescribeClusterDetailResponseBodyPodStatus,
      podVswitchIds: { 'type': 'array', 'itemType': 'string' },
      publicAccess: 'boolean',
      requestId: 'string',
      serviceCidr: 'string',
      state: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.controlPlaneConfig && typeof (this.controlPlaneConfig as any).validate === 'function') {
      (this.controlPlaneConfig as any).validate();
    }
    if(this.controlPlaneMeta && typeof (this.controlPlaneMeta as any).validate === 'function') {
      (this.controlPlaneMeta as any).validate();
    }
    if(this.nodeCount && typeof (this.nodeCount as any).validate === 'function') {
      (this.nodeCount as any).validate();
    }
    if(this.podStatus && typeof (this.podStatus as any).validate === 'function') {
      (this.podStatus as any).validate();
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


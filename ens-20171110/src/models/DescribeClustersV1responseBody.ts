// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersV1ResponseBodyClustersControlPlaneConfig extends $dara.Model {
  /**
   * @remarks
   * The runtime type used by the nodes.
   * 
   * @example
   * containerd
   */
  containerRuntime?: string;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * m-68be8cb9f71fhyvjekxa23qsf
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ens.sn1.medium
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The node port range.
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
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The system disk type of the node. Valid value: local_ssd, cloud_ssd, cloud_efficiency, and local_hdd.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GB.
   * 
   * @example
   * 100
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

export class DescribeClustersV1ResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The user IDs.
   * 
   * @example
   * 1375383353108460
   */
  aliUid?: string;
  /**
   * @remarks
   * The cluster instance ID.
   * 
   * @example
   * eck-xxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The kubeconfig file of the cluster.
   * 
   * @example
   * {
   *         "kind": "Config",
   *         "apiVersion": "v1",
   *         "preferences": {},
   *         "clusters": [
   *           {
   *             "name": "kubernetes",
   *             "cluster": {
   *               "server": "https://000.000.000.000:6443",
   *               "certificate-authority-data": ""
   *             }
   *           }
   *         ],
   *         "users": [
   *           {
   *             "name": "kubernetes-admin",
   *             "user": {
   *               "client-certificate-data": "",
   *               "client-key-data": ""
   *             }
   *           }
   *         ],
   *         "contexts": [
   *           {
   *             "name": "kubernetes-admin@kubernetes",
   *             "context": {
   *               "cluster": "kubernetes",
   *               "user": "kubernetes-admin"
   *             }
   *           }
   *         ],
   *         "current-context": "kubernetes-admin@kubernetes"
   *       }
   */
  config?: any;
  /**
   * @remarks
   * The pod CIDR block. You can specify 10.0.0.0/8, 172.16-31.0.0/12-16, 192.168.0.0/16, or their subnets as the pod CIDR block. The pod CIDR block cannot overlap with the CIDR block of the VPC in which the cluster is deployed and the CIDR blocks of existing clusters in the VPC. You cannot modify the pod CIDR block after you create the cluster.
   * 
   * @example
   * 10.0.0.0/8
   */
  containerCidr?: string;
  /**
   * @remarks
   * Control plane configuration.
   */
  controlPlaneConfig?: DescribeClustersV1ResponseBodyClustersControlPlaneConfig;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-hangzhou-55
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The cluster access authentication token.
   * 
   * @example
   * xxxxxxxxxx.yyyyyyy
   */
  joinToken?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster. The Kubernetes versions supported are the same as the Kubernetes versions supported by open source Kubernetes. We recommend that you specify the latest Kubernetes version. If you do not specify this parameter, the latest Kubernetes version is used.
   * 
   * @example
   * 1.31.9-aliyunedge.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The ID of the ALB instance.
   * 
   * @example
   * lb-58dngw0fyimzzvwljfec7hy0z
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the monitoring object.
   * 
   * @example
   * test-eck-name
   */
  name?: string;
  /**
   * @remarks
   * For each vSwitch that allocates IP addresses to worker nodes, you must select a vSwitch in the same zone to allocate IP addresses to pods. If you do not specify this parameter, vswitch_ids is used by default.
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable Internet access for the application. You can use an elastic IP address (EIP) to expose the API server. This way, you can access the cluster over the Internet. Valid values: true: enables Internet access for the application. false: disables Internet access to the API server of the cluster. If you set the value to false, the API server cannot be accessed over the Internet.
   * 
   * @example
   * true
   */
  publicAccess?: boolean;
  /**
   * @remarks
   * Valid values: 10.0.0.0/16-24, 172.16-31.0.0/16-24, and 192.168.0.0/16-24. The Service CIDR block cannot overlap with the VPC CIDR block 10.1.0.0/21 or the CIDR blocks of existing ACK clusters in the VPC. You cannot change the Service CIDR block after you create the cluster.
   * 
   * @example
   * 192.168.0.0/16
   */
  serviceCidr?: string;
  state?: string;
  /**
   * @remarks
   * The VPC of the cluster.
   * 
   * @example
   * n-5wsgr3xeolb2ist303wp3cscp
   */
  vpcId?: string;
  /**
   * @remarks
   * the id of the vswitch to which the cluster node belongs. The ENS region of the vswitch_ids service must be the same as that of the ens_region_id.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      clusterId: 'ClusterId',
      config: 'Config',
      containerCidr: 'ContainerCidr',
      controlPlaneConfig: 'ControlPlaneConfig',
      ensRegionId: 'EnsRegionId',
      joinToken: 'JoinToken',
      kubernetesVersion: 'KubernetesVersion',
      loadBalancerId: 'LoadBalancerId',
      name: 'Name',
      podVswitchIds: 'PodVswitchIds',
      publicAccess: 'PublicAccess',
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
      controlPlaneConfig: DescribeClustersV1ResponseBodyClustersControlPlaneConfig,
      ensRegionId: 'string',
      joinToken: 'string',
      kubernetesVersion: 'string',
      loadBalancerId: 'string',
      name: 'string',
      podVswitchIds: { 'type': 'array', 'itemType': 'string' },
      publicAccess: 'boolean',
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

export class DescribeClustersV1ResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about clusters.
   */
  clusters?: DescribeClustersV1ResponseBodyClusters[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersV1ResponseBodyClusters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


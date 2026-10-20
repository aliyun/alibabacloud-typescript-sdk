// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersV1ResponseBodyClustersControlPlaneConfig extends $dara.Model {
  /**
   * @remarks
   * The type of the container runtime.
   * 
   * @example
   * containerd
   */
  containerRuntime?: string;
  /**
   * @remarks
   * The ID of the image.
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
   * The edge zone service port range.
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
   * The category of the system cloud disk for nodes. Valid values: local_ssd, cloud_ssd, cloud_efficiency, and local_hdd.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GB.
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
   * The user ID.
   * 
   * @example
   * 1375383353108460
   */
  aliUid?: string;
  /**
   * @remarks
   * The instance ID of the cluster.
   * 
   * @example
   * eck-xxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The kubeconfig of the cluster.
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
   * The CIDR block for pods. It must be a valid private CIDR block, specifically one of the following CIDR blocks or their subnets: 10.0.0.0/8, 172.16.0.0/12 to 172.31.0.0/16, and 192.168.0.0/16. The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks used by existing Kubernetes clusters in the VPC. The CIDR block cannot be modified after the cluster is created.
   * 
   * @example
   * 10.0.0.0/8
   */
  containerCidr?: string;
  /**
   * @remarks
   * The configuration of the control plane.
   */
  controlPlaneConfig?: DescribeClustersV1ResponseBodyClustersControlPlaneConfig;
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
   * cn-hangzhou-55
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
   * xxxxxxxxxx.yyyyyyy
   */
  joinToken?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster, which aligns with the Kubernetes community baseline version. Select the latest version. If this parameter is not specified, the latest version is used by default.
   * 
   * @example
   * 1.31.9-aliyunedge.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The load balancing instance ID.
   * 
   * @example
   * lb-58dngw0fyimzzvwljfec7hy0z
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test-eck-name
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the vSwitches for pods. Each pod vSwitch corresponds to a worker node vSwitch. The pod vSwitch and the worker node vSwitch must be in the same zone. If this parameter is not specified, the value of vswitch_ids is used by default.
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable public network access. An elastic IP address (EIP) is used to expose the API server to enable public access to the cluster. Valid values:
   * - true: enables public network access.
   * - false: disables public network access. If you set this parameter to false, you cannot access the API server of the cluster over the Internet.
   * 
   * @example
   * true
   */
  publicAccess?: boolean;
  /**
   * @remarks
   * The CIDR block for services. Valid CIDR blocks: 10.0.0.0/16 to 10.0.0.0/24, 172.16.0.0/16 to 172.31.0.0/24, and 192.168.0.0/16 to 192.168.0.0/24. The CIDR block cannot overlap with the VPC CIDR block 10.1.0.0/21 or the CIDR blocks used by existing Kubernetes clusters in the VPC. The CIDR block cannot be modified after the cluster is created.
   * 
   * @example
   * 192.168.0.0/16
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The status of the cluster.
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
   * n-5wsgr3xeolb2ist303wp3cscp
   */
  vpcId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches where the cluster nodes reside. The ENS region of the vSwitches must be the same as the value of ens_region_id.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      clusterId: 'ClusterId',
      config: 'Config',
      containerCidr: 'ContainerCidr',
      controlPlaneConfig: 'ControlPlaneConfig',
      created: 'Created',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
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
      created: 'string',
      ensRegionId: 'string',
      isp: 'string',
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
   * The list of clusters.
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


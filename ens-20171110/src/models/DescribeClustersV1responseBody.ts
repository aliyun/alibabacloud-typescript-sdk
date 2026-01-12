// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersV1ResponseBodyClustersControlPlaneConfig extends $dara.Model {
  /**
   * @example
   * containerd
   */
  containerRuntime?: string;
  /**
   * @example
   * m-68be8cb9f71fhyvjekxa23qsf
   */
  imageId?: string;
  /**
   * @example
   * ens.sn1.medium
   */
  instanceSpec?: string;
  /**
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  /**
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
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
   * @example
   * 1375383353108460
   */
  aliUid?: string;
  /**
   * @example
   * eck-xxxxxxx
   */
  clusterId?: string;
  /**
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
   * @example
   * 10.0.0.0/8
   */
  containerCidr?: string;
  controlPlaneConfig?: DescribeClustersV1ResponseBodyClustersControlPlaneConfig;
  /**
   * @example
   * cn-hangzhou-55
   */
  ensRegionId?: string;
  /**
   * @example
   * xxxxxxxxxx.yyyyyyy
   */
  joinToken?: string;
  /**
   * @example
   * 1.31.9-aliyunedge.1
   */
  kubernetesVersion?: string;
  /**
   * @example
   * lb-58dngw0fyimzzvwljfec7hy0z
   */
  loadBalancerId?: string;
  /**
   * @example
   * test-eck-name
   */
  name?: string;
  podVswitchIds?: string[];
  /**
   * @example
   * true
   */
  publicAccess?: boolean;
  /**
   * @example
   * 192.168.0.0/16
   */
  serviceCidr?: string;
  /**
   * @example
   * n-5wsgr3xeolb2ist303wp3cscp
   */
  vpcId?: string;
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


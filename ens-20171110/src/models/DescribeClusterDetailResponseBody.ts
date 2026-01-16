// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterDetailResponseBodyControlPlaneConfig extends $dara.Model {
  /**
   * @example
   * containerd
   */
  containerRuntime?: string;
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
  /**
   * @example
   * 30000-32767
   */
  nodePortRange?: string;
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

export class DescribeClusterDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 1574790082031102
   */
  aliUid?: string;
  /**
   * @example
   * eck-11111111
   */
  clusterId?: string;
  /**
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
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  controlPlaneConfig?: DescribeClusterDetailResponseBodyControlPlaneConfig;
  /**
   * @example
   * cn-fuzhou-23
   */
  ensRegionId?: string;
  /**
   * @example
   * xxxx.yyy
   */
  joinToken?: string;
  /**
   * @example
   * 1.32.1.aliyunedge.1
   */
  kubernetesVersion?: string;
  /**
   * @example
   * lb-5snthcyu1x10g7tywj7iu****
   */
  loadBalancerId?: string;
  /**
   * @example
   * your-cluster-name
   */
  name?: string;
  podVswitchIds?: string[];
  /**
   * @example
   * true
   */
  publicAccess?: boolean;
  /**
   * @remarks
   * Id of the request。
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @example
   * 172.19.0.0/20
   */
  serviceCidr?: string;
  /**
   * @example
   * running
   */
  state?: string;
  /**
   * @example
   * n-xxxxxxxxx
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
      ensRegionId: 'string',
      joinToken: 'string',
      kubernetesVersion: 'string',
      loadBalancerId: 'string',
      name: 'string',
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


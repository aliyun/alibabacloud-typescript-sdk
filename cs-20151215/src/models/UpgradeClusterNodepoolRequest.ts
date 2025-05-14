// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpgradeClusterNodepoolRequestRollingPolicy } from "./UpgradeClusterNodepoolRequestRollingPolicy";


export class UpgradeClusterNodepoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OS image used by the nodes.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The Kubernetes version used by the nodes. You can call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation and get the Kubernetes version of the current cluster in the current_version field.
   * 
   * @example
   * 1.22.15-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The nodes you want to update. If you do not specify this parameter, all nodes in the node pool are updated by default.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The rolling update configuration.
   */
  rollingPolicy?: UpgradeClusterNodepoolRequestRollingPolicy;
  /**
   * @remarks
   * The runtime type. You can call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation and get the runtime information in the runtime field.
   * 
   * @example
   * containerd
   */
  runtimeType?: string;
  /**
   * @remarks
   * The version of the container runtime used by the nodes. You can call the [DescribeKubernetesVersionMetadata](https://help.aliyun.com/document_detail/2667899.html) operation and get the runtime version in the runtime field.
   * 
   * @example
   * 1.5.10
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * Specifies whether to perform the update by replacing the system disk. Valid values:
   * 
   * *   true: replaces the system disk.
   * *   false: does not replace the system disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  useReplace?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      kubernetesVersion: 'kubernetes_version',
      nodeNames: 'node_names',
      rollingPolicy: 'rolling_policy',
      runtimeType: 'runtime_type',
      runtimeVersion: 'runtime_version',
      useReplace: 'use_replace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      kubernetesVersion: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      rollingPolicy: UpgradeClusterNodepoolRequestRollingPolicy,
      runtimeType: 'string',
      runtimeVersion: 'string',
      useReplace: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    if(this.rollingPolicy && typeof (this.rollingPolicy as any).validate === 'function') {
      (this.rollingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


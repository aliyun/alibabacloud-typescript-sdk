// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolResponseBodyNodepoolKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * The script to be executed after the instance is created and before it is added to the cluster. The content must be Base64-encoded.
   * 
   * @example
   * ZWNobyBvawo=
   */
  preUserData?: string;
  /**
   * @remarks
   * The script to be executed after the instance is created and added to the cluster. The content must be Base64-encoded.
   * 
   * @example
   * ZWNobyBvawo=
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      preUserData: 'PreUserData',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preUserData: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolResponseBodyNodepoolNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The ENS region ID of the cluster.
   * 
   * @example
   * cn-guiyang-14
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np1176939548ac49e59febe82dcbf1ad56
   */
  nodepoolId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      nodepoolId: 'NodepoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      name: 'string',
      nodepoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolResponseBodyNodepoolScalingGroupDataDisks extends $dara.Model {
  /**
   * @remarks
   * The disk category.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GB.
   * 
   * @example
   * 80
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolResponseBodyNodepoolScalingGroup extends $dara.Model {
  /**
   * @remarks
   * The data cloud disk information of the nodes.
   */
  dataDisks?: CreateClusterNodePoolResponseBodyNodepoolScalingGroupDataDisks[];
  /**
   * @remarks
   * The image ID of the control plane virtual machine.
   * 
   * @example
   * m-67bdk1kpu1ylmt7k33h5dbiov
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The list of instance types for the nodes in the node pool.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * key-pair-name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The logon password of the instance.
   * 
   * @example
   * **********
   */
  password?: string;
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
   * The size of the system cloud disk. Unit: GB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The IDs of the vSwitches where the cluster nodes reside.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dataDisks: 'DataDisks',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceTypes: 'InstanceTypes',
      keyPairName: 'KeyPairName',
      password: 'Password',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      vswitchIds: 'VswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisks: { 'type': 'array', 'itemType': CreateClusterNodePoolResponseBodyNodepoolScalingGroupDataDisks },
      imageId: 'string',
      instanceChargeType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      password: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
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

export class CreateClusterNodePoolResponseBodyNodepoolStatus extends $dara.Model {
  /**
   * @remarks
   * The expected number of instances.
   * 
   * @example
   * 10
   */
  desiredNodes?: number;
  /**
   * @remarks
   * The nodes that failed to be created in the node pool.
   * 
   * @example
   * 0
   */
  failedNodes?: number;
  /**
   * @remarks
   * The number of instances that are being created.
   * 
   * @example
   * 0
   */
  initialNodes?: number;
  /**
   * @remarks
   * The number of instances that are being deleted.
   * 
   * @example
   * 0
   */
  removingNodes?: number;
  /**
   * @remarks
   * The number of instances that are in use.
   * 
   * @example
   * 10
   */
  servingNodes?: number;
  /**
   * @remarks
   * The state of the node pool. Valid values:
   * 
   * - active: The desired state is reached.
   * - scaling: The node pool is scaling out.
   * - removing_nodes: The node pool is scaling in.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The total number of instances, including instances that are being created, in use, and being deleted.
   * 
   * @example
   * 10
   */
  totalNodes?: number;
  static names(): { [key: string]: string } {
    return {
      desiredNodes: 'DesiredNodes',
      failedNodes: 'FailedNodes',
      initialNodes: 'InitialNodes',
      removingNodes: 'RemovingNodes',
      servingNodes: 'ServingNodes',
      state: 'State',
      totalNodes: 'TotalNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredNodes: 'number',
      failedNodes: 'number',
      initialNodes: 'number',
      removingNodes: 'number',
      servingNodes: 'number',
      state: 'string',
      totalNodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolResponseBodyNodepool extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * eck-d2666c5f
   */
  clusterId?: string;
  /**
   * @remarks
   * The Kubernetes-related configurations.
   */
  kubernetesConfig?: CreateClusterNodePoolResponseBodyNodepoolKubernetesConfig;
  /**
   * @remarks
   * The node pool information.
   */
  nodepoolInfo?: CreateClusterNodePoolResponseBodyNodepoolNodepoolInfo;
  /**
   * @remarks
   * The ID of the resource group to which the newly created scaling group belongs. You can assign the newly created scaling group to a specified resource group. If you do not specify this parameter, the scaling group is assigned to the default resource group.
   */
  scalingGroup?: CreateClusterNodePoolResponseBodyNodepoolScalingGroup;
  /**
   * @remarks
   * The status information of the node pool.
   */
  status?: CreateClusterNodePoolResponseBodyNodepoolStatus;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      kubernetesConfig: 'KubernetesConfig',
      nodepoolInfo: 'NodepoolInfo',
      scalingGroup: 'ScalingGroup',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      kubernetesConfig: CreateClusterNodePoolResponseBodyNodepoolKubernetesConfig,
      nodepoolInfo: CreateClusterNodePoolResponseBodyNodepoolNodepoolInfo,
      scalingGroup: CreateClusterNodePoolResponseBodyNodepoolScalingGroup,
      status: CreateClusterNodePoolResponseBodyNodepoolStatus,
    };
  }

  validate() {
    if(this.kubernetesConfig && typeof (this.kubernetesConfig as any).validate === 'function') {
      (this.kubernetesConfig as any).validate();
    }
    if(this.nodepoolInfo && typeof (this.nodepoolInfo as any).validate === 'function') {
      (this.nodepoolInfo as any).validate();
    }
    if(this.scalingGroup && typeof (this.scalingGroup as any).validate === 'function') {
      (this.scalingGroup as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node pool configurations.
   */
  nodepool?: CreateClusterNodePoolResponseBodyNodepool;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodepool: 'Nodepool',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepool: CreateClusterNodePoolResponseBodyNodepool,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nodepool && typeof (this.nodepool as any).validate === 'function') {
      (this.nodepool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


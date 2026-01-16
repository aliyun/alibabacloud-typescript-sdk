// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolResponseBodyNodepoolKubernetesConfig extends $dara.Model {
  /**
   * @example
   * ZWNobyBvawo=
   */
  preUserData?: string;
  /**
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
   * @example
   * cn-guiyang-14
   */
  ensRegionId?: string;
  /**
   * @example
   * test1
   */
  name?: string;
  /**
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
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
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
  dataDisks?: CreateClusterNodePoolResponseBodyNodepoolScalingGroupDataDisks[];
  /**
   * @example
   * m-67bdk1kpu1ylmt7k33h5dbiov
   */
  imageId?: string;
  /**
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  instanceTypes?: string[];
  /**
   * @example
   * key-pair-name
   */
  keyPairName?: string;
  /**
   * @example
   * **********
   */
  password?: string;
  /**
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @example
   * 80
   */
  systemDiskSize?: number;
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
   * @example
   * 10
   */
  desiredNodes?: number;
  /**
   * @example
   * 0
   */
  initialNodes?: number;
  /**
   * @example
   * 0
   */
  removingNodes?: number;
  /**
   * @example
   * 10
   */
  servingNodes?: number;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * 10
   */
  totalNodes?: number;
  static names(): { [key: string]: string } {
    return {
      desiredNodes: 'DesiredNodes',
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
   * @example
   * eck-d2666c5f
   */
  clusterId?: string;
  kubernetesConfig?: CreateClusterNodePoolResponseBodyNodepoolKubernetesConfig;
  nodepoolInfo?: CreateClusterNodePoolResponseBodyNodepoolNodepoolInfo;
  scalingGroup?: CreateClusterNodePoolResponseBodyNodepoolScalingGroup;
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
  nodepool?: CreateClusterNodePoolResponseBodyNodepool;
  /**
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


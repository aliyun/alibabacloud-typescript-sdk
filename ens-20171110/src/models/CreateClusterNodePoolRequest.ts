// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolRequestKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * The script to be executed after the machine is created and before it is added to the cluster. The content must be Base64-encoded.
   * 
   * @example
   * ZWNobyBvawo=
   */
  preUserData?: string;
  /**
   * @remarks
   * The script to be executed after the machine is created and added to the cluster. The content must be Base64-encoded.
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

export class CreateClusterNodePoolRequestNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the node pool.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateClusterNodePoolRequestScalingGroupDataDisks extends $dara.Model {
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
   * The size of the data cloud disk. Unit: GB. Minimum value: 20. The value must be a multiple of 10.
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

export class CreateClusterNodePoolRequestScalingGroup extends $dara.Model {
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GB.
   */
  dataDisks?: CreateClusterNodePoolRequestScalingGroupDataDisks[];
  /**
   * @remarks
   * The expected number of instances.
   * 
   * @example
   * 3
   */
  desiredSize?: number;
  /**
   * @remarks
   * The image ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * m-6734fzvcwcv2o8jj201cpa7ox
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The list of instance types for the nodes in the node pool.
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The key pair of the instance. This parameter and Password are mutually exclusive.
   * 
   * @example
   * key-pair-name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The password used when creating instances in the node pool. This parameter and KeyPairName are mutually exclusive.
   * 
   * @example
   * some-test-password
   */
  password?: string;
  /**
   * @remarks
   * The category of the system cloud disk. Valid values: local_ssd, local_hdd, cloud_efficiency, and cloud_ssd.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GB. Minimum value: 20. The value must be a multiple of 10.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The vSwitches used by the instances.
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dataDisks: 'DataDisks',
      desiredSize: 'DesiredSize',
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
      dataDisks: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestScalingGroupDataDisks },
      desiredSize: 'number',
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

export class CreateClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster-related configurations.
   */
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The node pool configurations.
   * 
   * This parameter is required.
   */
  nodepoolInfo?: CreateClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The scaling group configurations.
   * 
   * This parameter is required.
   */
  scalingGroup?: CreateClusterNodePoolRequestScalingGroup;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      kubernetesConfig: 'KubernetesConfig',
      nodepoolInfo: 'NodepoolInfo',
      scalingGroup: 'ScalingGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      kubernetesConfig: CreateClusterNodePoolRequestKubernetesConfig,
      nodepoolInfo: CreateClusterNodePoolRequestNodepoolInfo,
      scalingGroup: CreateClusterNodePoolRequestScalingGroup,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


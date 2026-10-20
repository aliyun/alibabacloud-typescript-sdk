// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterNodePoolRequestKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * The script to be executed after the instance is created and before it joins the cluster. The content must be Base64-encoded.
   * 
   * @example
   * ZWNobyBvawo=
   */
  preUserData?: string;
  /**
   * @remarks
   * The script to be executed after the instance is created and after it joins the cluster. The content must be Base64-encoded.
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

export class ModifyClusterNodePoolRequestNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the node pool.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the node pool.
   * 
   * This parameter is required.
   * 
   * @example
   * np68mi5y1dd748ky37ojo2kqdrz
   */
  nodepoolId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nodepoolId: 'NodepoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyClusterNodePoolRequestScalingGroupDataDisks extends $dara.Model {
  /**
   * @remarks
   * The category of the data cloud disk.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The size of the data cloud disk.
   * 
   * @example
   * 40
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

export class ModifyClusterNodePoolRequestScalingGroup extends $dara.Model {
  /**
   * @remarks
   * The data cloud disk information.
   */
  dataDisks?: ModifyClusterNodePoolRequestScalingGroupDataDisks[];
  /**
   * @remarks
   * The ID of the instance image.
   * 
   * @example
   * m-68bysm5a8gkm7oik7ngacf0in
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
   * The instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The name of the instance key pair. This parameter and Password are mutually exclusive.
   * 
   * @example
   * tf-testAcc
   */
  keyPairName?: string;
  /**
   * @remarks
   * The instance password. This parameter and key_pair_name are mutually exclusive.
   * 
   * @example
   * @AN5Ejx1YyzzK
   */
  password?: string;
  /**
   * @remarks
   * The category of the system cloud disk.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system cloud disk.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The vSwitches used by the instances.
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
      dataDisks: { 'type': 'array', 'itemType': ModifyClusterNodePoolRequestScalingGroupDataDisks },
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

export class ModifyClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * Only ECK cluster IDs with the eck- prefix are supported. You can obtain the ID by calling the DescribeClustersV1 operation. Serverless cluster IDs returned by the DescribeCluster operation are not supported. The cluster must be in the running state. After creation, it usually takes 10 to 20 minutes to complete initialization.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The Kubernetes configuration.
   */
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The node pool information.
   * 
   * This parameter is required.
   */
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The scaling group configuration.
   */
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
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
      kubernetesConfig: ModifyClusterNodePoolRequestKubernetesConfig,
      nodepoolInfo: ModifyClusterNodePoolRequestNodepoolInfo,
      scalingGroup: ModifyClusterNodePoolRequestScalingGroup,
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


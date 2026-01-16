// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodePoolsResponseBodyNodePoolsKubernetesConfig extends $dara.Model {
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

export class DescribeClusterNodePoolsResponseBodyNodePoolsNodepoolInfo extends $dara.Model {
  /**
   * @example
   * cn-fuzhou-23
   */
  ensRegionId?: string;
  /**
   * @example
   * eck-node-pool-1
   */
  name?: string;
  /**
   * @example
   * np68mi5y1dd748ky37ojo2kqdrz
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

export class DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroupDataDisks extends $dara.Model {
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

export class DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroup extends $dara.Model {
  dataDisks?: DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroupDataDisks[];
  /**
   * @example
   * m-673f5z4h69ibwtallg6zmcaxr
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
   * ************
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
      dataDisks: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroupDataDisks },
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

export class DescribeClusterNodePoolsResponseBodyNodePoolsStatus extends $dara.Model {
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

export class DescribeClusterNodePoolsResponseBodyNodePools extends $dara.Model {
  /**
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  kubernetesConfig?: DescribeClusterNodePoolsResponseBodyNodePoolsKubernetesConfig;
  nodepoolInfo?: DescribeClusterNodePoolsResponseBodyNodePoolsNodepoolInfo;
  scalingGroup?: DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroup;
  status?: DescribeClusterNodePoolsResponseBodyNodePoolsStatus;
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
      kubernetesConfig: DescribeClusterNodePoolsResponseBodyNodePoolsKubernetesConfig,
      nodepoolInfo: DescribeClusterNodePoolsResponseBodyNodePoolsNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroup,
      status: DescribeClusterNodePoolsResponseBodyNodePoolsStatus,
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

export class DescribeClusterNodePoolsResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBody extends $dara.Model {
  nodePools?: DescribeClusterNodePoolsResponseBodyNodePools[];
  page?: DescribeClusterNodePoolsResponseBodyPage;
  /**
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodePools: 'NodePools',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodePools: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodePools },
      page: DescribeClusterNodePoolsResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodePools)) {
      $dara.Model.validateArray(this.nodePools);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodePoolsResponseBodyNodePoolsKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * The script to execute after the instance is created and before it is added to the cluster. The content must be Base64-encoded.
   * 
   * @example
   * ZWNobyBvawo=
   */
  preUserData?: string;
  /**
   * @remarks
   * The script to execute after the instance is created and added to the cluster. The content must be Base64-encoded.
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

export class DescribeClusterNodePoolsResponseBodyNodePoolsNodepoolInfo extends $dara.Model {
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * @example
   * cn-fuzhou-23
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the node pool.
   * 
   * @example
   * eck-node-pool-1
   */
  name?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
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
   * @remarks
   * The cloud disk category.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The cloud disk size. Unit: GB.
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

export class DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroup extends $dara.Model {
  /**
   * @remarks
   * The list of data cloud disks. The parameter limits are the same as those of the system cloud disk.
   */
  dataDisks?: DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroupDataDisks[];
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-673f5z4h69ibwtallg6zmcaxr
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
   * The list of instance types.
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
   * The password of the instance.
   * 
   * @example
   * ************
   */
  password?: string;
  /**
   * @remarks
   * The system cloud disk category of the node. Valid values: local_ssd, cloud_ssd, cloud_efficiency, and local_hdd.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system cloud disk for the node.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The vSwitch ID.
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
   * @remarks
   * The expected number of instances.
   * 
   * @example
   * 10
   */
  desiredNodes?: number;
  /**
   * @remarks
   * The number of nodes that failed to be created in the node pool.
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
   * The number of instances in use.
   * 
   * @example
   * 10
   */
  servingNodes?: number;
  /**
   * @remarks
   * The state of the node pool.
   * 
   * - active: The desired state is reached.
   * - scaling: Scaling out.
   * - removing_nodes: Scaling in.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The total number of instances, including those that are being created, in use, and being deleted.
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

export class DescribeClusterNodePoolsResponseBodyNodePools extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-01T00:00:00+08:00
   */
  created?: string;
  /**
   * @remarks
   * The Kubernetes-related configurations.
   */
  kubernetesConfig?: DescribeClusterNodePoolsResponseBodyNodePoolsKubernetesConfig;
  /**
   * @remarks
   * The node pool information.
   */
  nodepoolInfo?: DescribeClusterNodePoolsResponseBodyNodePoolsNodepoolInfo;
  /**
   * @remarks
   * The scaling group.
   */
  scalingGroup?: DescribeClusterNodePoolsResponseBodyNodePoolsScalingGroup;
  /**
   * @remarks
   * The status of the node pool.
   */
  status?: DescribeClusterNodePoolsResponseBodyNodePoolsStatus;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      created: 'Created',
      kubernetesConfig: 'KubernetesConfig',
      nodepoolInfo: 'NodepoolInfo',
      scalingGroup: 'ScalingGroup',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      created: 'string',
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page specified in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
  /**
   * @remarks
   * The list of node pools.
   */
  nodePools?: DescribeClusterNodePoolsResponseBodyNodePools[];
  /**
   * @remarks
   * The current page number.
   */
  page?: DescribeClusterNodePoolsResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
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


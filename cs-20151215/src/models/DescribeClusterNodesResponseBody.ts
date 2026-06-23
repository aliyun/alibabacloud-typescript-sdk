// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2025-04-16T07:28:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error message generated when the node was created.
   * 
   * @example
   * error***
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the node expires.
   * 
   * @example
   * 2099-12-31T15:59:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The hostname of the node.
   * 
   * @example
   * iZ2vcckdmxp7u0urj2k****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the system image used by the node.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method of the node. Valid values:
   * 
   * - `PrePaid`: subscription.
   * - `PostPaid`: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID of the node.
   * 
   * @example
   * i-2vcckdmxp7u0urj2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the node in the cluster.
   * 
   * @example
   * worker-k8s-for-cs-c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  instanceName?: string;
  /**
   * @remarks
   * The role type of the node. Valid values:
   * 
   * - Master: a master node of the cluster.
   * - Worker: a worker node of the cluster.
   * 
   * @example
   * Worker
   */
  instanceRole?: string;
  /**
   * @remarks
   * The ECS status of the node. Valid values:
   * 
   * - `Pending`: being created.
   * - `Running`: running.
   * - `Starting`: being started.
   * - `Stopping`: being stopped.
   * - `Stopped`: stopped.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the ECS instance family to which the node belongs.
   * 
   * @example
   * ecs.c5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The IP addresses of the node.
   */
  ipAddress?: string[];
  /**
   * @remarks
   * Indicates whether the node is an Alibaba Cloud instance. Valid values:
   * 
   * - `true`: The node is an Alibaba Cloud instance.
   * 
   * - `false`: The node is not an Alibaba Cloud instance.
   * 
   * @example
   * true
   */
  isAliyunNode?: boolean;
  /**
   * @remarks
   * The node name, which is the identifier of the node in the cluster.
   * 
   * @example
   * cn-chengdu.192.168xx.xx
   */
  nodeName?: string;
  /**
   * @remarks
   * Indicates whether the node is ready. Valid values:
   * 
   * - `Ready`: The node is ready.
   * 
   * - `NotReady`: The node is not ready.
   * 
   * - `Unknown`: The node status is unknown.
   * 
   * - `Offline`: The node is offline.
   * 
   * @example
   * Ready
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np0794239424a84eb7a95327369d56****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The method used to initialize the node, such as manual creation or Resource Orchestration Service (ROS) creation.
   * 
   * @example
   * ess
   */
  source?: string;
  /**
   * @remarks
   * The spot instance type. Valid values:
   * - NoSpot: a non-spot instance.
   * - SpotWithPriceLimit: a spot instance with a price limit.
   * - SpotAsPriceGo: a spot instance priced at the market price at the time of purchase.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The running status of the node. Valid values:
   * 
   * - `pending`: being created.
   * 
   * - `running`: running.
   * 
   * - `starting`: being started.
   * 
   * - `stopping`: being stopped.
   * 
   * - `stopped`: stopped.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'creation_time',
      errorMessage: 'error_message',
      expiredTime: 'expired_time',
      hostName: 'host_name',
      imageId: 'image_id',
      instanceChargeType: 'instance_charge_type',
      instanceId: 'instance_id',
      instanceName: 'instance_name',
      instanceRole: 'instance_role',
      instanceStatus: 'instance_status',
      instanceType: 'instance_type',
      instanceTypeFamily: 'instance_type_family',
      ipAddress: 'ip_address',
      isAliyunNode: 'is_aliyun_node',
      nodeName: 'node_name',
      nodeStatus: 'node_status',
      nodepoolId: 'nodepool_id',
      source: 'source',
      spotStrategy: 'spot_strategy',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorMessage: 'string',
      expiredTime: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRole: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      isAliyunNode: 'boolean',
      nodeName: 'string',
      nodeStatus: 'string',
      nodepoolId: 'string',
      source: 'string',
      spotStrategy: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of records that can be displayed on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
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

export class DescribeClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node details.
   */
  nodes?: DescribeClusterNodesResponseBodyNodes[];
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeClusterNodesResponseBodyPage;
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
      page: 'page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeClusterNodesResponseBodyNodes },
      page: DescribeClusterNodesResponseBodyPage,
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
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


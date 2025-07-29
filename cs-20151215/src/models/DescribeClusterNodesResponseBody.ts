// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2020-08-25T11:25:35+08:00
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
   * The expiration date of the node.
   * 
   * @example
   * 2099-12-31T23:59:00+08:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * iZ2vcckdmxp7u0urj2k****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the system image that is used by the node.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method of the node. Valid values:
   * 
   * *   `PrePaid`: the subscription billing method. If the value is PrePaid, make sure that you have a sufficient balance or credit in your account. Otherwise, an `InvalidPayMethod` error is returned.
   * *   `PostPaid`: the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-2vcckdmxp7u0urj2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance on which the node is deployed.
   * 
   * @example
   * worker-k8s-for-cs-c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  instanceName?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   Master: master node
   * *   Worker: worker node
   * 
   * @example
   * Worker
   */
  instanceRole?: string;
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The ECS instance family of the node.
   * 
   * @example
   * ecs.c5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The IP address of the node.
   */
  ipAddress?: string[];
  /**
   * @remarks
   * Indicates whether the instance on which the node is deployed is provided by Alibaba Cloud. Valid values:
   * 
   * *   `true`: The instance is provided by Alibaba Cloud.
   * *   `false`: The instance is not provided by Alibaba Cloud.
   * 
   * @example
   * true
   */
  isAliyunNode?: boolean;
  /**
   * @remarks
   * The name of the node. This name is the identifier of the node in the cluster.
   * 
   * @example
   * cn-chengdu.192.168.0.36
   */
  nodeName?: string;
  /**
   * @remarks
   * Indicates whether the node is ready. Valid values:
   * 
   * *   `Ready`: The node is ready.
   * *   `NotReady`: The node is not ready.
   * *   `Unknown`: The status of the node is unknown.
   * *   `Offline`: The node is offline.
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
   * Indicates how the node is initialized. A node can be manually created or created by using Resource Orchestration Service (ROS).
   * 
   * @example
   * ess_attach
   */
  source?: string;
  /**
   * @remarks
   * The type of preemptible instance. Valid values:
   * 
   * *   NoSpot: a non-preemptible instance.
   * *   SpotWithPriceLimit: a preemptible instance that is configured with the highest bid price.
   * *   SpotAsPriceGo: a preemptible instance for which the system automatically bids based on the current market price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   `pending`: The node is being created.
   * *   `running`: The node is running.
   * *   `starting`: The node is being started.
   * *   `stopping`: The node is being stopped.
   * *   `stopped`: The node is stopped.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The details of the nodes in the cluster.
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


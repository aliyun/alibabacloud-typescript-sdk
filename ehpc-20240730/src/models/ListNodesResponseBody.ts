// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyNodesTotalResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The amount of memory. Unit: GiB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2020-06-09T06:22:02.000Z
   */
  addTime?: string;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-8vbe4av4gededlqg****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The time when the node expires.
   * 
   * @example
   * 2020-06-09T06:22:02.000Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The hostname of the node.
   * 
   * @example
   * edas.cn-shanghai.aliyuncs.com
   */
  hostname?: string;
  /**
   * @remarks
   * Indicates whether hyper-threading is enabled.
   * 
   * @example
   * true
   */
  htEnabled?: boolean;
  /**
   * @remarks
   * The instance ID of the node.
   * 
   * @example
   * i-bp15707mys2rsy0j****
   */
  id?: string;
  /**
   * @remarks
   * The image ID of the node.
   * 
   * @example
   * centos_7_06_64_20G_alibase_20190711.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The instance type of the node.
   * 
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The VPC IP address of the node.
   * 
   * @example
   * ``172.16.**.**``
   */
  ipAddress?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the node. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  keepAlive?: boolean;
  /**
   * @remarks
   * The public IP address of the node.
   * 
   * @example
   * ``172.16.**.**``
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The name of the queue to which the node belongs.
   * 
   * @example
   * autoque3
   */
  queueName?: string;
  /**
   * @remarks
   * The bidding policy of the node. Valid values:
   * 
   * *   NoSpot: The instances of the compute node are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as preemptible instances with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The node is a preemptible instance for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The node state in the scheduler.
   * 
   * @example
   * active
   */
  stateInSched?: string;
  /**
   * @remarks
   * The node state. Valid values:
   * 
   * *   uninit: The node is being installed.
   * *   initing: The node is being initialized.
   * *   running: The node is running.
   * *   releasing: The node is being released.
   * *   stopped: The node is stopped.
   * *   exception: The node has run into an exception.
   * *   untracking: The node is not added to the cluster.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The hardware configurations of the node.
   */
  totalResources?: ListNodesResponseBodyNodesTotalResources;
  /**
   * @remarks
   * The vSwitch ID of the node.
   * 
   * @example
   * vsw-bp1e47optm9g58zcu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1gnu8br4ay7beb2w****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      deploymentSetId: 'DeploymentSetId',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      htEnabled: 'HtEnabled',
      id: 'Id',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      keepAlive: 'KeepAlive',
      publicIpAddress: 'PublicIpAddress',
      queueName: 'QueueName',
      spotStrategy: 'SpotStrategy',
      stateInSched: 'StateInSched',
      status: 'Status',
      totalResources: 'TotalResources',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      deploymentSetId: 'string',
      expiredTime: 'string',
      hostname: 'string',
      htEnabled: 'boolean',
      id: 'string',
      imageId: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      keepAlive: 'boolean',
      publicIpAddress: 'string',
      queueName: 'string',
      spotStrategy: 'string',
      stateInSched: 'string',
      status: 'string',
      totalResources: ListNodesResponseBodyNodesTotalResources,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.totalResources && typeof (this.totalResources as any).validate === 'function') {
      (this.totalResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the nodes.
   */
  nodes?: ListNodesResponseBodyNodes[];
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89A1AC0F-4A6C-4F3D-98F9-BEF9A823****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyNodes },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


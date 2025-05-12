// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the resource group belongs.
   * 
   * @example
   * cn-beijing
   */
  clusterId?: string;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 16
   */
  cpuCount?: number;
  /**
   * @remarks
   * The number of vCPUs that is used.
   * 
   * @example
   * 8
   */
  cpuUsed?: number;
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The additional information, such as the connection status of a virtual private cloud (VPC) and the log status of Log Service.
   * 
   * @example
   * {"vswitch_id":"vsw-bp17uo6xebcusy****","gpu_share":true,"aux_vswitch_id_list":["vsw-bp13b3pvjap3vxn****","vsw-bp1nls8o5hk8mt8*****"],"security_group_id":"sg-bp1j1z7297hcink*****","vpc_id":"vpc-bp1kjr3rfyhx01*****","destination_cidr":"172.16.0.12/28","role_arn":"acs:ram::1157703270*****:role/AliyunServiceRoleForPaiEas","sls_project":"","sls_logstore":"","sls_status":"ResourceReady","sls_message":"","update_time":""}
   */
  extraData?: string;
  /**
   * @remarks
   * The total number of GPUs.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The number of GPUs that is used.
   * 
   * @example
   * 2
   */
  gpuUsed?: number;
  /**
   * @remarks
   * The total number of instances in the resource group.
   * 
   * @example
   * 4
   */
  instanceCount?: number;
  /**
   * @remarks
   * The total memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The size of memory that is used. Unit: MB.
   * 
   * @example
   * 2048
   */
  memoryUsed?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Resource is ready
   */
  message?: string;
  /**
   * @remarks
   * The ID of the resource group owner.
   * 
   * @example
   * 14401087478****
   */
  ownerUid?: string;
  /**
   * @remarks
   * The total number of pay-as-you-go instances in the resource group.
   * 
   * @example
   * 3
   */
  postPaidInstanceCount?: number;
  /**
   * @remarks
   * The total number of subscription instances in the resource group.
   * 
   * @example
   * 1
   */
  prePaidInstanceCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 902976F2-6FAF-5404-8A4D-6CC223***
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the Elastic Algorithm Service (EAS) resource.
   * 
   * @example
   * eas-r-glkfpsxuw57x1h*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the EAS resource.
   * 
   * @example
   * my-resouce****
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The state of the resource group.
   * 
   * @example
   * ResourceReady
   */
  status?: string;
  /**
   * @remarks
   * The time when the resource group was last updated.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpuCount: 'CpuCount',
      cpuUsed: 'CpuUsed',
      createTime: 'CreateTime',
      extraData: 'ExtraData',
      gpuCount: 'GpuCount',
      gpuUsed: 'GpuUsed',
      instanceCount: 'InstanceCount',
      memory: 'Memory',
      memoryUsed: 'MemoryUsed',
      message: 'Message',
      ownerUid: 'OwnerUid',
      postPaidInstanceCount: 'PostPaidInstanceCount',
      prePaidInstanceCount: 'PrePaidInstanceCount',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpuCount: 'number',
      cpuUsed: 'number',
      createTime: 'string',
      extraData: 'string',
      gpuCount: 'number',
      gpuUsed: 'number',
      instanceCount: 'number',
      memory: 'number',
      memoryUsed: 'number',
      message: 'string',
      ownerUid: 'string',
      postPaidInstanceCount: 'number',
      prePaidInstanceCount: 'number',
      requestId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


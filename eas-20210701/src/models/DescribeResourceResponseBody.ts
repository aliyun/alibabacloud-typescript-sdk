// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that contains the resource group.
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
   * The number of CPU cores in use.
   * 
   * @example
   * 8
   */
  cpuUsed?: number;
  /**
   * @remarks
   * The time the resource group was created.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * Additional information, such as the VPC connection status and the SLS log status.
   * 
   * @example
   * {"vswitch_id":"vsw-bp17uo6xebcusy****","gpu_share":true,"aux_vswitch_id_list":["vsw-bp13b3pvjap3vxn****","vsw-bp1nls8o5hk8mt8*****"],"security_group_id":"sg-bp1j1z7297hcink*****","vpc_id":"vpc-bp1kjr3rfyhx01*****","destination_cidr":"172.16.0.12/28","role_arn":"acs:ram::1157703270*****:role/AliyunServiceRoleForPaiEas","sls_project":"","sls_logstore":"","sls_status":"ResourceReady","sls_message":"","update_time":""}
   */
  extraData?: string;
  /**
   * @remarks
   * The features that the resource group supports.
   */
  features?: string[];
  /**
   * @remarks
   * The total number of GPUs.
   * 
   * @example
   * 4
   */
  gpuCount?: number;
  /**
   * @remarks
   * The number of GPUs in use.
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
   * The maximum number of CPU cores that can be allocated to a single instance in the resource group.
   * 
   * @example
   * 16
   */
  instanceMaxAllocatableCPU?: number;
  /**
   * @remarks
   * The maximum number of GPUs that can be allocated to a single instance in the resource group.
   * 
   * @example
   * 2
   */
  instanceMaxAllocatableGPU?: number;
  /**
   * @remarks
   * The maximum amount of memory that can be allocated to a single instance in the resource group, in MB.
   * 
   * @example
   * 2048
   */
  instanceMaxAllocatableMemory?: number;
  /**
   * @remarks
   * The total memory size, in MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The amount of memory in use, in MB.
   * 
   * @example
   * 2048
   */
  memoryUsed?: number;
  /**
   * @remarks
   * A message that provides details about the status of the resource group.
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
   * The ID of the resource group.
   * 
   * @example
   * eas-r-glkfpsxuw57x1h*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * my-resouce****
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * - `Dedicated`: a dedicated resource group.
   * 
   * - `SelfManaged`: a self-managed resource group.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of services deployed in the resource group.
   * 
   * @example
   * 1
   */
  serviceCount?: string;
  /**
   * @remarks
   * The status of the resource group.
   * 
   * @example
   * ResourceReady
   */
  status?: string;
  /**
   * @remarks
   * The time the resource group was last updated.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The usage mode of the resource group.
   * 
   * @example
   * inference
   */
  usageMode?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpuCount: 'CpuCount',
      cpuUsed: 'CpuUsed',
      createTime: 'CreateTime',
      extraData: 'ExtraData',
      features: 'Features',
      gpuCount: 'GpuCount',
      gpuUsed: 'GpuUsed',
      instanceCount: 'InstanceCount',
      instanceMaxAllocatableCPU: 'InstanceMaxAllocatableCPU',
      instanceMaxAllocatableGPU: 'InstanceMaxAllocatableGPU',
      instanceMaxAllocatableMemory: 'InstanceMaxAllocatableMemory',
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
      serviceCount: 'ServiceCount',
      status: 'Status',
      updateTime: 'UpdateTime',
      usageMode: 'UsageMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpuCount: 'number',
      cpuUsed: 'number',
      createTime: 'string',
      extraData: 'string',
      features: { 'type': 'array', 'itemType': 'string' },
      gpuCount: 'number',
      gpuUsed: 'number',
      instanceCount: 'number',
      instanceMaxAllocatableCPU: 'number',
      instanceMaxAllocatableGPU: 'number',
      instanceMaxAllocatableMemory: 'number',
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
      serviceCount: 'string',
      status: 'string',
      updateTime: 'string',
      usageMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


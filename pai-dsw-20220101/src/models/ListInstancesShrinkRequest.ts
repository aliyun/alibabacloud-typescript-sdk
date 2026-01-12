// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerator type.
   * 
   * *   CPU: Only CPU computing is used.
   * *   GPU: GPUs are used to accelerate computing.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PRIVATE (default): The instances are accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The instances are accessible only to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  createTimeAfter?: string;
  createTimeBefore?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 12345*****67890
   */
  createUserId?: string;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * NVIDIA A10
   */
  gpuType?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * modelscope:1.9.4-pytorch2.0.1tensorflow2.13.0-cpu-py38-ubuntu20.04
   */
  imageName?: string;
  /**
   * @remarks
   * The instance ID. You can call [ListInstances](https://help.aliyun.com/document_detail/470439.html) to obtain the instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * training_data
   */
  instanceName?: string;
  /**
   * @remarks
   * The labels. A maximum of four labels are supported.
   * 
   * @example
   * {
   *   "key1": "value1",
   *   "key2": "value2",
   *   "key3": "value3"
   * }
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The maximum number of CPUs. Unit: 0.001 CPU. The value 1000 indicates one CPU.
   * 
   * @example
   * 30000
   */
  maxCpu?: string;
  /**
   * @remarks
   * The maximum number of GPUs. Unit: 0.001 GPU. The value 1000 indicates one GPU.
   * 
   * @example
   * 8000
   */
  maxGpu?: string;
  /**
   * @remarks
   * The maximum memory size per GPU card. Unit: GB.
   * 
   * @example
   * 16
   */
  maxGpuMemory?: string;
  /**
   * @remarks
   * The maximum memory size. Unit: GB.
   * 
   * @example
   * 48
   */
  maxMemory?: string;
  /**
   * @remarks
   * The minimum number of CPUs. Unit: 0.001 CPU. The value 1000 indicates one CPU.
   * 
   * @example
   * 2000
   */
  minCpu?: string;
  /**
   * @remarks
   * The minimum number of GPUs. Unit: 0.001 GPU. The value 1000 indicates one GPU.
   * 
   * @example
   * 100
   */
  minGpu?: string;
  /**
   * @remarks
   * The minimum memory size per GPU card. Unit: GB.
   * 
   * @example
   * 8
   */
  minGpuMemory?: string;
  /**
   * @remarks
   * The minimum memory size. Unit: GB.
   * 
   * @example
   * 4
   */
  minMemory?: string;
  /**
   * @remarks
   * The order that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  oversoldInfo?: string;
  oversoldType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
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
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource group ID. If you leave this parameter empty, the instances in the pay-as-you-go resource group are queried. If you set this parameter to ALL, all instances are queried.
   * 
   * @example
   * rg-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   Priority
   * *   GmtCreateTime
   * *   GmtModifiedTime
   * 
   * @example
   * gmtCreate
   */
  sortBy?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   SaveFailed
   * *   Stopped
   * *   Failed
   * *   ResourceAllocating
   * *   Stopping
   * *   Updating
   * *   Saving
   * *   Queuing
   * *   Recovering
   * *   Starting
   * *   Running
   * *   Saved
   * *   Deleting
   * *   EnvPreparing
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 40823
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      createTimeAfter: 'CreateTimeAfter',
      createTimeBefore: 'CreateTimeBefore',
      createUserId: 'CreateUserId',
      gpuType: 'GpuType',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      labelsShrink: 'Labels',
      maxCpu: 'MaxCpu',
      maxGpu: 'MaxGpu',
      maxGpuMemory: 'MaxGpuMemory',
      maxMemory: 'MaxMemory',
      minCpu: 'MinCpu',
      minGpu: 'MinGpu',
      minGpuMemory: 'MinGpuMemory',
      minMemory: 'MinMemory',
      order: 'Order',
      oversoldInfo: 'OversoldInfo',
      oversoldType: 'OversoldType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      resourceId: 'ResourceId',
      sortBy: 'SortBy',
      status: 'Status',
      tagShrink: 'Tag',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      createTimeAfter: 'string',
      createTimeBefore: 'string',
      createUserId: 'string',
      gpuType: 'string',
      imageName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      labelsShrink: 'string',
      maxCpu: 'string',
      maxGpu: 'string',
      maxGpuMemory: 'string',
      maxMemory: 'string',
      minCpu: 'string',
      minGpu: 'string',
      minGpuMemory: 'string',
      minMemory: 'string',
      order: 'string',
      oversoldInfo: 'string',
      oversoldType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      resourceId: 'string',
      sortBy: 'string',
      status: 'string',
      tagShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


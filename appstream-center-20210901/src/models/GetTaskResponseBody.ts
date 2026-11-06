// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The resource content corresponding to ResourceType. For the URL type, specify or return an accessible resource address.
   * 
   * @example
   * https://example.com/apps/business/setup.exe
   */
  resource?: string;
  /**
   * @remarks
   * The provision method of the resource content.
   * 
   * Valid values:
   * 
   * - **HOSTED**: hosted resource
   * - **TEXT**: text resource
   * - **URL**: resource provided through a URL
   * 
   * @example
   * URL
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyDataTaskStepList extends $dara.Model {
  /**
   * @remarks
   * The end time of the step. The time is a UNIX timestamp calculated from 1970-01-01T00:00:00Z. Unit: milliseconds. This parameter may not be returned if the step has not ended.
   * 
   * @example
   * 1790130491000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the step. The time is a UNIX timestamp calculated from 1970-01-01T00:00:00Z. Unit: milliseconds.
   * 
   * @example
   * 1790130490000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status of the step.
   * 
   * Valid values:
   * 
   * - **RUNNING**: The step is being executed.
   * - **SUCCESS**: The step is executed successfully.
   * - **FAILED**: The step fails to be executed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The ISO 8601 string of the step end time, including the time zone offset. In the example, +08:00 indicates UTC+8. This parameter represents the same time as EndTime and is parsed according to the offset in the returned value. This parameter may not be returned if the step has not ended.
   * 
   * @example
   * 2026-09-23T10:28:11+08:00
   */
  stepEndTime?: string;
  /**
   * @remarks
   * The ISO 8601 string of the step start time, including the time zone offset. In the example, +08:00 indicates UTC+8. This parameter represents the same time as StartTime and is parsed according to the offset in the returned value.
   * 
   * @example
   * 2026-09-23T10:28:10+08:00
   */
  stepStartTime?: string;
  /**
   * @remarks
   * The prompt or execution result description of this step.
   * 
   * @example
   * [code=Builder.Failed,httpStatusCode=<null>,message=Builder environment deploy failed.]
   */
  taskMessage?: string;
  /**
   * @remarks
   * The task step identifier corresponding to this record. You can call the ListTaskStep operation to query the image creation and application adaptation steps.
   * 
   * @example
   * CREATE_BUILDER_ENV
   */
  taskStep?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      status: 'Status',
      stepEndTime: 'StepEndTime',
      stepStartTime: 'StepStartTime',
      taskMessage: 'TaskMessage',
      taskStep: 'TaskStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      status: 'string',
      stepEndTime: 'string',
      stepStartTime: 'string',
      taskMessage: 'string',
      taskStep: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 100931896542****
   */
  aliUid?: number;
  /**
   * @remarks
   * The prompt or execution result description of the current step of the task.
   * 
   * @example
   * [code=Builder.Failed,httpStatusCode=<null>,message=Builder environment deploy failed.]
   */
  currentTaskMessage?: string;
  /**
   * @remarks
   * The identifier of the step that the task is currently executing. You can call the ListTaskStep operation to query the image creation and application adaptation steps.
   * 
   * @example
   * CREATE_BUILDER_ENV
   */
  currentTaskStep?: string;
  /**
   * @remarks
   * The ID of the region where the task is actually executed.
   * 
   * @example
   * cn-hangzhou
   */
  executeRegion?: string;
  /**
   * @remarks
   * The time when the task was created. The time is in ISO 8601 format, accurate to milliseconds, and the time zone offset is +00:00.
   * 
   * @example
   * 2026-09-23T02:28:10.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was last modified. The time is in ISO 8601 format, accurate to milliseconds, and the time zone offset is +00:00.
   * 
   * @example
   * 2026-09-23T02:32:43.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The compute type of the task creation resource.
   * 
   * Valid values:
   * 
   * - **CPU**: CPU compute resource
   * - **GPU**: GPU compute resource
   * 
   * @example
   * CPU
   */
  performanceType?: string;
  /**
   * @remarks
   * **Not enabled. The system does not return valid task progress.** Determine the task execution status based on the Status, CurrentTaskStep, and TaskStepList parameters.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status, not an actual API response example.
   * 
   * @example
   * Not applicable (not enabled)
   */
  progress?: string;
  /**
   * @remarks
   * The list of resources used for task creation, which corresponds to the creation resources submitted when the task is created.
   */
  resourceList?: GetTaskResponseBodyDataResourceList[];
  /**
   * @remarks
   * The running mode of the task creation environment.
   * 
   * Valid values:
   * 
   * - **NORMAL**: normal running mode
   * - **COMPATIBLE**: compatible running mode
   * 
   * @example
   * NORMAL
   */
  runMode?: string;
  /**
   * @remarks
   * The overall status of the task.
   * 
   * Valid values:
   * 
   * - **INIT**: The task is initialized.
   * - **START**: The task is being created or executed.
   * - **SUCCESS**: The task is executed successfully.
   * - **FAILED**: The task fails to be executed.
   * - **DELETED**: The task is deleted.
   * 
   * Deleted tasks are not included in the regular valid task query scope.
   * 
   * @example
   * START
   */
  status?: string;
  /**
   * @remarks
   * The system disk capacity of the task creation environment. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the base system image used in the task creation environment.
   * 
   * @example
   * imgc-bp1parent****
   */
  systemImageId?: string;
  /**
   * @remarks
   * The task ID. You can use this ID to call the GetTask operation to query the task status.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  /**
   * @remarks
   * The list of recorded task execution steps and results.
   */
  taskStepList?: GetTaskResponseBodyDataTaskStepList[];
  /**
   * @remarks
   * The actual type of the task.
   * 
   * Valid values:
   * 
   * - **AUTO_ADAPT**: automatic adaptation
   * - **AUTO_CREATE_IMAGE**: automatic image creation
   * - **RETRY_ADAPT**: retry of automatic adaptation
   * - **RETRY_CREATE_IMAGE**: retry of automatic image creation
   * - **AUTO_OTA_IMAGE**: automatic image OTA
   * - **AUTO_CREATE_VHD**: automatic VHD creation
   * - **RETRY_VHD**: retry of VHD creation
   * - **AUTO_CREATE_IMAGE_VHD**: automatic VHD image creation
   * - **RETRY_CREATE_IMAGE_VHD**: retry of VHD image creation
   * - **AUTO_VALIDATE_VHD**: automatic VHD validation
   * - **RETRY_VALIDATE_VHD**: retry of VHD validation
   * - **SYNCHRONIZE_APP_IMAGE**: application image synchronization
   * - **APPLY_VHD_BUILDER**: application for VHD application recording environment
   * - **RETRY_VHD_BUILDER**: retry of application for VHD recording environment
   * - **ADAPT_AUTO**: automatic application adaptation creation
   * - **ADAPT_AUTO_RETRY**: retry of automatic application adaptation creation
   * - **ADAPT_MANUAL**: manual application adaptation creation
   * - **ADAPT_MANUAL_RETRY**: retry of manual application adaptation creation
   * - **IMAGE_AUTO**: automatic image creation
   * - **IMAGE_AUTO_RETRY**: retry of automatic image creation
   * - **IMAGE_AUTO_VALIDATE**: automatic image validation
   * - **IMAGE_AUTO_VALIDATE_RETRY**: retry of automatic image validation
   * - **IMAGE_MANUAL**: manual image creation
   * - **IMAGE_MANUAL_RETRY**: retry of manual image creation
   * - **DESKTOP_CUSTOM_IMAGE**: cloud desktop custom image creation
   * - **DESKTOP_CUSTOM_IMAGE_RETRY**: retry of cloud desktop custom image creation
   * - **DESKTOP_SYNC_IMAGE**: cloud desktop image synchronization across regions
   * - **DESKTOP_SYNC_IMAGE_RETRY**: retry of cloud desktop image synchronization across regions
   * - **IMAGE_DISTRIBUTE**: image distribution to multiple regions
   * - **IMAGE_DISTRIBUTE_RETRY**: retry of image distribution
   * - **IMAGE_FROM_INSTANCE**: image creation based on an instance
   * - **IMAGE_FROM_INSTANCE_RETRY**: retry of image creation based on an instance
   * - **SNAPSHOT_DISTRIBUTE**: snapshot distribution to multiple regions
   * - **SNAPSHOT_DISTRIBUTE_RETRY**: retry of snapshot distribution
   * - **SNAPSHOT_FROM_DISK**: snapshot creation based on a disk
   * - **SNAPSHOT_FROM_DISK_RETRY**: retry of snapshot creation based on a disk
   * - **IMAGE_CLEAN_AND_CREATE**: temporary instance creation based on an image, cleanup, and final image creation
   * - **IMAGE_CLEAN_AND_CREATE_RETRY**: retry of final image creation after cleanup
   * 
   * @example
   * IMAGE_MANUAL
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      currentTaskMessage: 'CurrentTaskMessage',
      currentTaskStep: 'CurrentTaskStep',
      executeRegion: 'ExecuteRegion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      performanceType: 'PerformanceType',
      progress: 'Progress',
      resourceList: 'ResourceList',
      runMode: 'RunMode',
      status: 'Status',
      systemDiskSize: 'SystemDiskSize',
      systemImageId: 'SystemImageId',
      taskId: 'TaskId',
      taskStepList: 'TaskStepList',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      currentTaskMessage: 'string',
      currentTaskStep: 'string',
      executeRegion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      performanceType: 'string',
      progress: 'string',
      resourceList: { 'type': 'array', 'itemType': GetTaskResponseBodyDataResourceList },
      runMode: 'string',
      status: 'string',
      systemDiskSize: 'number',
      systemImageId: 'string',
      taskId: 'string',
      taskStepList: { 'type': 'array', 'itemType': GetTaskResponseBodyDataTaskStepList },
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    if(Array.isArray(this.taskStepList)) {
      $dara.Model.validateArray(this.taskStepList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned when the request fails. A successful response may not contain this parameter.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The task details.
   */
  data?: GetTaskResponseBodyData;
  /**
   * @remarks
   * The error or result message. This parameter is used to describe the cause when the request fails. A successful response may not contain this parameter.
   * 
   * @example
   * Internal error.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can provide this value when you troubleshoot issues.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. To determine whether an asynchronous task is completed, you must query the task status separately.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


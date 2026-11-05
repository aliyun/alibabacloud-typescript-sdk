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
   * - **HOSTED**: Hosted resource.
   * - **TEXT**: Text resource.
   * - **URL**: Resource provided through a URL.
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
   * The end time of the step. It is a UNIX timestamp calculated from 1970-01-01T00:00:00Z. Unit: milliseconds. This parameter may not be returned if the step has not ended.
   * 
   * @example
   * 1790130491000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the step. It is a UNIX timestamp calculated from 1970-01-01T00:00:00Z. Unit: milliseconds.
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
   * - **RUNNING**: The step is executing.
   * - **SUCCESS**: The step is executed successfully.
   * - **FAILED**: The step fails to be executed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The end time of the step in ISO 8601 format, including the time zone offset. In the example, +08:00 indicates UTC+8. This parameter represents the same time as EndTime and is parsed based on the offset in the return value. This parameter may not be returned if the step has not ended.
   * 
   * @example
   * 2026-09-23T10:28:11+08:00
   */
  stepEndTime?: string;
  /**
   * @remarks
   * The start time of the step in ISO 8601 format, including the time zone offset. In the example, +08:00 indicates UTC+8. This parameter represents the same time as StartTime and is parsed based on the offset in the return value.
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
   * The prompt or execution result description of the current task step.
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
   * The time when the task was last updated. The time is in ISO 8601 format, accurate to milliseconds, and the time zone offset is +00:00.
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
   * - **CPU**: CPU compute resource.
   * - **GPU**: GPU compute resource.
   * 
   * @example
   * CPU
   */
  performanceType?: string;
  /**
   * @remarks
   * **Not enabled. The system does not return valid task progress.** Determine the task execution status based on Status, CurrentTaskStep, and TaskStepList.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not an actual API response example.
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
   * - **NORMAL**: Normal running mode.
   * - **COMPATIBLE**: Compatible running mode.
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
   * The capacity of the system cloud disk in the task creation environment. Unit: GiB.
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
   * - **AUTO_ADAPT**: Automatic adaptation.
   * - **AUTO_CREATE_IMAGE**: Automatic image creation.
   * - **RETRY_ADAPT**: Retry automatic adaptation.
   * - **RETRY_CREATE_IMAGE**: Retry automatic image creation.
   * - **AUTO_OTA_IMAGE**: Automatic image OTA.
   * - **AUTO_CREATE_VHD**: Automatic VHD creation.
   * - **RETRY_VHD**: Retry VHD creation.
   * - **AUTO_CREATE_IMAGE_VHD**: Automatic VHD image creation.
   * - **RETRY_CREATE_IMAGE_VHD**: Retry VHD image creation.
   * - **AUTO_VALIDATE_VHD**: Automatic VHD validation.
   * - **RETRY_VALIDATE_VHD**: Retry VHD validation.
   * - **SYNCHRONIZE_APP_IMAGE**: Synchronize application image.
   * - **APPLY_VHD_BUILDER**: Apply for VHD application recording environment.
   * - **RETRY_VHD_BUILDER**: Retry applying for VHD recording environment.
   * - **ADAPT_AUTO**: Automatic application adaptation creation.
   * - **ADAPT_AUTO_RETRY**: Retry automatic application adaptation creation.
   * - **ADAPT_MANUAL**: Manual application adaptation creation.
   * - **ADAPT_MANUAL_RETRY**: Retry manual application adaptation creation.
   * - **IMAGE_AUTO**: Automatic image creation.
   * - **IMAGE_AUTO_RETRY**: Retry automatic image creation.
   * - **IMAGE_AUTO_VALIDATE**: Automatic image validation.
   * - **IMAGE_AUTO_VALIDATE_RETRY**: Retry automatic image validation.
   * - **IMAGE_MANUAL**: Manual image creation.
   * - **IMAGE_MANUAL_RETRY**: Retry manual image creation.
   * - **DESKTOP_CUSTOM_IMAGE**: Create cloud desktop custom image.
   * - **DESKTOP_CUSTOM_IMAGE_RETRY**: Retry creating cloud desktop custom image.
   * - **DESKTOP_SYNC_IMAGE**: Synchronize cloud desktop image across regions.
   * - **DESKTOP_SYNC_IMAGE_RETRY**: Retry synchronizing cloud desktop image across regions.
   * - **IMAGE_DISTRIBUTE**: Distribute image to multiple regions.
   * - **IMAGE_DISTRIBUTE_RETRY**: Retry image distribution.
   * - **IMAGE_FROM_INSTANCE**: Create image based on instance.
   * - **IMAGE_FROM_INSTANCE_RETRY**: Retry creating image based on instance.
   * - **SNAPSHOT_DISTRIBUTE**: Distribute snapshot to multiple regions.
   * - **SNAPSHOT_DISTRIBUTE_RETRY**: Retry snapshot distribution.
   * - **SNAPSHOT_FROM_DISK**: Create snapshot based on disk.
   * - **SNAPSHOT_FROM_DISK_RETRY**: Retry creating snapshot based on disk.
   * - **IMAGE_CLEAN_AND_CREATE**: Create temporary instance based on image, clean it, and create final image.
   * - **IMAGE_CLEAN_AND_CREATE_RETRY**: Retry creating final image after cleaning.
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
   * The error or result message. This parameter describes the cause when the request fails. A successful response may not contain this parameter.
   * 
   * @example
   * Internal error.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can provide this value for troubleshooting.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. To check whether an asynchronous task is completed, you must query the task status separately.
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


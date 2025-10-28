// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskListTaskInfoDTO extends $dara.Model {
  /**
   * @remarks
   * The type of the retry policy. Value 0 indicates no retry, value 1 indicates automatic retry, and value 2 indicates manual retry.
   * 
   * @example
   * 0
   */
  retryType?: number;
  /**
   * @remarks
   * Indicates whether errors that occur in the change process are ignored. Valid values:``
   * 
   * *   true: Errors that occur in the change process are ignored. This parameter can be set to true only when URL health checks are performed.
   * *   false: Errors that occur in the change process are not ignored.
   * 
   * @example
   * false
   */
  showManualIgnorance?: boolean;
  /**
   * @remarks
   * Error codes
   * 
   * @example
   * 400
   */
  taskErrorCode?: string;
  /**
   * @remarks
   * Indicates whether the task is error-tolerant. If the task can tolerate errors, the errors that occur in the change process are ignored and the next task is executed.
   * 
   * *   0: The task is not error-tolerant.
   * *   1: The task is error-tolerant.
   * 
   * @example
   * 0
   */
  taskErrorIgnorance?: number;
  /**
   * @remarks
   * The error message for the task.
   * 
   * @example
   * 400
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * d6d3b934-90a1-4ae8-8cbd-2446003d****
   */
  taskId?: string;
  /**
   * @remarks
   * Task information
   * 
   * @example
   * [CALLBACK] 2020-03-11 15:28:44.781  requestId: c952ab99-8c5b-4ff1-9412-ae3bf9b1****, message: success
   */
  taskMessage?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Build Image
   */
  taskName?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   8: wait for manual confirmation to trigger the next batch during a manual phased release
   * *   9: wait to trigger the next batch during an automatic phased release
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      retryType: 'RetryType',
      showManualIgnorance: 'ShowManualIgnorance',
      taskErrorCode: 'TaskErrorCode',
      taskErrorIgnorance: 'TaskErrorIgnorance',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
      taskMessage: 'TaskMessage',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retryType: 'number',
      showManualIgnorance: 'boolean',
      taskErrorCode: 'string',
      taskErrorIgnorance: 'number',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskMessage: 'string',
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskList extends $dara.Model {
  taskInfoDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskListTaskInfoDTO[];
  static names(): { [key: string]: string } {
    return {
      taskInfoDTO: 'TaskInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfoDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskListTaskInfoDTO },
    };
  }

  validate() {
    if(Array.isArray(this.taskInfoDTO)) {
      $dara.Model.validateArray(this.taskInfoDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTO extends $dara.Model {
  /**
   * @remarks
   * The ID of the stage.
   * 
   * @example
   * d7561440-10a6-452f-8a90-62f6e7ec****
   */
  stageId?: string;
  /**
   * @remarks
   * The name of the stage.
   * 
   * @example
   * Process Start
   */
  stageName?: string;
  /**
   * @remarks
   * The status of the stage. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   8: wait for manual confirmation to trigger the next batch during a manual phased release
   * *   9: wait to trigger the next batch during an automatic phased release
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  stageStatus?: number;
  /**
   * @remarks
   * The information about the task.
   */
  taskList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskList;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      stageName: 'StageName',
      stageStatus: 'StageStatus',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      stageName: 'string',
      stageStatus: 'number',
      taskList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskList,
    };
  }

  validate() {
    if(this.taskList && typeof (this.taskList as any).validate === 'function') {
      (this.taskList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList extends $dara.Model {
  stageDetailDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTO[];
  static names(): { [key: string]: string } {
    return {
      stageDetailDTO: 'StageDetailDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageDetailDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTO },
    };
  }

  validate() {
    if(Array.isArray(this.stageDetailDTO)) {
      $dara.Model.validateArray(this.stageDetailDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOListInstanceStageDTO extends $dara.Model {
  /**
   * @remarks
   * The time when the execution stopped.
   * 
   * @example
   * 2020-03-11T07:28:52Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the stage.
   * 
   * @example
   * 5dd4c0f2-d81a-406f-****-************
   */
  stageId?: string;
  /**
   * @remarks
   * The information about the stage.
   * 
   * @example
   * Pulling image \\"registry-vpc.cn-hangzhou.aliyuncs.com****-user/1172745****_shared_repo:428084d6-265f-****-911a-7eb0d2c3****_15839117****\\
   */
  stageMessage?: string;
  /**
   * @remarks
   * The name of the stage.
   * 
   * @example
   * scale out
   */
  stageName?: string;
  /**
   * @remarks
   * The time when the execution was started.
   * 
   * @example
   * 2020-03-11T07:28:49Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the stage. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   8: wait for manual confirmation to trigger the next batch during a manual phased release
   * *   9: wait to trigger the next batch during an automatic phased release
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      stageId: 'StageId',
      stageMessage: 'StageMessage',
      stageName: 'StageName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      stageId: 'string',
      stageMessage: 'string',
      stageName: 'string',
      startTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList extends $dara.Model {
  instanceStageDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOListInstanceStageDTO[];
  static names(): { [key: string]: string } {
    return {
      instanceStageDTO: 'InstanceStageDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStageDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOListInstanceStageDTO },
    };
  }

  validate() {
    if(Array.isArray(this.instanceStageDTO)) {
      $dara.Model.validateArray(this.instanceStageDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTO extends $dara.Model {
  /**
   * @remarks
   * The IP address of the ECS instance.
   * 
   * @example
   * 47.XX.XX.12 (Public)<br>***.**.*.*** (*******)
   */
  instanceIp?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * EDAS-scaled
   */
  instanceName?: string;
  /**
   * @remarks
   * The results of the task executed on the ECS instance in each stage.
   */
  instanceStageDTOList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * canary-test
   */
  podName?: string;
  /**
   * @remarks
   * The state of the pod.
   * 
   * @example
   * In progress
   */
  podStatus?: string;
  /**
   * @remarks
   * The running state. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   8: wait for manual confirmation to trigger the next batch during a manual phased release
   * *   9: wait to trigger the next batch during an automatic phased release
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceStageDTOList: 'InstanceStageDTOList',
      podName: 'PodName',
      podStatus: 'PodStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIp: 'string',
      instanceName: 'string',
      instanceStageDTOList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList,
      podName: 'string',
      podStatus: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.instanceStageDTOList && typeof (this.instanceStageDTOList as any).validate === 'function') {
      (this.instanceStageDTOList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList extends $dara.Model {
  instanceDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTO[];
  static names(): { [key: string]: string } {
    return {
      instanceDTO: 'InstanceDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTO },
    };
  }

  validate() {
    if(Array.isArray(this.instanceDTO)) {
      $dara.Model.validateArray(this.instanceDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage extends $dara.Model {
  /**
   * @remarks
   * The execution result in the stage.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the stage.
   * 
   * @example
   * 358a143f-09a0-45e0-****-************
   */
  stageId?: string;
  /**
   * @remarks
   * Phase Name
   * 
   * @example
   * Enable Tengine
   */
  stageName?: string;
  /**
   * @remarks
   * The running state. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   8: wait for manual confirmation to trigger the next batch during a manual phased release
   * *   9: wait to trigger the next batch during an automatic phased release
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      stageId: 'StageId',
      stageName: 'StageName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      stageId: 'string',
      stageName: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO extends $dara.Model {
  /**
   * @remarks
   * The results of the task executed on each Elastic Compute Service (ECS) instance in each stage.
   */
  instanceDTOList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList;
  /**
   * @remarks
   * The results of tasks executed in each service-oriented stage.
   */
  serviceStage?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage;
  static names(): { [key: string]: string } {
    return {
      instanceDTOList: 'InstanceDTOList',
      serviceStage: 'ServiceStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDTOList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList,
      serviceStage: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOServiceStage,
    };
  }

  validate() {
    if(this.instanceDTOList && typeof (this.instanceDTOList as any).validate === 'function') {
      (this.instanceDTOList as any).validate();
    }
    if(this.serviceStage && typeof (this.serviceStage as any).validate === 'function') {
      (this.serviceStage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTO extends $dara.Model {
  /**
   * @remarks
   * The ID of the stage.
   * 
   * @example
   * 358a143f-09a0-45e0-****-************@**_*******_*****
   */
  stageId?: string;
  /**
   * @remarks
   * The name of the stage.
   * 
   * @example
   * Scale Out
   */
  stageName?: string;
  /**
   * @remarks
   * The results of the task executed in the stage.
   */
  stageResultDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO;
  /**
   * @remarks
   * The state of the stage. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   8: wait for manual confirmation to trigger the next batch during a manual phased release
   * *   9: wait to trigger the next batch during an automatic phased release
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      stageId: 'StageId',
      stageName: 'StageName',
      stageResultDTO: 'StageResultDTO',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageId: 'string',
      stageName: 'string',
      stageResultDTO: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO,
      status: 'number',
    };
  }

  validate() {
    if(this.stageResultDTO && typeof (this.stageResultDTO as any).validate === 'function') {
      (this.stageResultDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList extends $dara.Model {
  stageInfoDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTO[];
  static names(): { [key: string]: string } {
    return {
      stageInfoDTO: 'StageInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageInfoDTO: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTO },
    };
  }

  validate() {
    if(Array.isArray(this.stageInfoDTO)) {
      $dara.Model.validateArray(this.stageInfoDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of each batch for the change during the phased release.
   * 
   * @example
   * 4c4ee320-5e47-4a48-****-************
   */
  pipelineId?: string;
  /**
   * @remarks
   * The name of the batch.
   * 
   * @example
   * Batch: 1
   */
  pipelineName?: string;
  /**
   * @remarks
   * The state of the change task. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   8: wait for manual confirmation to trigger the next batch during a manual phased release
   * *   9: wait to trigger the next batch during an automatic phased release
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  pipelineStatus?: number;
  /**
   * @remarks
   * The execution results in each stage.
   */
  stageDetailList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList;
  /**
   * @remarks
   * The stages of the change process.
   */
  stageList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList;
  /**
   * @remarks
   * The time when the change task was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1583911702158
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the change task was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1583911743633
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      pipelineStatus: 'PipelineStatus',
      stageDetailList: 'StageDetailList',
      stageList: 'StageList',
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      pipelineName: 'string',
      pipelineStatus: 'number',
      stageDetailList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList,
      stageList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList,
      startTime: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.stageDetailList && typeof (this.stageDetailList as any).validate === 'function') {
      (this.stageDetailList as any).validate();
    }
    if(this.stageList && typeof (this.stageList as any).validate === 'function') {
      (this.stageList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList extends $dara.Model {
  pipelineInfo?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfo[];
  static names(): { [key: string]: string } {
    return {
      pipelineInfo: 'PipelineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineInfo: { 'type': 'array', 'itemType': GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfo },
    };
  }

  validate() {
    if(Array.isArray(this.pipelineInfo)) {
      $dara.Model.validateArray(this.pipelineInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoTargets extends $dara.Model {
  items?: string[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl extends $dara.Model {
  /**
   * @remarks
   * The route forwarding policy.
   * 
   * @example
   * [{"app":"9c8247da-91b6-42bb-8f99-92a0b9c6f****","type":"GROUP"}]
   */
  routes?: string;
  /**
   * @remarks
   * The traffic routing rules.
   * 
   * @example
   * [{"conditionType":"content","conditions":[{"key":"name","operator":"EQ","strategy":"PARAM","values":["jim"]},{"key":"name","operator":"EQ","strategy":"COOKIE","values":["jim"]}],"percent":100,"protocol":"SPRINGCLOUD","triggerPolicy":"AND"}]
   */
  rules?: string;
  /**
   * @remarks
   * The description of throttling rules.
   * 
   * @example
   * This canary release batch is complete, and the user has confirmed to proceed to the next batch.
   */
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      routes: 'Routes',
      rules: 'Rules',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routes: 'string',
      rules: 'string',
      tips: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBodyChangeOrderInfo extends $dara.Model {
  /**
   * @remarks
   * The number of batches for the change.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * Indicates whether the change for the next batch is automatically or manually triggered when phased release is performed. Valid values:
   * 
   * *   Automatic: The change for the next batch is automatically triggered.
   * *   Manual: The change for the next batch is manually triggered.
   * 
   * @example
   * Automatic
   */
  batchType?: string;
  /**
   * @remarks
   * The description of the change process.
   * 
   * @example
   * Application scale-out
   */
  changeOrderDescription?: string;
  /**
   * @remarks
   * The ID of the change process.
   * 
   * @example
   * 1074f3e2-e974-4a0e-****-************
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The type of the change process.
   * 
   * @example
   * Application Scale Out
   */
  coType?: string;
  /**
   * @remarks
   * The time when the change process is created.
   * 
   * @example
   * 2019-11-13 14:23:46
   */
  createTime?: string;
  /**
   * @remarks
   * The person in charge of the change process.
   * 
   * @example
   * edas_com***_****@******-*****.***
   */
  createUserId?: string;
  /**
   * @remarks
   * The description of the change process.
   * 
   * @example
   * IP of Scale-Out Instance: 47.107.XX.XX
   */
  desc?: string;
  /**
   * @remarks
   * The information about the batches of the change task.
   */
  pipelineInfoList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList;
  /**
   * @remarks
   * The state of the change process. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   7: partially executed
   * *   8: wait for manual confirmation to trigger the next batch during a manual phased release
   * *   9: wait to trigger the next batch during an automatic phased release
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether rollbacks are allowed. Valid values:
   * 
   * *   true: Rollbacks are allowed.
   * *   false: Rollbacks are not allowed.
   * 
   * @example
   * false
   */
  supportRollback?: boolean;
  targets?: GetChangeOrderInfoResponseBodyChangeOrderInfoTargets;
  /**
   * @remarks
   * The throttling rules.
   */
  trafficControl?: GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl;
  static names(): { [key: string]: string } {
    return {
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderDescription: 'ChangeOrderDescription',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      desc: 'Desc',
      pipelineInfoList: 'PipelineInfoList',
      status: 'Status',
      supportRollback: 'SupportRollback',
      targets: 'Targets',
      trafficControl: 'TrafficControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCount: 'number',
      batchType: 'string',
      changeOrderDescription: 'string',
      changeOrderId: 'string',
      coType: 'string',
      createTime: 'string',
      createUserId: 'string',
      desc: 'string',
      pipelineInfoList: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList,
      status: 'number',
      supportRollback: 'boolean',
      targets: GetChangeOrderInfoResponseBodyChangeOrderInfoTargets,
      trafficControl: GetChangeOrderInfoResponseBodyChangeOrderInfoTrafficControl,
    };
  }

  validate() {
    if(this.pipelineInfoList && typeof (this.pipelineInfoList as any).validate === 'function') {
      (this.pipelineInfoList as any).validate();
    }
    if(this.targets && typeof (this.targets as any).validate === 'function') {
      (this.targets as any).validate();
    }
    if(this.trafficControl && typeof (this.trafficControl as any).validate === 'function') {
      (this.trafficControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4JFR-FV9F***************
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the change process.
   */
  changeOrderInfo?: GetChangeOrderInfoResponseBodyChangeOrderInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      changeOrderInfo: 'changeOrderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      changeOrderInfo: GetChangeOrderInfoResponseBodyChangeOrderInfo,
    };
  }

  validate() {
    if(this.changeOrderInfo && typeof (this.changeOrderInfo as any).validate === 'function') {
      (this.changeOrderInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailListStageDetailDTOTaskListTaskInfoDTO extends $dara.Model {
  retryType?: number;
  showManualIgnorance?: boolean;
  taskErrorCode?: string;
  taskErrorIgnorance?: number;
  taskErrorMessage?: string;
  taskId?: string;
  taskMessage?: string;
  taskName?: string;
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
  stageId?: string;
  stageName?: string;
  stageStatus?: number;
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
  finishTime?: string;
  stageId?: string;
  stageMessage?: string;
  stageName?: string;
  startTime?: string;
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
  instanceIp?: string;
  instanceName?: string;
  instanceStageDTOList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOListInstanceDTOInstanceStageDTOList;
  podName?: string;
  podStatus?: string;
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
  message?: string;
  stageId?: string;
  stageName?: string;
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
  instanceDTOList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTOInstanceDTOList;
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
  stageId?: string;
  stageName?: string;
  stageResultDTO?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageListStageInfoDTOStageResultDTO;
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
  pipelineId?: string;
  pipelineName?: string;
  pipelineStatus?: number;
  stageDetailList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageDetailList;
  stageList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoListPipelineInfoStageList;
  startTime?: string;
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
   * The traffic forwarding rule.
   * 
   * @example
   * [{"app":"9c8247da-91b6-42bb-8f99-92a0b9c6f****","type":"GROUP"}]
   */
  routes?: string;
  /**
   * @remarks
   * The routing rule for traffic.
   * 
   * @example
   * [{"conditionType":"content","conditions":[{"key":"name","operator":"EQ","strategy":"PARAM","values":["jim"]},{"key":"name","operator":"EQ","strategy":"COOKIE","values":["jim"]}],"percent":100,"protocol":"SPRINGCLOUD","triggerPolicy":"AND"}]
   */
  rules?: string;
  /**
   * @remarks
   * The description of the traffic rule.
   * 
   * @example
   * Canary batch release completed. Confirmed to proceed to the next batch.
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
   * The execution mode for the next batch in a phased release.
   * 
   * - Automatic: The next batch is automatically executed.
   * 
   * - Manual: The next batch is manually executed.
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
   * Application scale-up
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
   * The classification of the change process.
   * 
   * @example
   * Application Scale Out
   */
  coType?: string;
  /**
   * @remarks
   * The time when the change process was created.
   * 
   * @example
   * 2019-11-13 14:23:46
   */
  createTime?: string;
  /**
   * @remarks
   * The owner of the change process.
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
  pipelineInfoList?: GetChangeOrderInfoResponseBodyChangeOrderInfoPipelineInfoList;
  /**
   * @remarks
   * The status of the change.
   * 
   * - 0: ready
   * 
   * - 1: in progress
   * 
   * - 2: successful
   * 
   * - 3: failed
   * 
   * - 6: stopped
   * 
   * - 7: partially successful
   * 
   * - 8: waiting for manual confirmation to proceed with the next batch in manual phased release mode
   * 
   * - 9: waiting for the next batch to be executed in automatic phased release mode
   * 
   * - 10: failed due to a system exception
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether rollback is supported.
   * 
   * - true: Rollback is supported.
   * 
   * - false: Rollback is not supported.
   * 
   * @example
   * false
   */
  supportRollback?: boolean;
  targets?: GetChangeOrderInfoResponseBodyChangeOrderInfoTargets;
  /**
   * @remarks
   * The throttling rule.
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
   * The status of the API call or a POP error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4JFR-FV9F***************
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the change process.
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


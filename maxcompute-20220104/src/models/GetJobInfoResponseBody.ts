// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInfoResponseBodyDataJobSubStatusList extends $dara.Model {
  code?: number;
  description?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataSceneResults extends $dara.Model {
  description?: string;
  params?: { [key: string]: string };
  scene?: string;
  sceneTag?: string;
  summary?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      params: 'params',
      scene: 'scene',
      sceneTag: 'sceneTag',
      summary: 'summary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scene: 'string',
      sceneTag: 'string',
      summary: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyData extends $dara.Model {
  cuUsage?: number;
  endAtTime?: number;
  extNodeId?: string;
  extNodeOnDuty?: string;
  extPlantFrom?: string;
  inputBytes?: number;
  instanceId?: string;
  jobOwner?: string;
  jobSubStatusList?: GetJobInfoResponseBodyDataJobSubStatusList[];
  jobType?: string;
  memoryUsage?: number;
  priority?: number;
  project?: string;
  quotaNickname?: string;
  quotaType?: string;
  region?: string;
  runningAtTime?: number;
  runningTime?: number;
  sceneResults?: GetJobInfoResponseBodyDataSceneResults[];
  signature?: string;
  status?: string;
  submittedAtTime?: number;
  tenantId?: string;
  totalTime?: number;
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      cuUsage: 'cuUsage',
      endAtTime: 'endAtTime',
      extNodeId: 'extNodeId',
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
      inputBytes: 'inputBytes',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      jobSubStatusList: 'jobSubStatusList',
      jobType: 'jobType',
      memoryUsage: 'memoryUsage',
      priority: 'priority',
      project: 'project',
      quotaNickname: 'quotaNickname',
      quotaType: 'quotaType',
      region: 'region',
      runningAtTime: 'runningAtTime',
      runningTime: 'runningTime',
      sceneResults: 'sceneResults',
      signature: 'signature',
      status: 'status',
      submittedAtTime: 'submittedAtTime',
      tenantId: 'tenantId',
      totalTime: 'totalTime',
      waitingTime: 'waitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuUsage: 'number',
      endAtTime: 'number',
      extNodeId: 'string',
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
      inputBytes: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      jobSubStatusList: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataJobSubStatusList },
      jobType: 'string',
      memoryUsage: 'number',
      priority: 'number',
      project: 'string',
      quotaNickname: 'string',
      quotaType: 'string',
      region: 'string',
      runningAtTime: 'number',
      runningTime: 'number',
      sceneResults: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataSceneResults },
      signature: 'string',
      status: 'string',
      submittedAtTime: 'number',
      tenantId: 'string',
      totalTime: 'number',
      waitingTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobSubStatusList)) {
      $dara.Model.validateArray(this.jobSubStatusList);
    }
    if(Array.isArray(this.sceneResults)) {
      $dara.Model.validateArray(this.sceneResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBody extends $dara.Model {
  data?: GetJobInfoResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetJobInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
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


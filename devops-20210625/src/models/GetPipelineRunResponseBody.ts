// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunResponseBodyPipelineRunSourcesData extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * {}
   */
  commint?: string;
  /**
   * @example
   * http://codeup.aliyun.com/a.git
   */
  repo?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commint: 'commint',
      repo: 'repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commint: 'string',
      repo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunSources extends $dara.Model {
  data?: GetPipelineRunResponseBodyPipelineRunSourcesData;
  /**
   * @example
   * assaaaaaasasasa
   */
  sign?: string;
  /**
   * @example
   * Codeup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      sign: 'sign',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPipelineRunResponseBodyPipelineRunSourcesData,
      sign: 'string',
      type: 'string',
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

export class GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions extends $dara.Model {
  /**
   * @example
   * true
   */
  disable?: boolean;
  /**
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @example
   * PassPipelineValidate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs extends $dara.Model {
  actions?: GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions[];
  /**
   * @example
   * 1586863220000
   */
  endTime?: number;
  /**
   * @example
   * 21212
   */
  id?: number;
  /**
   * @example
   * java构建
   */
  name?: string;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 1586863220000
   */
  startTime?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      endTime: 'endTime',
      id: 'id',
      name: 'name',
      params: 'params',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions },
      endTime: 'number',
      id: 'number',
      name: 'string',
      params: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunStagesStageInfo extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  endTime?: number;
  jobs?: GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs[];
  /**
   * @example
   * Java构建
   */
  name?: string;
  /**
   * @example
   * 1586863220000
   */
  startTime?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      jobs: 'jobs',
      name: 'name',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      jobs: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunStagesStageInfoJobs },
      name: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRunStages extends $dara.Model {
  /**
   * @example
   * Java构建
   */
  name?: string;
  stageInfo?: GetPipelineRunResponseBodyPipelineRunStagesStageInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      stageInfo: 'stageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      stageInfo: GetPipelineRunResponseBodyPipelineRunStagesStageInfo,
    };
  }

  validate() {
    if(this.stageInfo && typeof (this.stageInfo as any).validate === 'function') {
      (this.stageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineRun extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 1111111111
   */
  creatorAccountId?: string;
  /**
   * @example
   * 11111111111
   */
  modifierAccountId?: string;
  /**
   * @example
   * 1234
   */
  pipelineId?: number;
  /**
   * @example
   * 1
   */
  pipelineRunId?: number;
  sources?: GetPipelineRunResponseBodyPipelineRunSources[];
  stageGroup?: string[][];
  stages?: GetPipelineRunResponseBodyPipelineRunStages[];
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 1
   */
  triggerMode?: number;
  /**
   * @example
   * 1586863220000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      modifierAccountId: 'modifierAccountId',
      pipelineId: 'pipelineId',
      pipelineRunId: 'pipelineRunId',
      sources: 'sources',
      stageGroup: 'stageGroup',
      stages: 'stages',
      status: 'status',
      triggerMode: 'triggerMode',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorAccountId: 'string',
      modifierAccountId: 'string',
      pipelineId: 'number',
      pipelineRunId: 'number',
      sources: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunSources },
      stageGroup: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      stages: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineRunStages },
      status: 'string',
      triggerMode: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    if(Array.isArray(this.stageGroup)) {
      $dara.Model.validateArray(this.stageGroup);
    }
    if(Array.isArray(this.stages)) {
      $dara.Model.validateArray(this.stages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  pipelineRun?: GetPipelineRunResponseBodyPipelineRun;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      pipelineRun: 'pipelineRun',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      pipelineRun: GetPipelineRunResponseBodyPipelineRun,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pipelineRun && typeof (this.pipelineRun as any).validate === 'function') {
      (this.pipelineRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReleaseStagePipelineRunResponseBodyPipelineRunSourcesData extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * {}
   */
  commit?: string;
  /**
   * @example
   * http://codeup.aliyun.com/a.git
   */
  repo?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commit: 'commit',
      repo: 'repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commit: 'string',
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

export class GetReleaseStagePipelineRunResponseBodyPipelineRunSources extends $dara.Model {
  data?: GetReleaseStagePipelineRunResponseBodyPipelineRunSourcesData;
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
      data: GetReleaseStagePipelineRunResponseBodyPipelineRunSourcesData,
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

export class GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions extends $dara.Model {
  /**
   * @example
   * true
   */
  disable?: boolean;
  /**
   * @example
   * {}
   */
  params?: any;
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
      params: 'any',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfoJobs extends $dara.Model {
  actions?: GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions[];
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
      actions: { 'type': 'array', 'itemType': GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfoJobsActions },
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

export class GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfo extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  endTime?: number;
  jobs?: GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfoJobs[];
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
      jobs: { 'type': 'array', 'itemType': GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfoJobs },
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

export class GetReleaseStagePipelineRunResponseBodyPipelineRunStages extends $dara.Model {
  name?: string;
  stageInfo?: GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      stageInfo: 'stageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      stageInfo: GetReleaseStagePipelineRunResponseBodyPipelineRunStagesStageInfo,
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

export class GetReleaseStagePipelineRunResponseBodyPipelineRun extends $dara.Model {
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
  sources?: GetReleaseStagePipelineRunResponseBodyPipelineRunSources[];
  stageGroup?: string[][];
  stages?: GetReleaseStagePipelineRunResponseBodyPipelineRunStages[];
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
      sources: { 'type': 'array', 'itemType': GetReleaseStagePipelineRunResponseBodyPipelineRunSources },
      stageGroup: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      stages: { 'type': 'array', 'itemType': GetReleaseStagePipelineRunResponseBodyPipelineRunStages },
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

export class GetReleaseStagePipelineRunResponseBody extends $dara.Model {
  pipelineRun?: GetReleaseStagePipelineRunResponseBodyPipelineRun;
  static names(): { [key: string]: string } {
    return {
      pipelineRun: 'pipelineRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineRun: GetReleaseStagePipelineRunResponseBodyPipelineRun,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPipelineListResponseBodyNonExistPids extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineListPipelineExtendConfig extends $dara.Model {
  isBoostNew?: boolean;
  maxMultiSpeed?: number;
  multiSpeedDowngradePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      isBoostNew: 'IsBoostNew',
      maxMultiSpeed: 'MaxMultiSpeed',
      multiSpeedDowngradePolicy: 'MultiSpeedDowngradePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBoostNew: 'boolean',
      maxMultiSpeed: 'number',
      multiSpeedDowngradePolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig extends $dara.Model {
  mqTag?: string;
  mqTopic?: string;
  queueName?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      mqTag: 'MqTag',
      mqTopic: 'MqTopic',
      queueName: 'QueueName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTag: 'string',
      mqTopic: 'string',
      queueName: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineListPipeline extends $dara.Model {
  extendConfig?: QueryPipelineListResponseBodyPipelineListPipelineExtendConfig;
  id?: string;
  name?: string;
  notifyConfig?: QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig;
  quotaAllocate?: number;
  role?: string;
  speed?: string;
  speedLevel?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      extendConfig: 'ExtendConfig',
      id: 'Id',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      quotaAllocate: 'QuotaAllocate',
      role: 'Role',
      speed: 'Speed',
      speedLevel: 'SpeedLevel',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfig: QueryPipelineListResponseBodyPipelineListPipelineExtendConfig,
      id: 'string',
      name: 'string',
      notifyConfig: QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
      state: 'string',
    };
  }

  validate() {
    if(this.extendConfig && typeof (this.extendConfig as any).validate === 'function') {
      (this.extendConfig as any).validate();
    }
    if(this.notifyConfig && typeof (this.notifyConfig as any).validate === 'function') {
      (this.notifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineList extends $dara.Model {
  pipeline?: QueryPipelineListResponseBodyPipelineListPipeline[];
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: { 'type': 'array', 'itemType': QueryPipelineListResponseBodyPipelineListPipeline },
    };
  }

  validate() {
    if(Array.isArray(this.pipeline)) {
      $dara.Model.validateArray(this.pipeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBody extends $dara.Model {
  nonExistPids?: QueryPipelineListResponseBodyNonExistPids;
  pipelineList?: QueryPipelineListResponseBodyPipelineList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1C538EAA-ACAF-5AD8-B091-A72C63007149
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistPids: 'NonExistPids',
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistPids: QueryPipelineListResponseBodyNonExistPids,
      pipelineList: QueryPipelineListResponseBodyPipelineList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nonExistPids && typeof (this.nonExistPids as any).validate === 'function') {
      (this.nonExistPids as any).validate();
    }
    if(this.pipelineList && typeof (this.pipelineList as any).validate === 'function') {
      (this.pipelineList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineResponseBodyExecutePolicyRunOnce extends $dara.Model {
  /**
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @example
   * 1735747200000
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      toTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyExecutePolicyScheduled extends $dara.Model {
  /**
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @example
   * 1h
   */
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      interval: 'interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      interval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyExecutePolicy extends $dara.Model {
  /**
   * @example
   * Scheduled
   */
  mode?: string;
  runOnce?: GetPipelineResponseBodyExecutePolicyRunOnce;
  scheduled?: GetPipelineResponseBodyExecutePolicyScheduled;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      runOnce: 'runOnce',
      scheduled: 'scheduled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      runOnce: GetPipelineResponseBodyExecutePolicyRunOnce,
      scheduled: GetPipelineResponseBodyExecutePolicyScheduled,
    };
  }

  validate() {
    if(this.runOnce && typeof (this.runOnce as any).validate === 'function') {
      (this.runOnce as any).validate();
    }
    if(this.scheduled && typeof (this.scheduled as any).validate === 'function') {
      (this.scheduled as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelineNodes extends $dara.Model {
  /**
   * @example
   * node-1
   */
  id?: string;
  parameters?: { [key: string]: any };
  /**
   * @example
   * transform
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipeline extends $dara.Model {
  nodes?: GetPipelineResponseBodyPipelineNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetPipelineResponseBodyPipelineNodes },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodySinkDataset extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * my-dataset
   */
  dataset?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      dataset: 'dataset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      dataset: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodySink extends $dara.Model {
  dataset?: GetPipelineResponseBodySinkDataset;
  /**
   * @example
   * Dataset
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: GetPipelineResponseBodySinkDataset,
      type: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodySourceLogstore extends $dara.Model {
  /**
   * @example
   * my-sls-logstore
   */
  logstore?: string;
  /**
   * @example
   * my-sls-project
   */
  project?: string;
  /**
   * @example
   * * | SELECT *
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodySource extends $dara.Model {
  logstore?: GetPipelineResponseBodySourceLogstore;
  /**
   * @example
   * SLS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: GetPipelineResponseBodySourceLogstore,
      type: 'string',
    };
  }

  validate() {
    if(this.logstore && typeof (this.logstore as any).validate === 'function') {
      (this.logstore as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 我的流水线
   */
  description?: string;
  executePolicy?: GetPipelineResponseBodyExecutePolicy;
  pipeline?: GetPipelineResponseBodyPipeline;
  /**
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  sink?: GetPipelineResponseBodySink;
  source?: GetPipelineResponseBodySource;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  updateTime?: string;
  /**
   * @example
   * my-workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      executePolicy: 'executePolicy',
      pipeline: 'pipeline',
      pipelineName: 'pipelineName',
      regionId: 'regionId',
      requestId: 'requestId',
      sink: 'sink',
      source: 'source',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      executePolicy: GetPipelineResponseBodyExecutePolicy,
      pipeline: GetPipelineResponseBodyPipeline,
      pipelineName: 'string',
      regionId: 'string',
      requestId: 'string',
      sink: GetPipelineResponseBodySink,
      source: GetPipelineResponseBodySource,
      updateTime: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.executePolicy && typeof (this.executePolicy as any).validate === 'function') {
      (this.executePolicy as any).validate();
    }
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
    }
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


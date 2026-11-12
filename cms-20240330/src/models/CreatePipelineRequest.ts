// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRequestExecutePolicyRunOnce extends $dara.Model {
  /**
   * @remarks
   * The start timestamp.
   * 
   * @example
   * 1772519013
   */
  fromTime?: number;
  /**
   * @remarks
   * The end timestamp.
   * 
   * @example
   * 1772519013
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

export class CreatePipelineRequestExecutePolicyScheduled extends $dara.Model {
  /**
   * @remarks
   * The start timestamp.
   * 
   * @example
   * 1772519013
   */
  fromTime?: number;
  /**
   * @remarks
   * The time interval.
   * 
   * @example
   * 86400
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

export class CreatePipelineRequestExecutePolicy extends $dara.Model {
  /**
   * @remarks
   * The execution mode.
   * 
   * @example
   * runOnce
   */
  mode?: string;
  /**
   * @remarks
   * The configuration for one-time execution.
   */
  runOnce?: CreatePipelineRequestExecutePolicyRunOnce;
  /**
   * @remarks
   * The configuration for scheduled execution.
   */
  scheduled?: CreatePipelineRequestExecutePolicyScheduled;
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
      runOnce: CreatePipelineRequestExecutePolicyRunOnce,
      scheduled: CreatePipelineRequestExecutePolicyScheduled,
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

export class CreatePipelineRequestPipelineNodes extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * node_1
   */
  id?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * {"output":"ID,key_0,key_2,key_3,key_4","workspace":"workspace-test-dataset","field":"key_0","global":true,"dataset":"dataset_1"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * dedup-fuzzy
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

export class CreatePipelineRequestPipeline extends $dara.Model {
  /**
   * @remarks
   * The nodes.
   */
  nodes?: CreatePipelineRequestPipelineNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': CreatePipelineRequestPipelineNodes },
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

export class CreatePipelineRequestSinkDataset extends $dara.Model {
  /**
   * @remarks
   * The dataset.
   * 
   * @example
   * dataset_1
   */
  dataset?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSink extends $dara.Model {
  /**
   * @remarks
   * The dataset information.
   */
  dataset?: CreatePipelineRequestSinkDataset;
  /**
   * @remarks
   * The sink type.
   * 
   * @example
   * dataset
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
      dataset: CreatePipelineRequestSinkDataset,
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

export class CreatePipelineRequestSourceLogstore extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The filter statement.
   * 
   * @example
   * status:500 and method:GET
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

export class CreatePipelineRequestSource extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service Logstore information.
   */
  logstore?: CreatePipelineRequestSourceLogstore;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * logstore
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
      logstore: CreatePipelineRequestSourceLogstore,
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

export class CreatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The execution policy.
   */
  executePolicy?: CreatePipelineRequestExecutePolicy;
  /**
   * @remarks
   * The pipeline information.
   */
  pipeline?: CreatePipelineRequestPipeline;
  /**
   * @remarks
   * The name of the pipeline.
   * 
   * @example
   * pipeline-name-1
   */
  pipelineName?: string;
  /**
   * @remarks
   * The sink.
   */
  sink?: CreatePipelineRequestSink;
  /**
   * @remarks
   * The data source.
   */
  source?: CreatePipelineRequestSource;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      executePolicy: 'executePolicy',
      pipeline: 'pipeline',
      pipelineName: 'pipelineName',
      sink: 'sink',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      executePolicy: CreatePipelineRequestExecutePolicy,
      pipeline: CreatePipelineRequestPipeline,
      pipelineName: 'string',
      sink: CreatePipelineRequestSink,
      source: CreatePipelineRequestSource,
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


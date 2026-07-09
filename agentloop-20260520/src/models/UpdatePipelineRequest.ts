// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineRequestExecutePolicyRunOnce extends $dara.Model {
  /**
   * @remarks
   * The data processing start time, in UNIX millisecond timestamp.
   * 
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @remarks
   * The data processing end time, in UNIX millisecond timestamp.
   * 
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

export class UpdatePipelineRequestExecutePolicyScheduled extends $dara.Model {
  /**
   * @remarks
   * The scheduling start time, in UNIX millisecond timestamp.
   * 
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @remarks
   * The scheduling interval, such as 1h.
   * 
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

export class UpdatePipelineRequestExecutePolicy extends $dara.Model {
  /**
   * @remarks
   * The scheduling mode, such as Scheduled (timed scheduling) or RunOnce (one-time execution).
   * 
   * @example
   * Scheduled
   */
  mode?: string;
  /**
   * @remarks
   * The configuration for one-time execution.
   */
  runOnce?: UpdatePipelineRequestExecutePolicyRunOnce;
  /**
   * @remarks
   * The timed scheduling configuration.
   */
  scheduled?: UpdatePipelineRequestExecutePolicyScheduled;
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
      runOnce: UpdatePipelineRequestExecutePolicyRunOnce,
      scheduled: UpdatePipelineRequestExecutePolicyScheduled,
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

export class UpdatePipelineRequestPipelineNodes extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * node-1
   */
  id?: string;
  /**
   * @remarks
   * The node parameters in key-value format. The parameters vary by node type.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The node type.
   * 
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

export class UpdatePipelineRequestPipeline extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: UpdatePipelineRequestPipelineNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': UpdatePipelineRequestPipelineNodes },
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

export class UpdatePipelineRequestSinkDataset extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The name of the destination dataset.
   * 
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

export class UpdatePipelineRequestSink extends $dara.Model {
  /**
   * @remarks
   * The destination dataset configuration.
   */
  dataset?: UpdatePipelineRequestSinkDataset;
  /**
   * @remarks
   * The sink type, such as Dataset.
   * 
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
      dataset: UpdatePipelineRequestSinkDataset,
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

export class UpdatePipelineRequestSourceLogstore extends $dara.Model {
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * my-sls-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The data filtered query statement in SLS query/analysis syntax.
   * 
   * @example
   * * | SELECT *
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
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

export class UpdatePipelineRequestSource extends $dara.Model {
  /**
   * @remarks
   * The SLS Logstore datasource config.
   */
  logstore?: UpdatePipelineRequestSourceLogstore;
  /**
   * @remarks
   * The data source type, such as SLS.
   * 
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
      logstore: UpdatePipelineRequestSourceLogstore,
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

export class UpdatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the pipeline, which helps users understand its purpose.
   * 
   * @example
   * 我的流水线
   */
  description?: string;
  /**
   * @remarks
   * The execution policy. If specified, the existing execution policy is entirely overwritten.
   */
  executePolicy?: UpdatePipelineRequestExecutePolicy;
  /**
   * @remarks
   * The pipeline configuration (node orchestration). If specified, the existing pipeline configuration is entirely overwritten.
   */
  pipeline?: UpdatePipelineRequestPipeline;
  /**
   * @remarks
   * The pipeline sink (data write destination). If specified, the existing sink configuration is entirely overwritten.
   */
  sink?: UpdatePipelineRequestSink;
  /**
   * @remarks
   * The pipeline data source. If specified, the existing source configuration is entirely overwritten.
   */
  source?: UpdatePipelineRequestSource;
  /**
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      executePolicy: 'executePolicy',
      pipeline: 'pipeline',
      sink: 'sink',
      source: 'source',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      executePolicy: UpdatePipelineRequestExecutePolicy,
      pipeline: UpdatePipelineRequestPipeline,
      sink: UpdatePipelineRequestSink,
      source: UpdatePipelineRequestSource,
      clientToken: 'string',
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


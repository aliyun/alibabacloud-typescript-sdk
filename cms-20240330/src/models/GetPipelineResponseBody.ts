// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineResponseBodyExecutePolicyRunOnce extends $dara.Model {
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

export class GetPipelineResponseBodyExecutePolicyScheduled extends $dara.Model {
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

export class GetPipelineResponseBodyExecutePolicy extends $dara.Model {
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
  runOnce?: GetPipelineResponseBodyExecutePolicyRunOnce;
  /**
   * @remarks
   * The configuration for scheduled execution.
   */
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

export class GetPipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The nodes.
   */
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

export class GetPipelineResponseBodySink extends $dara.Model {
  /**
   * @remarks
   * The dataset information.
   */
  dataset?: GetPipelineResponseBodySinkDataset;
  /**
   * @remarks
   * The output destination type.
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
   * @remarks
   * The Simple Log Service Logstore name.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The Simple Log Service project name.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The filter statement for the Simple Log Service Logstore.
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

export class GetPipelineResponseBodySource extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service Logstore information.
   */
  logstore?: GetPipelineResponseBodySourceLogstore;
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
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * The execution policy.
   */
  executePolicy?: GetPipelineResponseBodyExecutePolicy;
  /**
   * @remarks
   * The pipeline information.
   */
  pipeline?: GetPipelineResponseBodyPipeline;
  /**
   * @remarks
   * The pipeline name.
   * 
   * @example
   * pipeline-name-1
   */
  pipelineName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3430AE20-AFFF-597C-B553-2DF04B2933AA
   */
  requestId?: string;
  /**
   * @remarks
   * The output destination.
   */
  sink?: GetPipelineResponseBodySink;
  /**
   * @remarks
   * The data source.
   */
  source?: GetPipelineResponseBodySource;
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  updateTime?: string;
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


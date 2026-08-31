// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewPipelineRequestPipelineNodes extends $dara.Model {
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
   * The node parameters in key-value format. The parameters vary based on the node type.
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

export class PreviewPipelineRequestPipeline extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: PreviewPipelineRequestPipelineNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': PreviewPipelineRequestPipelineNodes },
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

export class PreviewPipelineRequestSourceDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the source dataset.
   * 
   * @example
   * my-dataset
   */
  dataset?: string;
  /**
   * @remarks
   * The filter condition for dataset data.
   * 
   * @example
   * status = \\"pending\\"
   */
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: 'string',
      filter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewPipelineRequestSourceInputFields extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * question
   */
  name?: string;
  /**
   * @remarks
   * The field type. Valid values: text, long, double, and json.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class PreviewPipelineRequestSourceLogstore extends $dara.Model {
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
   * The name of the SLS project.
   * 
   * @example
   * my-sls-project
   */
  project?: string;
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

export class PreviewPipelineRequestSource extends $dara.Model {
  /**
   * @remarks
   * The Dataset datasource config under the current AgentSpace.
   */
  dataset?: PreviewPipelineRequestSourceDataset;
  /**
   * @remarks
   * The input fields and field types. This parameter applies to all data source types.
   */
  inputFields?: PreviewPipelineRequestSourceInputFields[];
  /**
   * @remarks
   * The SLS Logstore datasource config.
   */
  logstore?: PreviewPipelineRequestSourceLogstore;
  /**
   * @remarks
   * The data source type. Currently, Simple Log Service (SLS) is supported.
   * 
   * @example
   * SLS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      inputFields: 'inputFields',
      logstore: 'logstore',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: PreviewPipelineRequestSourceDataset,
      inputFields: { 'type': 'array', 'itemType': PreviewPipelineRequestSourceInputFields },
      logstore: PreviewPipelineRequestSourceLogstore,
      type: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    if(Array.isArray(this.inputFields)) {
      $dara.Model.validateArray(this.inputFields);
    }
    if(this.logstore && typeof (this.logstore as any).validate === 'function') {
      (this.logstore as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewPipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the preview data window, in UNIX seconds.
   * 
   * @example
   * 1735660800
   */
  fromTime?: number;
  /**
   * @remarks
   * The pipeline configuration, which defines the node orchestration.
   */
  pipeline?: PreviewPipelineRequestPipeline;
  /**
   * @remarks
   * The pipeline data source.
   */
  source?: PreviewPipelineRequestSource;
  /**
   * @remarks
   * The end time of the preview data window, in UNIX seconds.
   * 
   * @example
   * 1735747200
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      pipeline: 'pipeline',
      source: 'source',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      pipeline: PreviewPipelineRequestPipeline,
      source: PreviewPipelineRequestSource,
      toTime: 'number',
    };
  }

  validate() {
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
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


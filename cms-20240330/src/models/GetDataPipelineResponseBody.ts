// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigRules extends $dara.Model {
  /**
   * @remarks
   * The prefix length to retain.
   * 
   * @example
   * 2
   */
  keepPrefix?: number;
  /**
   * @remarks
   * The suffix length to retain.
   * 
   * @example
   * 2
   */
  keepSuffix?: number;
  /**
   * @remarks
   * The sensitive keywords.
   */
  keys?: string[];
  /**
   * @remarks
   * The mask character.
   * 
   * @example
   * *
   */
  maskChar?: string;
  /**
   * @remarks
   * The masking mode.
   * 
   * @example
   * keyword
   */
  mode?: string;
  /**
   * @remarks
   * The built-in sensitive types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      keepPrefix: 'keepPrefix',
      keepSuffix: 'keepSuffix',
      keys: 'keys',
      maskChar: 'maskChar',
      mode: 'mode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepPrefix: 'number',
      keepSuffix: 'number',
      keys: { 'type': 'array', 'itemType': 'string' },
      maskChar: 'string',
      mode: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigSelector extends $dara.Model {
  /**
   * @remarks
   * The list of service names.
   * 
   * @example
   * ["checkout-*","order-service"]
   */
  serviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceNames: 'serviceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigTarget extends $dara.Model {
  /**
   * @remarks
   * The target workspace.
   * 
   * @example
   * target-checkout-ws
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetDataPipelineResponseBodyPipelineOutputsProcessorsConfig extends $dara.Model {
  /**
   * @remarks
   * The application list.
   */
  applications?: string[];
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * attributes["http.route"] != "/health"
   */
  expression?: string;
  /**
   * @remarks
   * The field list.
   */
  fields?: string[];
  /**
   * @remarks
   * The masking rule list.
   */
  rules?: GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigRules[];
  /**
   * @remarks
   * The SPL script.
   * 
   * @example
   * * | extend latency_ms = duration / 1000000
   */
  script?: string;
  /**
   * @remarks
   * The service selector.
   */
  selector?: GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigSelector;
  /**
   * @remarks
   * The processing target.
   */
  target?: GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigTarget;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      expression: 'expression',
      fields: 'fields',
      rules: 'rules',
      script: 'script',
      selector: 'selector',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': 'string' },
      expression: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      rules: { 'type': 'array', 'itemType': GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigRules },
      script: 'string',
      selector: GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigSelector,
      target: GetDataPipelineResponseBodyPipelineOutputsProcessorsConfigTarget,
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.selector && typeof (this.selector as any).validate === 'function') {
      (this.selector as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineOutputsProcessors extends $dara.Model {
  /**
   * @remarks
   * The processor configuration.
   */
  config?: GetDataPipelineResponseBodyPipelineOutputsProcessorsConfig;
  /**
   * @remarks
   * The processor name.
   * 
   * @example
   * drop-health-check
   */
  name?: string;
  /**
   * @remarks
   * The processor type.
   * 
   * @example
   * filter
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetDataPipelineResponseBodyPipelineOutputsProcessorsConfig,
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineOutputs extends $dara.Model {
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * checkout_route
   */
  name?: string;
  /**
   * @remarks
   * The branch processors.
   */
  processors?: GetDataPipelineResponseBodyPipelineOutputsProcessors[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      processors: { 'type': 'array', 'itemType': GetDataPipelineResponseBodyPipelineOutputsProcessors },
    };
  }

  validate() {
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineProcessorsConfigRules extends $dara.Model {
  /**
   * @remarks
   * The prefix length to retain.
   * 
   * @example
   * 2
   */
  keepPrefix?: number;
  /**
   * @remarks
   * The suffix length to retain.
   * 
   * @example
   * 2
   */
  keepSuffix?: number;
  /**
   * @remarks
   * The sensitive keywords.
   */
  keys?: string[];
  /**
   * @remarks
   * The mask character.
   * 
   * @example
   * *
   */
  maskChar?: string;
  /**
   * @remarks
   * The masking mode.
   * 
   * @example
   * keyword
   */
  mode?: string;
  /**
   * @remarks
   * The built-in sensitive types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      keepPrefix: 'keepPrefix',
      keepSuffix: 'keepSuffix',
      keys: 'keys',
      maskChar: 'maskChar',
      mode: 'mode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepPrefix: 'number',
      keepSuffix: 'number',
      keys: { 'type': 'array', 'itemType': 'string' },
      maskChar: 'string',
      mode: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineProcessorsConfigSelector extends $dara.Model {
  /**
   * @remarks
   * The list of service names.
   * 
   * @example
   * ["checkout-*","order-service"]
   */
  serviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceNames: 'serviceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineProcessorsConfigTarget extends $dara.Model {
  /**
   * @remarks
   * The target workspace.
   * 
   * @example
   * target-checkout-ws
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetDataPipelineResponseBodyPipelineProcessorsConfig extends $dara.Model {
  /**
   * @remarks
   * The application list.
   */
  applications?: string[];
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * attributes["http.route"] != "/health"
   */
  expression?: string;
  /**
   * @remarks
   * The field list.
   */
  fields?: string[];
  /**
   * @remarks
   * The masking rule list.
   */
  rules?: GetDataPipelineResponseBodyPipelineProcessorsConfigRules[];
  /**
   * @remarks
   * The SPL script.
   * 
   * @example
   * * | extend latency_ms = duration / 1000000
   */
  script?: string;
  /**
   * @remarks
   * The service selector.
   */
  selector?: GetDataPipelineResponseBodyPipelineProcessorsConfigSelector;
  /**
   * @remarks
   * The processing target.
   */
  target?: GetDataPipelineResponseBodyPipelineProcessorsConfigTarget;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      expression: 'expression',
      fields: 'fields',
      rules: 'rules',
      script: 'script',
      selector: 'selector',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': 'string' },
      expression: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      rules: { 'type': 'array', 'itemType': GetDataPipelineResponseBodyPipelineProcessorsConfigRules },
      script: 'string',
      selector: GetDataPipelineResponseBodyPipelineProcessorsConfigSelector,
      target: GetDataPipelineResponseBodyPipelineProcessorsConfigTarget,
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.selector && typeof (this.selector as any).validate === 'function') {
      (this.selector as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineProcessors extends $dara.Model {
  /**
   * @remarks
   * The processor configuration.
   */
  config?: GetDataPipelineResponseBodyPipelineProcessorsConfig;
  /**
   * @remarks
   * The processor name.
   * 
   * @example
   * drop-health-check
   */
  name?: string;
  /**
   * @remarks
   * The processor type.
   * 
   * @example
   * filter
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetDataPipelineResponseBodyPipelineProcessorsConfig,
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineSinks extends $dara.Model {
  /**
   * @remarks
   * The list of datasets.
   */
  datasets?: string[];
  /**
   * @remarks
   * SLS Logstore
   * 
   * @example
   * error-spans
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the output destination.
   * 
   * @example
   * error-archive
   */
  name?: string;
  /**
   * @remarks
   * SLS Project
   * 
   * @example
   * customer-project
   */
  project?: string;
  /**
   * @remarks
   * The type of the output destination.
   * 
   * @example
   * logstore
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      datasets: 'datasets',
      logstore: 'logstore',
      name: 'name',
      project: 'project',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': 'string' },
      logstore: 'string',
      name: 'string',
      project: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineSourceConfigTimeRange extends $dara.Model {
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1722844800
   */
  from?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1722848400
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineSourceConfig extends $dara.Model {
  /**
   * @remarks
   * The run mode.
   * 
   * @example
   * continuous
   */
  runMode?: string;
  /**
   * @remarks
   * The read start point.
   * 
   * @example
   * latest
   */
  startFrom?: string;
  /**
   * @remarks
   * The backfill time range.
   */
  timeRange?: GetDataPipelineResponseBodyPipelineSourceConfigTimeRange;
  static names(): { [key: string]: string } {
    return {
      runMode: 'runMode',
      startFrom: 'startFrom',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runMode: 'string',
      startFrom: 'string',
      timeRange: GetDataPipelineResponseBodyPipelineSourceConfigTimeRange,
    };
  }

  validate() {
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipelineSource extends $dara.Model {
  /**
   * @remarks
   * The datasource config.
   */
  config?: GetDataPipelineResponseBodyPipelineSourceConfig;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * traces-default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetDataPipelineResponseBodyPipelineSourceConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataPipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The time when the pipeline was created.
   * 
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-08-10T05:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * Export selected trace services to the target workspace.
   */
  description?: string;
  /**
   * @remarks
   * The pipeline type.
   * 
   * This parameter is required.
   * 
   * @example
   * export
   */
  kind?: string;
  /**
   * @remarks
   * The named outputs.
   * 
   * This parameter is required.
   */
  outputs?: GetDataPipelineResponseBodyPipelineOutputs[];
  /**
   * @remarks
   * The pipeline name.
   * 
   * This parameter is required.
   * 
   * @example
   * export-traces-to-prod
   */
  pipelineName?: string;
  /**
   * @remarks
   * The common processors.
   * 
   * This parameter is required.
   */
  processors?: GetDataPipelineResponseBodyPipelineProcessors[];
  /**
   * @remarks
   * The signal type.
   * 
   * This parameter is required.
   * 
   * @example
   * traces
   */
  signalType?: string;
  /**
   * @remarks
   * The output destinations.
   * 
   * This parameter is required.
   */
  sinks?: GetDataPipelineResponseBodyPipelineSinks[];
  /**
   * @remarks
   * The data source.
   * 
   * This parameter is required.
   */
  source?: GetDataPipelineResponseBodyPipelineSource;
  /**
   * @remarks
   * The running status.
   * 
   * This parameter is required.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * Pipeline is running.
   */
  statusMessage?: string;
  /**
   * @remarks
   * The update time.
   * 
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-08-10T05:10:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The configuration version.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      kind: 'kind',
      outputs: 'outputs',
      pipelineName: 'pipelineName',
      processors: 'processors',
      signalType: 'signalType',
      sinks: 'sinks',
      source: 'source',
      status: 'status',
      statusMessage: 'statusMessage',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      kind: 'string',
      outputs: { 'type': 'array', 'itemType': GetDataPipelineResponseBodyPipelineOutputs },
      pipelineName: 'string',
      processors: { 'type': 'array', 'itemType': GetDataPipelineResponseBodyPipelineProcessors },
      signalType: 'string',
      sinks: { 'type': 'array', 'itemType': GetDataPipelineResponseBodyPipelineSinks },
      source: GetDataPipelineResponseBodyPipelineSource,
      status: 'string',
      statusMessage: 'string',
      updateTime: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    if(Array.isArray(this.sinks)) {
      $dara.Model.validateArray(this.sinks);
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

export class GetDataPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data pipeline.
   */
  pipeline?: GetDataPipelineResponseBodyPipeline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'pipeline',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: GetDataPipelineResponseBodyPipeline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


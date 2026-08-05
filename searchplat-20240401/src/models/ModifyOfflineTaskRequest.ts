// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfflineTaskRequestMeta extends $dara.Model {
  /**
   * @remarks
   * The access credential.
   * 
   * @example
   * OS-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The billing specification.
   * 
   * @example
   * small
   */
  computeResource?: string;
  /**
   * @remarks
   * The list of task labels.
   */
  labels?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * syh
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      computeResource: 'computeResource',
      labels: 'labels',
      regionId: 'regionId',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      computeResource: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfflineTaskRequestProcessors extends $dara.Model {
  /**
   * @remarks
   * The input parameters.
   */
  input?: { [key: string]: any };
  /**
   * @remarks
   * The name.
   * 
   * @example
   * processor1
   */
  name?: string;
  /**
   * @remarks
   * The output parameters.
   * 
   * @example
   * {
   * "vector": "syh_image_uri_multi-modal-embedding"
   * }
   */
  output?: { [key: string]: any };
  /**
   * @remarks
   * The processor parameters.
   * 
   * @example
   * {
   *   "service_id": "xxx"
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The type.
   * 
   * @example
   * document-analyze
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      name: 'name',
      output: 'output',
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      output: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.input) {
      $dara.Model.validateMap(this.input);
    }
    if(this.output) {
      $dara.Model.validateMap(this.output);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfflineTaskRequestSink extends $dara.Model {
  /**
   * @remarks
   * The data sink name.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The data sink configuration parameters, which are determined by the type.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The primary key field of the data sink.
   * 
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @remarks
   * The data sink schema.
   */
  schema?: { [key: string]: string }[];
  /**
   * @remarks
   * The data sink type.
   * 
   * @example
   * swift
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parameters: 'parameters',
      primaryKey: 'primaryKey',
      schema: 'schema',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      primaryKey: 'string',
      schema: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      type: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.schema)) {
      $dara.Model.validateArray(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfflineTaskRequestSource extends $dara.Model {
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * tmp-exec-pop-eTcMpC
   */
  name?: string;
  /**
   * @remarks
   * The datasource config parameters, which are determined by the type.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The primary key field of the data source.
   * 
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @remarks
   * The data source schema.
   */
  schema?: { [key: string]: string }[];
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * swift
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parameters: 'parameters',
      primaryKey: 'primaryKey',
      schema: 'schema',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      primaryKey: 'string',
      schema: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      type: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.schema)) {
      $dara.Model.validateArray(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfflineTaskRequestStatus extends $dara.Model {
  /**
   * @remarks
   * The task start time.
   * 
   * @example
   * 1744941600000
   */
  createTime?: number;
  /**
   * @remarks
   * The task stop time.
   * 
   * @example
   * 1744941600000
   */
  deleteTime?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * “”
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deleteTime: 'deleteTime',
      errorMessage: 'errorMessage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      deleteTime: 'number',
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfflineTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task metadata.
   */
  meta?: ModifyOfflineTaskRequestMeta;
  /**
   * @remarks
   * The task processing parameters.
   * 
   * @example
   * {
   *   "parameter1": {
   *        "key": "value"
   *     },
   *     "parameter2": {
   *          "key": "value"
   *      }
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The processing flow operators.
   */
  processors?: ModifyOfflineTaskRequestProcessors[];
  /**
   * @remarks
   * The data sink information.
   */
  sink?: ModifyOfflineTaskRequestSink[];
  /**
   * @remarks
   * The data source information.
   */
  source?: ModifyOfflineTaskRequestSource[];
  /**
   * @remarks
   * The task status.
   */
  status?: ModifyOfflineTaskRequestStatus;
  /**
   * @remarks
   * Specifies whether to validate the request parameters without performing the actual operation. Default value: false.
   * 
   * Valid values:
   * 
   * - **true**
   * 
   * - **false**.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      parameters: 'parameters',
      processors: 'processors',
      sink: 'sink',
      source: 'source',
      status: 'status',
      dryRun: 'dryRun',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: ModifyOfflineTaskRequestMeta,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      processors: { 'type': 'array', 'itemType': ModifyOfflineTaskRequestProcessors },
      sink: { 'type': 'array', 'itemType': ModifyOfflineTaskRequestSink },
      source: { 'type': 'array', 'itemType': ModifyOfflineTaskRequestSource },
      status: ModifyOfflineTaskRequestStatus,
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    if(Array.isArray(this.sink)) {
      $dara.Model.validateArray(this.sink);
    }
    if(Array.isArray(this.source)) {
      $dara.Model.validateArray(this.source);
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


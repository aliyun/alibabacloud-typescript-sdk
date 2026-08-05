// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartOfflineTaskResponseBodyResultMeta extends $dara.Model {
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
   * The task name.
   * 
   * @example
   * taskName
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartOfflineTaskResponseBodyResultProcessors extends $dara.Model {
  /**
   * @remarks
   * The input parameters.
   * 
   * @example
   * {
   *   "key": "content"
   * }
   */
  input?: { [key: string]: any };
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * processor1
   */
  name?: string;
  /**
   * @remarks
   * The processor processing parameters.
   * 
   * @example
   * {
   *   "service_id": "xxx"
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The data sink type.
   * 
   * @example
   * document-analyze
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      name: 'name',
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.input) {
      $dara.Model.validateMap(this.input);
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

export class StartOfflineTaskResponseBodyResultSink extends $dara.Model {
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * milvus-ali-cn-hangzhou-1
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
   * The type. Valid values:
   * - standard.
   * 
   * @example
   * ModuleRelation
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

export class StartOfflineTaskResponseBodyResultSource extends $dara.Model {
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * table1
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

export class StartOfflineTaskResponseBodyResultStatus extends $dara.Model {
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
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * OK
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

export class StartOfflineTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The metadata.
   */
  meta?: StartOfflineTaskResponseBodyResultMeta;
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
   * The processing operators.
   */
  processors?: StartOfflineTaskResponseBodyResultProcessors[];
  /**
   * @remarks
   * The data sink information.
   */
  sink?: StartOfflineTaskResponseBodyResultSink[];
  /**
   * @remarks
   * The source.
   */
  source?: StartOfflineTaskResponseBodyResultSource[];
  /**
   * @remarks
   * The task status. Valid values:
   * - PENDING: In progress.
   * - SUCCESS: Parsing succeeded.
   * - FAILED: Parsing failed.
   */
  status?: StartOfflineTaskResponseBodyResultStatus;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      parameters: 'parameters',
      processors: 'processors',
      sink: 'sink',
      source: 'source',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: StartOfflineTaskResponseBodyResultMeta,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      processors: { 'type': 'array', 'itemType': StartOfflineTaskResponseBodyResultProcessors },
      sink: { 'type': 'array', 'itemType': StartOfflineTaskResponseBodyResultSink },
      source: { 'type': 'array', 'itemType': StartOfflineTaskResponseBodyResultSource },
      status: StartOfflineTaskResponseBodyResultStatus,
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

export class StartOfflineTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CC93E65-6734-5060-BEF7-0EB0A4862BCF
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: StartOfflineTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: StartOfflineTaskResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


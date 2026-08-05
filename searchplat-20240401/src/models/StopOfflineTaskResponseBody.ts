// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopOfflineTaskResponseBodyResultMeta extends $dara.Model {
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
   * The name of the node.
   * 
   * @example
   * test
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

export class StopOfflineTaskResponseBodyResultProcessors extends $dara.Model {
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
   * The name.
   * 
   * @example
   * "processor1"
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

export class StopOfflineTaskResponseBodyResultSink extends $dara.Model {
  /**
   * @remarks
   * The name of the data sink.
   * 
   * @example
   * table2
   */
  name?: string;
  /**
   * @remarks
   * The configuration parameters of the data sink.
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
   * The schema of the data sink.
   */
  schema?: { [key: string]: string }[];
  /**
   * @remarks
   * The type of the data sink.
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

export class StopOfflineTaskResponseBodyResultSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * table1
   */
  name?: string;
  /**
   * @remarks
   * The datasource config parameters.
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
   * The schema of the data source.
   */
  schema?: { [key: string]: string }[];
  /**
   * @remarks
   * The type of the data source.
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

export class StopOfflineTaskResponseBodyResultStatus extends $dara.Model {
  /**
   * @remarks
   * The time when the node was started.
   * 
   * @example
   * 1744941600000
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the node was stopped.
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
   * The node status.
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

export class StopOfflineTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The metadata.
   */
  meta?: StopOfflineTaskResponseBodyResultMeta;
  /**
   * @remarks
   * The node processing parameters.
   * 
   * @example
   * {
   * "parameter1": {
   * "key": "value"
   * },
   * "parameter2": {
   * "key": "value"
   * }
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The processing flow operators.
   */
  processors?: StopOfflineTaskResponseBodyResultProcessors[];
  /**
   * @remarks
   * The data sink information.
   */
  sink?: StopOfflineTaskResponseBodyResultSink[];
  /**
   * @remarks
   * The data source information.
   */
  source?: StopOfflineTaskResponseBodyResultSource[];
  /**
   * @remarks
   * The node status.
   */
  status?: StopOfflineTaskResponseBodyResultStatus;
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
      meta: StopOfflineTaskResponseBodyResultMeta,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      processors: { 'type': 'array', 'itemType': StopOfflineTaskResponseBodyResultProcessors },
      sink: { 'type': 'array', 'itemType': StopOfflineTaskResponseBodyResultSink },
      source: { 'type': 'array', 'itemType': StopOfflineTaskResponseBodyResultSource },
      status: StopOfflineTaskResponseBodyResultStatus,
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

export class StopOfflineTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D56E988-A189-53A4-A0A6-C8D744B59775
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: StopOfflineTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: StopOfflineTaskResponseBodyResult,
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


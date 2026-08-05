// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfflineTaskResponseBodyResultMeta extends $dara.Model {
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

export class ModifyOfflineTaskResponseBodyResultProcessors extends $dara.Model {
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
   * processor1
   */
  name?: string;
  /**
   * @remarks
   * The processor parameters.
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

export class ModifyOfflineTaskResponseBodyResultSink extends $dara.Model {
  /**
   * @remarks
   * The data sink name.
   * 
   * @example
   * table2
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

export class ModifyOfflineTaskResponseBodyResultSource extends $dara.Model {
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

export class ModifyOfflineTaskResponseBodyResultStatus extends $dara.Model {
  /**
   * @remarks
   * The task start time.
   * 
   * @example
   * 1744941600000
   */
  createTime?: string;
  /**
   * @remarks
   * The task stop time.
   * 
   * @example
   * 1744941600000
   */
  deleteTime?: string;
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
      createTime: 'string',
      deleteTime: 'string',
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

export class ModifyOfflineTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The metadata.
   */
  meta?: ModifyOfflineTaskResponseBodyResultMeta;
  /**
   * @remarks
   * The task processing parameters.
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
  processors?: ModifyOfflineTaskResponseBodyResultProcessors[];
  /**
   * @remarks
   * The data sink information.
   */
  sink?: ModifyOfflineTaskResponseBodyResultSink[];
  /**
   * @remarks
   * The data source information.
   */
  source?: ModifyOfflineTaskResponseBodyResultSource[];
  /**
   * @remarks
   * The task status.
   */
  status?: ModifyOfflineTaskResponseBodyResultStatus;
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
      meta: ModifyOfflineTaskResponseBodyResultMeta,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      processors: { 'type': 'array', 'itemType': ModifyOfflineTaskResponseBodyResultProcessors },
      sink: { 'type': 'array', 'itemType': ModifyOfflineTaskResponseBodyResultSink },
      source: { 'type': 'array', 'itemType': ModifyOfflineTaskResponseBodyResultSource },
      status: ModifyOfflineTaskResponseBodyResultStatus,
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

export class ModifyOfflineTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0abb793917165176014887584e28d9
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ModifyOfflineTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyOfflineTaskResponseBodyResult,
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


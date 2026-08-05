// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfflineTaskResponseBodyResultMeta extends $dara.Model {
  /**
   * @remarks
   * The list of labels.
   */
  labels?: string[];
  /**
   * @remarks
   * The region ID of the task.
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
   * jly-fesOffline-172.16.8.133-20912
   */
  taskName?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 2192861158
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      regionId: 'RegionId',
      taskName: 'TaskName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      taskName: 'string',
      workspaceId: 'string',
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

export class ListOfflineTaskResponseBodyResultProcessors extends $dara.Model {
  /**
   * @remarks
   * The input parameters.
   */
  input?: { [key: string]: string };
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
   */
  output?: { [key: string]: string };
  /**
   * @remarks
   * The processor parameters.
   */
  parameters?: { [key: string]: string };
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
      input: 'Input',
      name: 'Name',
      output: 'Output',
      parameters: 'Parameters',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      output: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ListOfflineTaskResponseBodyResultSink extends $dara.Model {
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
      name: 'Name',
      parameters: 'Parameters',
      primaryKey: 'PrimaryKey',
      schema: 'Schema',
      type: 'Type',
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

export class ListOfflineTaskResponseBodyResultSource extends $dara.Model {
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * table
   */
  name?: string;
  /**
   * @remarks
   * The data source configuration parameters.
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
   * rds
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
      primaryKey: 'PrimaryKey',
      schema: 'Schema',
      type: 'Type',
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

export class ListOfflineTaskResponseBodyResultStatus extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1744941600000
   */
  createTime?: number;
  /**
   * @remarks
   * The monitoring information.
   */
  metricData?: { [key: string]: string };
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was last modified.
   * 
   * @example
   * 1744941600000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      metricData: 'MetricData',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      metricData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.metricData) {
      $dara.Model.validateMap(this.metricData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The task metadata.
   */
  meta?: ListOfflineTaskResponseBodyResultMeta;
  /**
   * @remarks
   * The processing pipeline operators.
   */
  processors?: ListOfflineTaskResponseBodyResultProcessors[];
  /**
   * @remarks
   * The data sink information.
   */
  sink?: ListOfflineTaskResponseBodyResultSink[];
  /**
   * @remarks
   * The data source information.
   */
  source?: ListOfflineTaskResponseBodyResultSource[];
  /**
   * @remarks
   * The task status.
   */
  status?: ListOfflineTaskResponseBodyResultStatus;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      processors: 'Processors',
      sink: 'Sink',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: ListOfflineTaskResponseBodyResultMeta,
      processors: { 'type': 'array', 'itemType': ListOfflineTaskResponseBodyResultProcessors },
      sink: { 'type': 'array', 'itemType': ListOfflineTaskResponseBodyResultSink },
      source: { 'type': 'array', 'itemType': ListOfflineTaskResponseBodyResultSource },
      status: ListOfflineTaskResponseBodyResultStatus,
    };
  }

  validate() {
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
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

export class ListOfflineTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 786CC01F-0F1D-5FB5-8BFF-B0F3DB289772
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListOfflineTaskResponseBodyResult[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOfflineTaskResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


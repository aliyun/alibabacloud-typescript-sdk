// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogtailPipelineConfig extends $dara.Model {
  /**
   * @remarks
   * The aggregation plug-ins.
   */
  aggregators?: { [key: string]: any }[];
  /**
   * @remarks
   * The name of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp.
   * 
   * @example
   * 1655176807
   */
  createTime?: number;
  /**
   * @remarks
   * The data output plug-ins.
   * 
   * This parameter is required.
   */
  flushers?: { [key: string]: any }[];
  /**
   * @remarks
   * The global configuration.
   * 
   * @example
   * {     "TopicType": "custom",     "TopicFormat": "aaa",     "EnableAlwaysOnline": true,     "EnableTimestampNanosecond": true,     "UsingOldContentTag": true }
   */
  global?: { [key: string]: any };
  /**
   * @remarks
   * The data source plug-ins.
   * 
   * This parameter is required.
   */
  inputs?: { [key: string]: any }[];
  /**
   * @remarks
   * The last modification time. The value is a UNIX timestamp.
   * 
   * @example
   * 1655176807
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The sample log.
   * 
   * @example
   * 127.0.0.1 - - [10/Jun/2022:12:36:49 +0800] "GET /index.html HTTP/1.1" 200
   */
  logSample?: string;
  /**
   * @remarks
   * The processing plug-ins.
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * 任务配置
   * 
   * @example
   * {"Type": "task_example"}
   */
  task?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aggregators: 'aggregators',
      configName: 'configName',
      createTime: 'createTime',
      flushers: 'flushers',
      global: 'global',
      inputs: 'inputs',
      lastModifyTime: 'lastModifyTime',
      logSample: 'logSample',
      processors: 'processors',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregators: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      configName: 'string',
      createTime: 'number',
      flushers: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      global: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      lastModifyTime: 'number',
      logSample: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      task: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.aggregators)) {
      $dara.Model.validateArray(this.aggregators);
    }
    if(Array.isArray(this.flushers)) {
      $dara.Model.validateArray(this.flushers);
    }
    if(this.global) {
      $dara.Model.validateMap(this.global);
    }
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    if(this.task) {
      $dara.Model.validateMap(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


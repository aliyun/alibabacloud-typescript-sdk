// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogtailPipelineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of aggregator plug-ins.
   * 
   * >Notice: 
   * 
   * This parameter is valid only when you use an extension processing plug-in. You can use a maximum of one aggregator plug-in.
   */
  aggregators?: { [key: string]: any }[];
  /**
   * @remarks
   * The name of the configuration.
   * 
   * >Notice: 
   * 
   * The name must be the same as the value of the configName parameter in the request path.
   * 
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @remarks
   * The list of output plug-ins.
   * 
   * >Notice: 
   * 
   * Currently, you can add only one SLS output plug-in.
   * 
   * This parameter is required.
   */
  flushers?: { [key: string]: any }[];
  /**
   * @remarks
   * The global configuration.
   */
  global?: { [key: string]: any };
  /**
   * @remarks
   * The list of input plug-ins.
   * 
   * >Notice: 
   * 
   * Currently, you can configure only one input plug-in.
   * 
   * This parameter is required.
   */
  inputs?: { [key: string]: any }[];
  /**
   * @remarks
   * A sample log. Multiple logs are supported.
   * 
   * @example
   * 2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world
   */
  logSample?: string;
  /**
   * @remarks
   * The list of processing plug-ins.
   * 
   * > Processing plug-ins are classified into native processing plug-ins and extension processing plug-ins. For more information, see [Processing plug-ins](https://help.aliyun.com/document_detail/64957.html).
   * 
   * >Notice: 
   * 
   * > - Native plug-ins can be used only to collect text logs.
   * >
   * > - You cannot add native plug-ins and extension plug-ins at the same time.
   * >
   * > - When you use native plug-ins, the following requirements must be met:
   * >
   * >   - The first processing plug-in must be a regular expression-based parsing plug-in, a separator-based parsing plug-in, a JSON-based parsing plug-in, an NGINX-based parsing plug-in, an Apache-based parsing plug-in, or an IIS-based parsing plug-in.
   * >
   * >   - After the first processing plug-in, you can add only one time parsing plug-in, one filter plug-in, and multiple data masking plug-ins.
   */
  processors?: { [key: string]: any }[];
  task?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aggregators: 'aggregators',
      configName: 'configName',
      flushers: 'flushers',
      global: 'global',
      inputs: 'inputs',
      logSample: 'logSample',
      processors: 'processors',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregators: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      configName: 'string',
      flushers: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      global: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
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


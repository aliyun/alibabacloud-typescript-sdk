// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogtailPipelineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of aggregation plugins. >Notice: This parameter is valid only when you use extension processing plugins. You can use a maximum of one aggregation plugin.
   */
  aggregators?: { [key: string]: any }[];
  /**
   * @remarks
   * The name of the configuration.
   * 
   * > The configuration name must be unique within the project and cannot be modified after the configuration is created. The name must follow these rules:
   * >
   * > - It can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * >
   * > - It must start and end with a lowercase letter or a digit.
   * >
   * > - It must be 2 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @remarks
   * The list of output plugins. >Notice: Currently, you can add only one flusher_sls plugin.
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
   * The list of input plugins. >Notice: Currently, you can configure only one input plugin.
   * 
   * This parameter is required.
   */
  inputs?: { [key: string]: any }[];
  /**
   * @remarks
   * A sample log. Multiple log entries are supported.
   * 
   * @example
   * 2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world
   */
  logSample?: string;
  /**
   * @remarks
   * The list of processing plugins.
   * 
   * > Processing plugins are classified into native processing plugins and extension processing plugins. For more information, see [Processing plugins](https://help.aliyun.com/document_detail/64957.html).
   * 
   * >Notice: 
   * 
   * > - Native plugins can be used only to collect text logs.
   * >
   * > - You cannot add native plugins and extension plugins at the same time.
   * >
   * > - When you use native plugins, the following requirements must be met:
   * >
   * >   - The first processing plugin must be a regular expression-based parsing plugin, a separator-based parsing plugin, a JSON-based parsing plugin, an NGINX-based parsing plugin, an Apache-based parsing plugin, or an IIS-based parsing plugin.
   * >
   * >   - After the first processing plugin, you can add only one time parsing processing plugin, one filter plugin, and multiple data masking plugins.
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * The task configuration.
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogtailPipelineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregation plug-ins.
   * 
   * >  This parameter takes effect only when extended plug-ins are used. You can use only one aggregation plug-in.
   */
  aggregators?: { [key: string]: any }[];
  /**
   * @remarks
   * The name of the configuration.
   * 
   * >  The value of this parameter must be the same as the value of configName in the outer layer.
   * 
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @remarks
   * The output plug-ins.
   * 
   * >  You can configure only one output plug-in.
   * 
   * This parameter is required.
   */
  flushers?: { [key: string]: any }[];
  /**
   * @remarks
   * The global settings.
   */
  global?: { [key: string]: any };
  /**
   * @remarks
   * The input plug-ins.
   * 
   * >  You can configure only one input plug-in.
   * 
   * This parameter is required.
   */
  inputs?: { [key: string]: any }[];
  /**
   * @remarks
   * The sample log. You can specify multiple sample logs.
   * 
   * @example
   * 2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world
   */
  logSample?: string;
  /**
   * @remarks
   * The processing plug-ins.
   * 
   * >  Logtail plug-ins for data processing are classified into native plug-ins and extended plug-ins. For more information, see [Overview of Logtail plug-ins for data processing](https://help.aliyun.com/document_detail/64957.html).
   * 
   * > 
   * 
   * *   You can use native plug-ins only to collect text logs.
   * 
   * *   You cannot add native plug-ins and extended plug-ins at a time.
   * 
   * *   When you add native plug-ins, take note of the following items:
   * 
   *     *   You must add one of the following Logtail plug-ins for data processing as the first plug-in: Data Parsing (Regex Mode), Data Parsing (Delimiter Mode), Data Parsing (JSON Mode), Data Parsing (NGINX Mode), Data Parsing (Apache Mode), and Data Parsing (IIS Mode).
   *     *   After you add the first plug-in, you can add one Time Parsing plug-in, one Data Filtering plug-in, and multiple Data Masking plug-ins.
   */
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      aggregators: 'aggregators',
      configName: 'configName',
      flushers: 'flushers',
      global: 'global',
      inputs: 'inputs',
      logSample: 'logSample',
      processors: 'processors',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


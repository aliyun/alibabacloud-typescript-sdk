// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAnalysisRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The analysis tool. This parameter does not need to be specified when you use OpenAPI.
   * 
   * @example
   * gp/pyki/analysis
   */
  analysisTool?: string;
  /**
   * @remarks
   * The data richness level.
   */
  analysisParams?: string[];
  /**
   * @remarks
   * The channel name.
   * 
   * @example
   * ecs_sysom
   */
  channel?: string;
  /**
   * @remarks
   * The process name. This parameter is optional.
   * 
   * @example
   * python_test
   */
  comms?: string;
  /**
   * @remarks
   * The creator. This parameter does not need to be specified when you use OpenAPI.
   * 
   * @example
   * 445333
   */
  createdBy?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9dej066kii4goqxxxx
   */
  instance?: string;
  /**
   * @remarks
   * The instance type. This parameter does not need to be specified when you use OpenAPI.
   * 
   * @example
   * ip/sn/hostname
   */
  instanceType?: string;
  /**
   * @remarks
   * The iteration entry function. This parameter is required only in iteration mode and can be left empty.
   * 
   * @example
   * Class.function
   */
  iterationFunc?: string;
  /**
   * @remarks
   * The iteration entry module. This parameter is required only in iteration mode and can be left empty.
   * 
   * @example
   * a.b.module
   */
  iterationMod?: string;
  /**
   * @remarks
   * The iteration range. The iteration count refers to the number of iterations when the data collection module is activated, which is independent of the AI job iteration count.
   */
  iterationRange?: number[];
  /**
   * @remarks
   * The process IDs (PIDs) of the AI job. Multiple PIDs are supported, separated by commas.
   * 
   * @example
   * 2421,36547,10043
   */
  pids?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * The AI Infra analysis duration. Unit: milliseconds. Default value: 2000.
   * 
   * @example
   * 2000
   */
  timeout?: number;
  /**
   * @remarks
   * The Alibaba Cloud user ID. This parameter does not need to be specified when you use OpenAPI.
   * 
   * @example
   * 123423414
   */
  uid?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      analysisTool: 'analysisTool',
      analysisParams: 'analysis_params',
      channel: 'channel',
      comms: 'comms',
      createdBy: 'created_by',
      instance: 'instance',
      instanceType: 'instance_type',
      iterationFunc: 'iteration_func',
      iterationMod: 'iteration_mod',
      iterationRange: 'iteration_range',
      pids: 'pids',
      region: 'region',
      timeout: 'timeout',
      uid: 'uid',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      analysisTool: 'string',
      analysisParams: { 'type': 'array', 'itemType': 'string' },
      channel: 'string',
      comms: 'string',
      createdBy: 'string',
      instance: 'string',
      instanceType: 'string',
      iterationFunc: 'string',
      iterationMod: 'string',
      iterationRange: { 'type': 'array', 'itemType': 'number' },
      pids: 'string',
      region: 'string',
      timeout: 'number',
      uid: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisParams)) {
      $dara.Model.validateArray(this.analysisParams);
    }
    if(Array.isArray(this.iterationRange)) {
      $dara.Model.validateArray(this.iterationRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


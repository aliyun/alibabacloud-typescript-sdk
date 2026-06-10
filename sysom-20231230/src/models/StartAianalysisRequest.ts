// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * Analysis tool. This field does not need to be filled in when using OpenAPI.
   * 
   * @example
   * gp/pyki/analysis
   */
  analysisTool?: string;
  /**
   * @remarks
   * Data richness
   */
  analysisParams?: string[];
  /**
   * @remarks
   * Channel name
   * 
   * @example
   * ecs_sysom
   */
  channel?: string;
  /**
   * @remarks
   * Process name. This is an optional parameter.
   * 
   * @example
   * python_test
   */
  comms?: string;
  /**
   * @remarks
   * Creator. You do not need to specify this parameter when using OpenAPI.
   * 
   * @example
   * 445333
   */
  createdBy?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * i-wz9dej066kii4goqxxxx
   */
  instance?: string;
  /**
   * @remarks
   * Instance type. This field does not need to be filled in when using OpenAPI.
   * 
   * @example
   * ip/sn/hostname
   */
  instanceType?: string;
  /**
   * @remarks
   * Iteration entry function. Required only in iteration mode. This parameter is optional.
   * 
   * @example
   * Class.function
   */
  iterationFunc?: string;
  /**
   * @remarks
   * Iteration entry module. Required only in iteration mode. This parameter is optional.
   * 
   * @example
   * a.b.module
   */
  iterationMod?: string;
  /**
   * @remarks
   * Iteration range (iteration count: the number of iterations when the data collection module is activated, independent of the AI job\\"s iteration count)
   */
  iterationRange?: number[];
  /**
   * @remarks
   * Process IDs (PIDs) of the AI job. Batch input is supported, separated by commas.
   * 
   * @example
   * 2421,36547,10043
   */
  pids?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * AI Infra analysis duration.  
   * Unit: milliseconds.  
   * Default value: 2000.
   * 
   * @example
   * 2000
   */
  timeout?: number;
  /**
   * @remarks
   * Alibaba Cloud User ID. You do not need to specify this parameter when using OpenAPI.
   * 
   * @example
   * 123423414
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
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
    };
  }

  static types(): { [key: string]: any } {
    return {
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


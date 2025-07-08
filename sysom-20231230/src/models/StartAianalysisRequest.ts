// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAnalysisRequest extends $dara.Model {
  analysisTool?: string;
  analysisParams?: string[];
  /**
   * @example
   * ecs_sysom
   */
  channel?: string;
  /**
   * @example
   * python_test
   */
  comms?: string;
  createdBy?: string;
  /**
   * @example
   * i-wz9dej066kii4goqxxxx
   */
  instance?: string;
  instanceType?: string;
  iterationFunc?: string;
  iterationMod?: string;
  iterationRange?: number[];
  /**
   * @example
   * 2421,36547,10043
   */
  pids?: string;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * 2000
   */
  timeout?: number;
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


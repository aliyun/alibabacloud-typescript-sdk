// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentPlanResponseBodyDataPlanPipelineEnvParams } from "./GetExperimentPlanResponseBodyDataPlanPipelineEnvParams";


export class GetExperimentPlanResponseBodyDataPlanPipeline extends $dara.Model {
  /**
   * @remarks
   * Configured environment parameters
   */
  envParams?: GetExperimentPlanResponseBodyDataPlanPipelineEnvParams;
  /**
   * @remarks
   * Node order number
   * 
   * @example
   * 1
   */
  pipelineOrder?: number;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * 36
   */
  resourceId?: number;
  /**
   * @remarks
   * Resource name
   * 
   * @example
   * PPU
   */
  resourceName?: string;
  /**
   * @remarks
   * Usage scenario, e.g., "baseline"
   * 
   * @example
   * baseline
   */
  scene?: string;
  /**
   * @remarks
   * Configured workload parameters
   */
  settingParams?: { [key: string]: string };
  /**
   * @remarks
   * Workload ID
   * 
   * @example
   * 14
   */
  workloadId?: number;
  /**
   * @remarks
   * Workload name
   * 
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      envParams: 'EnvParams',
      pipelineOrder: 'PipelineOrder',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      scene: 'Scene',
      settingParams: 'SettingParams',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envParams: GetExperimentPlanResponseBodyDataPlanPipelineEnvParams,
      pipelineOrder: 'number',
      resourceId: 'number',
      resourceName: 'string',
      scene: 'string',
      settingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workloadId: 'number',
      workloadName: 'string',
    };
  }

  validate() {
    if(this.envParams && typeof (this.envParams as any).validate === 'function') {
      (this.envParams as any).validate();
    }
    if(this.settingParams) {
      $dara.Model.validateMap(this.settingParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams } from "./GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams";


export class GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParam extends $dara.Model {
  /**
   * @remarks
   * Configured environment parameters
   */
  envParams?: GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams;
  /**
   * @remarks
   * Node sequence number
   * 
   * @example
   * 1
   */
  pipelineOrder?: number;
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
   * 13
   */
  workloadId?: number;
  /**
   * @remarks
   * Workload Name
   * 
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      envParams: 'EnvParams',
      pipelineOrder: 'PipelineOrder',
      scene: 'Scene',
      settingParams: 'SettingParams',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envParams: GetExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams,
      pipelineOrder: 'number',
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


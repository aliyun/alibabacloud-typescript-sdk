// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams } from "./UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams";


export class UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParam extends $dara.Model {
  /**
   * @remarks
   * Configured Environment Parameters
   */
  envParams?: UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams;
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
   * Usage Scenario, e.g., "baseline"
   * 
   * @example
   * baseline
   */
  scene?: string;
  /**
   * @remarks
   * Configured Workload Parameters
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
      envParams: UpdateExperimentPlanTemplateResponseBodyDataTemplatePipelineParamEnvParams,
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


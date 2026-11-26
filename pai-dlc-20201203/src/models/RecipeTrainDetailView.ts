// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecipeResourceView } from "./RecipeResourceView";


export class RecipeTrainDetailView extends $dara.Model {
  /**
   * @remarks
   * The training start command.
   * 
   * @example
   * python -m verl.trainer.main_ppo
   */
  command?: string;
  /**
   * @remarks
   * The ID of the training detail row, which is always the specifically resolved row.
   * 
   * @example
   * 2001
   */
  detailId?: number;
  /**
   * @remarks
   * The template environment variables of the training detail table, in map<string,string> format. Values are fully echoed without desensitization, so credentials must not be stored in the template. An empty value indicates that the template does not set environment variables. When creating a job, it is merged with the requested Envs by key, and the requested values take precedence for identical keys.
   * 
   * @example
   * {"PYTHONPATH":"/workspace/verl"}
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The training image with a fixed digest.
   * 
   * @example
   * registry.example.com/rls/verl@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  image?: string;
  /**
   * @remarks
   * The inference-side rollout image with a fixed digest. It is consumed by created jobs only when TrainerMode is set to SeparateAsync. An empty value indicates that the template does not provide an inference-side image.
   * 
   * @example
   * registry.example.com/rls/sglang@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  inferenceImage?: string;
  /**
   * @remarks
   * The default parameter layer of the inference-side framework, which echoes the original JSON object. It participates in merging and overrides TrainingParamsJson only when TrainerMode is set to SeparateAsync. In other modes, it is echoed but does not take effect.
   * 
   * @example
   * {"actor_rollout_ref.rollout.name":"sglang","trainer.disaggregated.enable":true}
   */
  inferenceParamsJson?: { [key: string]: any };
  /**
   * @remarks
   * The resolved inference-side resource pool of the inference type. It is consumed by created jobs only when TrainerMode is set to SeparateAsync. An empty value indicates that the template does not provide inference-side resources.
   */
  inferenceResource?: RecipeResourceView;
  /**
   * @remarks
   * Specifies whether the detail table is explicitly published by the platform as a shared default training detail table. The resolution first checks the default of the current workspace, and then falls back to the public default published by official presets. A value of false indicates a private detail. Details in other empty workspaces are not automatically used as public defaults. Inheritance still requires RAM permissions for the current operating workspace.
   * 
   * @example
   * false
   */
  isDefaultDetail?: boolean;
  /**
   * @remarks
   * The name of the model to which the detail table belongs.
   * 
   * @example
   * qwen
   */
  model?: string;
  /**
   * @remarks
   * The configuration renderer. Valid values: hydra.
   * 
   * @example
   * hydra
   */
  renderer?: string;
  /**
   * @remarks
   * The estimated runtime in minutes. A value of 0 indicates that the template does not specify a duration, and the job does not have a runtime limit.
   * 
   * @example
   * 120
   */
  runtimeMinutes?: number;
  /**
   * @remarks
   * The default checkpoint save interval in steps. A value of -1 indicates that checkpoints are not saved.
   * 
   * @example
   * 10
   */
  saveIntervalStepsDefault?: number;
  /**
   * @remarks
   * The resolved training-side resource pool.
   */
  trainResource?: RecipeResourceView;
  /**
   * @remarks
   * The training and inference execution mode. Valid values: Sync, ColocateAsync, and SeparateAsync.
   * 
   * @example
   * Sync
   */
  trainerMode?: string;
  /**
   * @remarks
   * The default parameter layer of the training-side framework, which echoes the original JSON object.
   * 
   * @example
   * {"algorithm.adv_estimator":"gae"}
   */
  trainingParamsJson?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      detailId: 'DetailId',
      envs: 'Envs',
      image: 'Image',
      inferenceImage: 'InferenceImage',
      inferenceParamsJson: 'InferenceParamsJson',
      inferenceResource: 'InferenceResource',
      isDefaultDetail: 'IsDefaultDetail',
      model: 'Model',
      renderer: 'Renderer',
      runtimeMinutes: 'RuntimeMinutes',
      saveIntervalStepsDefault: 'SaveIntervalStepsDefault',
      trainResource: 'TrainResource',
      trainerMode: 'TrainerMode',
      trainingParamsJson: 'TrainingParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      detailId: 'number',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      image: 'string',
      inferenceImage: 'string',
      inferenceParamsJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inferenceResource: RecipeResourceView,
      isDefaultDetail: 'boolean',
      model: 'string',
      renderer: 'string',
      runtimeMinutes: 'number',
      saveIntervalStepsDefault: 'number',
      trainResource: RecipeResourceView,
      trainerMode: 'string',
      trainingParamsJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    if(this.inferenceParamsJson) {
      $dara.Model.validateMap(this.inferenceParamsJson);
    }
    if(this.inferenceResource && typeof (this.inferenceResource as any).validate === 'function') {
      (this.inferenceResource as any).validate();
    }
    if(this.trainResource && typeof (this.trainResource as any).validate === 'function') {
      (this.trainResource as any).validate();
    }
    if(this.trainingParamsJson) {
      $dara.Model.validateMap(this.trainingParamsJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


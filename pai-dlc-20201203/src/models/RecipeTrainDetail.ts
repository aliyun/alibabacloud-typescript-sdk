// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecipeResource } from "./RecipeResource";


export class RecipeTrainDetail extends $dara.Model {
  /**
   * @remarks
   * The training startup command in argv format. This parameter is optional. If left empty, the template does not specify a command, and the command is provided by the pai.entrypoint of TrainingConfig or the string-type pai.entrypoint in TrainingParamsJson (module format) when the job is created. If all are missing, the job creation returns a 400 error with the message "configuration.pai.entrypoint: nonempty argv required". If specified, it serves as the source of the job\"s pai.entrypoint. However, the string-type pai.entrypoint at the parameter level takes precedence (module format). In this case, the command is stored but does not take effect. Templates in module format should be left empty instead of filling in a placeholder command that is never executed.
   * 
   * @example
   * python -m verl.trainer.main_ppo
   */
  command?: string;
  /**
   * @remarks
   * The template environment variables, represented as a map<string,string>. When a job is created, these variables are merged with the Envs in the request by key. If a key exists in both, the value in the request takes precedence. Credentials are prohibited. Names starting with _PAI_PRIVATE_ENV_ are rejected. Both the default value and an empty object indicate that the template does not set environment variables. Names reserved by the platform, such as HF_HOME, TMPDIR, and prefixes starting with RLS_, are not blocked during creation but are rejected during job creation.
   * 
   * @example
   * {"PYTHONPATH":"/workspace/verl"}
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The training image. This parameter is optional. If left empty, the template does not specify an image, and the image is provided by JobSpecs[].Image when the job is created. If both are missing, the job creation returns a 400 error with the message "JobSpecs.Image: must not be blank". If specified, the image must be pinned to a sha256 digest (name@sha256:<64-character hexadecimal>) or an explicit tag (name:tag). Bare image names with an implicit :latest tag are rejected.
   * 
   * @example
   * registry.example.com/rls/verl@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  image?: string;
  /**
   * @remarks
   * The inference rollout image. If specified, the image must be pinned to a sha256 digest (name@sha256:<64-character hexadecimal>) or an explicit tag (name:tag). This image is consumed only when TrainerMode is set to DisaggregateAsync to build the rollout pool. In other modes, it is stored but does not take effect.
   * 
   * @example
   * registry.example.com/rls/sglang@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  inferenceImage?: string;
  /**
   * @remarks
   * The default parameter layer for the inference framework, represented as a raw JSON object. It always participates in merging in all Train modes, although the rollout pool itself is built only in DisaggregateAsync mode. Keys with the same name override those in TrainingParamsJson, which is consistent with the priority of TrainingConfig < RolloutConfig on the request side. In other modes, it is stored but does not take effect.
   * 
   * @example
   * {"actor_rollout_ref.rollout.name":"sglang","trainer.disaggregated.enable":true,"trainer.disaggregated.mode":"full","trainer.train_mode":"rl_training"}
   */
  inferenceParamsJson?: { [key: string]: any };
  /**
   * @remarks
   * The inline resource pool for inference. You must specify either this parameter or InferenceResourceId. The resource must be of the inference type and is consumed only when TrainerMode is set to SeparateAsync. The specification shape is consistent with the training side, where the pod_count in Specs represents the number of rollout replicas. It must not contain a quota_id. The quota is provided by CreateRLJob.ResourceId. When referencing an existing pool, the workspace scope and read permissions of the source recipe must be met.
   */
  inferenceResource?: RecipeResource;
  /**
   * @remarks
   * The ID of the row in an existing inference resource pool. You must specify either this parameter or InferenceResource. It is consumed only when TrainerMode is set to SeparateAsync. If the ID does not exist, a Recipe.InvalidParameter (400) error is returned, and the original resource type validation is maintained. The row must be reachable from the source recipe of the current tenant and workspace or a public official source recipe. It must also pass the current paidlc:CreateRecipe and source paidlc:GetRecipe authentication. Any readable source for the same row is sufficient, and SourceRecipeId is not required.
   * 
   * @example
   * 1002
   */
  inferenceResourceId?: number;
  /**
   * @remarks
   * Specifies whether to publish the child table as the shared default training child table for the model. Only platform callers can set this parameter to true, and they must still pass the RAM authentication for the current WorkspaceId. Defaults published by custom recipes are limited to their workspaces. Defaults published by official preset recipes are not bound to user workspaces and serve as public official fallbacks. Inheritance first checks the default of the current workspace, and then falls back to the public official default. If set to false, the child table is a regular detail and does not participate in default inheritance, but can still be referenced by ID after passing the read authentication of the source recipe. Details in other empty workspaces are not automatically made public.
   * 
   * @example
   * false
   */
  isDefaultDetail?: boolean;
  /**
   * @remarks
   * The name of the model to which the child table belongs. If left empty, the model of the main row is inherited.
   * 
   * @example
   * qwen
   */
  model?: string;
  /**
   * @remarks
   * The configuration renderer. Valid values: hydra. Only hydra is implemented in the first phase. If left empty, the default value is used.
   * 
   * @example
   * hydra
   */
  renderer?: string;
  /**
   * @remarks
   * The estimated runtime in minutes. The value must be greater than or equal to 0. Both 0 and the default value indicate that the template does not specify a runtime, and the job does not have a runtime limit. The platform does not provide a default value.
   * 
   * @example
   * 120
   */
  runtimeMinutes?: number;
  /**
   * @remarks
   * The default checkpoint save interval in steps. The value must be greater than or equal to -1. A value of -1 indicates that checkpoints are not saved.
   * 
   * @example
   * 10
   */
  saveIntervalStepsDefault?: number;
  /**
   * @remarks
   * The inline resource pool for training. You must specify either this parameter or TrainResourceId. The inline resource must be of the train type. When referencing an existing pool, the workspace scope and read permissions of the source recipe must be met.
   */
  trainResource?: RecipeResource;
  /**
   * @remarks
   * The ID of the row in an existing training resource pool. You must specify either this parameter or TrainResource. If the ID does not exist, a Recipe.InvalidParameter (400) error is returned, and the original resource type validation is maintained. The row must be reachable from the source recipe of the current tenant and workspace or a public official source recipe. It must also pass the current paidlc:CreateRecipe and source paidlc:GetRecipe authentication. Any readable source for the same row is sufficient, and SourceRecipeId is not required.
   * 
   * @example
   * 1001
   */
  trainResourceId?: number;
  /**
   * @remarks
   * The training and inference execution mode. Valid values: ColocateSync and DisaggregateAsync. The legacy spellings Sync and ColocateAsync are normalized to ColocateSync, and SeparateAsync is normalized to DisaggregateAsync. For DisaggregateAsync, the rollout side is provided by InferenceImage and InferenceResource. This parameter is not mandatory when creating a template. If missing, the error is attributed to RecipeId or JobSpecs based on actionability during job creation. This parameter is specified by the caller and is not overridden by the platform.
   * 
   * @example
   * ColocateSync
   */
  trainerMode?: string;
  /**
   * @remarks
   * The default parameter layer for the training framework, represented as a raw JSON object. It serves as the default value layer. Reserved key validation is not performed during creation. If specified, it must be a valid JSON object. If it does not contain the path and experiment name, the job creation request must include these keys.
   * 
   * @example
   * {"algorithm.adv_estimator":"gae","data.train_files":["/mnt/input/gsm8k/train.parquet"]}
   */
  trainingParamsJson?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      envs: 'Envs',
      image: 'Image',
      inferenceImage: 'InferenceImage',
      inferenceParamsJson: 'InferenceParamsJson',
      inferenceResource: 'InferenceResource',
      inferenceResourceId: 'InferenceResourceId',
      isDefaultDetail: 'IsDefaultDetail',
      model: 'Model',
      renderer: 'Renderer',
      runtimeMinutes: 'RuntimeMinutes',
      saveIntervalStepsDefault: 'SaveIntervalStepsDefault',
      trainResource: 'TrainResource',
      trainResourceId: 'TrainResourceId',
      trainerMode: 'TrainerMode',
      trainingParamsJson: 'TrainingParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      image: 'string',
      inferenceImage: 'string',
      inferenceParamsJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inferenceResource: RecipeResource,
      inferenceResourceId: 'number',
      isDefaultDetail: 'boolean',
      model: 'string',
      renderer: 'string',
      runtimeMinutes: 'number',
      saveIntervalStepsDefault: 'number',
      trainResource: RecipeResource,
      trainResourceId: 'number',
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


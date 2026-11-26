// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecipeResource } from "./RecipeResource";


export class RecipeEvalDetail extends $dara.Model {
  /**
   * @remarks
   * The evaluation startup command in argv format. This parameter is optional. If left empty, the template does not specify a command, and the caller must provide it when creating the job. The string-type pai.entrypoint parameter at the parameter level takes precedence over this field. In this case, the command is stored but does not take effect.
   * 
   * @example
   * python -m verl.trainer.main_ppo val_only=true
   */
  command?: string;
  /**
   * @remarks
   * The template environment variables, in the format of map<string,string>. Evaluation jobs use the values from this child table, which are independent of the training child table because the images on both sides are different. When creating a job, these variables are merged with the environment variables in the request by key. If a key exists in both, the value in the request takes precedence. Do not include credentials. Names starting with _PAI_PRIVATE_ENV_ are rejected.
   * 
   * @example
   * {"PYTHONPATH":"/opt/eval/verl"}
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The evaluation image. This parameter is optional. If left empty, the template does not specify an image, and the caller must provide it when creating the job. If specified, the value must be pinned to a SHA-256 digest in the format of name@sha256:<64-character hexadecimal string> or an explicit tag in the format of name:tag. Bare image names with an implicit :latest tag are rejected.
   * 
   * @example
   * registry.example.com/rls/verl@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  image?: string;
  /**
   * @remarks
   * Only platform callers can set this parameter to true, and they must still pass Resource Access Management (RAM) authentication for the current workspace ID. Defaults published by custom recipes are limited to their workspaces. Defaults published by official preset recipes are not bound to a user workspace and serve as a public official fallback. The inheritance mechanism first checks the default of the current workspace and then falls back to the public official default. If set to false, the record is a normal detail and does not participate in default inheritance. However, it can still be referenced by ID after passing the read authentication of the source recipe. Details in other empty workspaces are not automatically made public.
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
   * The framework default parameter layer, which is a raw JSON object. As the default value layer, reserved key validation is not performed during creation. If specified, the value must be valid JSON.
   * 
   * @example
   * {"data.val_files":["/mnt/input/gsm8k/test.parquet"]}
   */
  paramsJson?: { [key: string]: any };
  /**
   * @remarks
   * The configuration renderer. Valid values: hydra. In the first phase, only hydra is implemented. If left empty, the default value is used.
   * 
   * @example
   * hydra
   */
  renderer?: string;
  /**
   * @remarks
   * The inline resource pool. This parameter and ResourceId are mutually exclusive. The inline resource must be of the eval type. When referencing an existing pool, the workspace scope and read permissions of the source recipe must be met.
   */
  resource?: RecipeResource;
  /**
   * @remarks
   * The ID of the existing evaluation resource pool row to reference. This parameter and Resource are mutually exclusive. If the specified row does not exist, the Recipe.InvalidParameter (400) error is returned, and the original resource type validation is retained. The row must be reachable from the source recipe of the current tenant and workspace or a public official source recipe. It must also pass the current paidlc:CreateRecipe and source paidlc:GetRecipe authentication. Any readable source for the same row is sufficient, and SourceRecipeId is not required.
   * 
   * @example
   * 1002
   */
  resourceId?: number;
  /**
   * @remarks
   * The estimated runtime in minutes. The value must be greater than or equal to 0. A value of 0 or the default value indicates that the template does not specify a runtime, and no upper limit is set for the job runtime. The platform does not provide a default value.
   * 
   * @example
   * 30
   */
  runtimeMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      envs: 'Envs',
      image: 'Image',
      isDefaultDetail: 'IsDefaultDetail',
      model: 'Model',
      paramsJson: 'ParamsJson',
      renderer: 'Renderer',
      resource: 'Resource',
      resourceId: 'ResourceId',
      runtimeMinutes: 'RuntimeMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      image: 'string',
      isDefaultDetail: 'boolean',
      model: 'string',
      paramsJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      renderer: 'string',
      resource: RecipeResource,
      resourceId: 'number',
      runtimeMinutes: 'number',
    };
  }

  validate() {
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    if(this.paramsJson) {
      $dara.Model.validateMap(this.paramsJson);
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


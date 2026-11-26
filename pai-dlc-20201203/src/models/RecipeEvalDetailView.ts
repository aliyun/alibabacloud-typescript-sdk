// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecipeResourceView } from "./RecipeResourceView";


export class RecipeEvalDetailView extends $dara.Model {
  /**
   * @remarks
   * The startup command for the evaluation.
   * 
   * @example
   * python -m verl.trainer.main_ppo val_only=true
   */
  command?: string;
  /**
   * @remarks
   * The ID of the evaluation child table row, which is always the specifically parsed row.
   * 
   * @example
   * 3001
   */
  detailId?: number;
  /**
   * @remarks
   * The template environment variables of the evaluation child table. The data type is map<string,string>. The values are fully echoed without masking. Therefore, credentials must not be stored in the template. Jobs with Mode=Eval use the values from this child table, which are independent of the training child table.
   * 
   * @example
   * {"PYTHONPATH":"/opt/eval/verl"}
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The evaluation image with a fixed digest.
   * 
   * @example
   * registry.example.com/rls/verl@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  image?: string;
  /**
   * @remarks
   * Indicates whether the child table is explicitly published by the platform as a shared default evaluation child table. The parsing process first checks the default of the current workspace and then falls back to the public default officially preset and published. A value of false indicates a private detail. Details in other empty workspaces are not automatically used as the public default. Inheritance still requires Resource Access Management (RAM) permissions for the current workspace.
   * 
   * @example
   * false
   */
  isDefaultDetail?: boolean;
  /**
   * @remarks
   * The name of the model to which the child table belongs.
   * 
   * @example
   * qwen
   */
  model?: string;
  /**
   * @remarks
   * The framework default parameter layer, which echoes the original JSON object.
   * 
   * @example
   * {"data.val_files":["/mnt/input/gsm8k/test.parquet"]}
   */
  paramsJson?: { [key: string]: any };
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
   * The parsed evaluation resource pool.
   */
  resource?: RecipeResourceView;
  /**
   * @remarks
   * The estimated runtime in minutes. A value of 0 indicates that the template does not specify a limit, and no upper limit is set for the job runtime.
   * 
   * @example
   * 30
   */
  runtimeMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      detailId: 'DetailId',
      envs: 'Envs',
      image: 'Image',
      isDefaultDetail: 'IsDefaultDetail',
      model: 'Model',
      paramsJson: 'ParamsJson',
      renderer: 'Renderer',
      resource: 'Resource',
      runtimeMinutes: 'RuntimeMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      detailId: 'number',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      image: 'string',
      isDefaultDetail: 'boolean',
      model: 'string',
      paramsJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      renderer: 'string',
      resource: RecipeResourceView,
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


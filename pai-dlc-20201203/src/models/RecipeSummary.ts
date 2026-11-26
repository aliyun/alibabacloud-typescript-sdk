// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecipeSummary extends $dara.Model {
  /**
   * @remarks
   * The list of algorithm labels.
   * 
   * @example
   * ["grpo"]
   */
  algorithmLabel?: string[];
  /**
   * @remarks
   * The user ID of the creator. This field is used for auditing and Owner=mine filtering, and is not used as a basis for permissions.
   * 
   * @example
   * 123456789
   */
  creator?: string;
  /**
   * @remarks
   * The recipe description.
   * 
   * @example
   * GRPO training recipe for Qwen2.5-7B-Instruct
   */
  description?: string;
  /**
   * @remarks
   * The creation time in UTC RFC 3339 format.
   * 
   * @example
   * 2026-09-08T07:00:00Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time in UTC RFC 3339 format.
   * 
   * @example
   * 2026-09-08T09:30:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The default recipe indicator for the model. The list can return both the default recipe for the current workspace and the public official default recipe. Job parsing prioritizes the default recipe of the current workspace and falls back to the public official default if no match is found. All read operations still require RAM authentication in the current workspace. Other records with empty workspaces are not exposed simply because they have the default indicator.
   * 
   * @example
   * false
   */
  isDefaultRecipe?: boolean;
  /**
   * @remarks
   * The name of the associated model.
   * 
   * @example
   * qwen
   */
  model?: string;
  /**
   * @remarks
   * The recipe name.
   * 
   * @example
   * qwen-grpo
   */
  name?: string;
  /**
   * @remarks
   * The owner type derived from the source. A value of preset maps to platform, and custom maps to user. A recipe is considered a public official preset only when Source is preset, OwnerType is platform, and the persistent WorkspaceId is empty. The presence of OwnerType or an empty workspace alone is not sufficient to expose the record.
   * 
   * @example
   * user
   */
  ownerType?: string;
  /**
   * @remarks
   * The recipe ID. This field is always returned.
   * 
   * @example
   * recipe-20260908-qwen-grpo
   */
  recipeId?: string;
  /**
   * @remarks
   * The list of recipe types. Valid values: train and eval. A value of ["train"] indicates training, ["eval"] indicates independent evaluation, and ["train","eval"] indicates both.
   * 
   * @example
   * ["train"]
   */
  recipeType?: string[];
  /**
   * @remarks
   * The source of the recipe. Valid values: preset (platform preset) and custom (user-created).
   * 
   * @example
   * custom
   */
  source?: string;
  /**
   * @remarks
   * The persistent workspace to which the recipe belongs. Returns the actual workspace ID for custom recipes and an empty string for public official preset recipes. A public official preset recipe must simultaneously meet the following conditions: Source is preset, OwnerType is platform, and WorkspaceId is empty. Other records with empty workspaces are not exposed. Access to official items requires the RAM permissions of the current request workspace.
   * 
   * @example
   * ws-20210126170216-mtl37ge7gkvdz
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmLabel: 'AlgorithmLabel',
      creator: 'Creator',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      isDefaultRecipe: 'IsDefaultRecipe',
      model: 'Model',
      name: 'Name',
      ownerType: 'OwnerType',
      recipeId: 'RecipeId',
      recipeType: 'RecipeType',
      source: 'Source',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmLabel: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      isDefaultRecipe: 'boolean',
      model: 'string',
      name: 'string',
      ownerType: 'string',
      recipeId: 'string',
      recipeType: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.algorithmLabel)) {
      $dara.Model.validateArray(this.algorithmLabel);
    }
    if(Array.isArray(this.recipeType)) {
      $dara.Model.validateArray(this.recipeType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


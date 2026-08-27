// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelPermissionsRequestModels extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to grant model deployment permission.
   */
  deploy?: boolean;
  /**
   * @remarks
   * Specifies whether to grant model training permission.
   */
  fineTune?: boolean;
  /**
   * @remarks
   * Specifies whether to grant model invocation permission.
   */
  inference?: boolean;
  /**
   * @remarks
   * The model.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      deploy: 'deploy',
      fineTune: 'fineTune',
      inference: 'inference',
      model: 'model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploy: 'boolean',
      fineTune: 'boolean',
      inference: 'boolean',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The tri-state value for one-click authorization. Valid values:
   * - OPEN: grants authorization to all models with one click.
   * - CLOSE: cancels one-click authorization.
   * - KEEP: keeps per-model authorization.
   * 
   * @example
   * OPEN
   */
  accessAllEntities?: string;
  /**
   * @remarks
   * The list of per-model authorization items.
   */
  models?: UpdateModelPermissionsRequestModels[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-32klhjk2312334jkh
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessAllEntities: 'accessAllEntities',
      models: 'models',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAllEntities: 'string',
      models: { 'type': 'array', 'itemType': UpdateModelPermissionsRequestModels },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


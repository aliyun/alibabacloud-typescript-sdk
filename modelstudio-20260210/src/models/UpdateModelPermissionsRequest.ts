// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelPermissionsRequestModels extends $dara.Model {
  deploy?: boolean;
  fineTune?: boolean;
  inference?: boolean;
  /**
   * @remarks
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
   * @example
   * OPEN
   */
  accessAllEntities?: string;
  models?: UpdateModelPermissionsRequestModels[];
  /**
   * @remarks
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


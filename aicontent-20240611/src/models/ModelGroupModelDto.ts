// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelGroupModelDTO extends $dara.Model {
  /**
   * @remarks
   * The numeric ID of the model.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * qwen-max
   */
  modelCode?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * Qwen-Max
   */
  name?: string;
  /**
   * @remarks
   * The platform to which the model belongs.
   * 
   * @example
   * qwen
   */
  platform?: string;
  /**
   * @remarks
   * The model version.
   * 
   * @example
   * v0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      modelCode: 'modelCode',
      modelType: 'modelType',
      name: 'name',
      platform: 'platform',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      modelCode: 'string',
      modelType: 'string',
      name: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


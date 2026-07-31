// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelGroupModelDTO extends $dara.Model {
  /**
   * @example
   * 101
   */
  id?: number;
  /**
   * @example
   * qwen-max
   */
  modelCode?: string;
  /**
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @example
   * 通义千问-Max
   */
  name?: string;
  /**
   * @example
   * qwen
   */
  platform?: string;
  /**
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


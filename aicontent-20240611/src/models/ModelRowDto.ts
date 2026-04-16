// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRowDTO extends $dara.Model {
  /**
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @example
   * 通义千问-Plus
   */
  modelName?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


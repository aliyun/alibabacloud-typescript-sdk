// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateModelGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The array of model IDs. At least one element is required. Each element must be the numeric model ID, not the model identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * [101, 102, 103]
   */
  modelList?: number[];
  /**
   * @remarks
   * The group name. The name must be 1 to 50 characters in length and must be unique within the tenant (case-insensitive).
   * 
   * This parameter is required.
   * 
   * @example
   * Professional Plan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      modelList: 'modelList',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelList: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelList)) {
      $dara.Model.validateArray(this.modelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


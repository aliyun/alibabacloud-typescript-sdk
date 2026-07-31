// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateModelGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The full member array. An empty array clears all members.
   * 
   * This parameter is required.
   * 
   * @example
   * [101, 102, 103]
   */
  modelList?: number[];
  /**
   * @remarks
   * The group name. This parameter performs a full overwrite. Pass the current name even if you do not want to rename the group.
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


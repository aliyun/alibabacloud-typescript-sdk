// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostTabDTO extends $dara.Model {
  /**
   * @remarks
   * Tab UUID
   * 
   * @example
   * all
   */
  key?: string;
  /**
   * @remarks
   * Tab display name
   * 
   * @example
   * 全部
   */
  label?: string;
  /**
   * @remarks
   * List of associated model types
   */
  modelTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      label: 'label',
      modelTypes: 'modelTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      label: 'string',
      modelTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.modelTypes)) {
      $dara.Model.validateArray(this.modelTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


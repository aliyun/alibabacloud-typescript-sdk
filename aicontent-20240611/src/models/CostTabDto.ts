// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostTabDTO extends $dara.Model {
  /**
   * @example
   * all
   */
  key?: string;
  /**
   * @example
   * 全部
   */
  label?: string;
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


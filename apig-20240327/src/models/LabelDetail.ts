// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LabelDetail extends $dara.Model {
  /**
   * @remarks
   * The label key
   * 
   * @example
   * version
   */
  key?: string;
  /**
   * @remarks
   * The list of available values for this label
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


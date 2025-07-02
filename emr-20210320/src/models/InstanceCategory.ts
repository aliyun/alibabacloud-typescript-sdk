// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceCategory extends $dara.Model {
  /**
   * @remarks
   * 默认值。
   * 
   * @example
   * CLUSTER
   */
  defaultValue?: string;
  /**
   * @example
   * null
   */
  keys?: string[];
  /**
   * @example
   * null
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      keys: 'Keys',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


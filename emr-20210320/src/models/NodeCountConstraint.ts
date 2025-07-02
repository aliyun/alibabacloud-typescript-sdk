// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeCountConstraint extends $dara.Model {
  /**
   * @example
   * 100
   */
  max?: number;
  /**
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * range
   */
  type?: string;
  values?: number[];
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'number' },
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


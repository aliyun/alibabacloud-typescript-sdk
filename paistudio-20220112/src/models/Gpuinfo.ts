// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GPUInfo extends $dara.Model {
  /**
   * @remarks
   * Quantity
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Type
   * 
   * @example
   * T4
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


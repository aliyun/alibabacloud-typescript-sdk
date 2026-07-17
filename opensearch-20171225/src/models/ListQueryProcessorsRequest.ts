// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryProcessorsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return default rules. The default value is 0. Valid values:
   * 
   * - 0: Returns all query analysis rules.
   * 
   * - 1: Returns only default query analysis rules.
   * 
   * - 2: Returns only non-default query analysis rules.
   * 
   * @example
   * 0
   */
  isActive?: number;
  static names(): { [key: string]: string } {
    return {
      isActive: 'isActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isActive: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryProcessorsRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of query analysis rules to be queried. Default value: 0. Valid values:
   * 
   * *   0: queries all query analysis rules.
   * *   1: queries the default query analysis rules.
   * *   2: queries the query analysis rules that are not the default rules.
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


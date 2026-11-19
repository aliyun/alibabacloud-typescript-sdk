// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchInformation extends $dara.Model {
  /**
   * @remarks
   * The search time, in milliseconds (ms).
   * 
   * @example
   * 700
   */
  searchTime?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 13
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      searchTime: 'searchTime',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchTime: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


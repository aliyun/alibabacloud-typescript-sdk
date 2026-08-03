// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScenesRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword. This operation performs a case-insensitive, fuzzy match.
   * 
   * @example
   * ak
   */
  searchCode?: string;
  static names(): { [key: string]: string } {
    return {
      searchCode: 'SearchCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


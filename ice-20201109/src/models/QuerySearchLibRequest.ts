// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySearchLibRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the search library.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


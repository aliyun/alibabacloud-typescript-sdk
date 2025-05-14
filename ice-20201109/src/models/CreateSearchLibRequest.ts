// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSearchLibRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the search library. The name can contain letters and digits and must start with a letter.
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


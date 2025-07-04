// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliasesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * alias name
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * index name
   * 
   * @example
   * index
   */
  index?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      index: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


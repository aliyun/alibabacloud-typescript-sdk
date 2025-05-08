// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesetsRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * Fuzzy search for rule set ID, rule set name, rule ID, and rule name.
   * 
   * @example
   * example
   */
  anyLike?: string;
  /**
   * @remarks
   * Whether to sort in descending order.
   */
  desc?: boolean;
  /**
   * @remarks
   * Fuzzy search for rule set name.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * Specify the column to sort by.
   * 
   * @example
   * id
   */
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      anyLike: 'AnyLike',
      desc: 'Desc',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyLike: 'string',
      desc: 'boolean',
      nameLike: 'string',
      orderBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


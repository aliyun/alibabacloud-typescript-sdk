// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * Fuzzy search for values in IP access control.
   * 
   * @example
   * 10.0.0.1
   */
  configValueLike?: string;
  /**
   * @remarks
   * Whether to reverse the sorting result.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * Exact query for WAF rule ID.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * Fuzzy query for WAF rule ID or name.
   * 
   * @example
   * example
   */
  idNameLike?: string;
  /**
   * @remarks
   * Fuzzy query for WAF rule name.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * Sort the returned list by the specified column.
   * 
   * @example
   * position
   */
  orderBy?: string;
  /**
   * @remarks
   * Exact query for WAF rule status.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configValueLike: 'ConfigValueLike',
      desc: 'Desc',
      id: 'Id',
      idNameLike: 'IdNameLike',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValueLike: 'string',
      desc: 'boolean',
      id: 'number',
      idNameLike: 'string',
      nameLike: 'string',
      orderBy: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


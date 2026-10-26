// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFavoriteReportsRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword of the work name.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * Number of rows in the work list to be queried:
   * Default value: 10
   * Maximum value: 9999
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Type of the work to be queried (leave blank to query all types). Value range:
   * - DATAPRODUCT: Data Portal
   * - PAGE: Dashboard
   * - REPORT: Spreadsheet
   * 
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * The UserID of the user in Quick BI to be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageSize: 'PageSize',
      treeType: 'TreeType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageSize: 'number',
      treeType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


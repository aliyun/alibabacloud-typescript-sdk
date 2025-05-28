// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentViewReportsRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword of the name of the work.
   * 
   * @example
   * Financial Statements
   */
  keyword?: string;
  /**
   * @remarks
   * The number of days to query data in the last few days. Default value: 10.
   * 
   * @example
   * 10
   */
  offsetDay?: number;
  /**
   * @remarks
   * Query the number of rows in the work list:
   * 
   * *   Default value: 10.
   * *   Maximum value: 9999
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query mode. Valid values:
   * 
   * *   1: Sort by number of visits
   * *   2: Sort by Last Access Time
   * 
   * @example
   * 1
   */
  queryMode?: string;
  /**
   * @remarks
   * Query the type of the work (fill in the blank to query all types). Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   REPORT: workbook
   * 
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * The UserID of the user in the Quick BI.
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
      offsetDay: 'OffsetDay',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      treeType: 'TreeType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      offsetDay: 'number',
      pageSize: 'number',
      queryMode: 'string',
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


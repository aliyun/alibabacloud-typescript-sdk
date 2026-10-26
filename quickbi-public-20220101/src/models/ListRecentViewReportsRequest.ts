// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentViewReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in the name of the work.
   * 
   * @example
   * FinancialReport
   */
  keyword?: string;
  /**
   * @remarks
   * The number of recent days to query data for. Default value: 10.
   * 
   * @example
   * 10
   */
  offsetDay?: number;
  /**
   * @remarks
   * The number of rows in the work list to query:
   * 
   * - Default value: 10.
   * - Maximum value: 9999.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query mode. Valid values:
   * 
   * - 1: Sorted by number of visits.
   * - 2: Sorted by most recent visit time.
   * 
   * @example
   * 1
   */
  queryMode?: string;
  /**
   * @remarks
   * The type of work to query. Leave this parameter empty to query all types. Valid values:
   * - DATAPRODUCT: data portal
   * - PAGE: dashboard
   * - REPORT: workbook
   * 
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * The UserID of the user to query in Quick BI.
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


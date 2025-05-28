// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSharedReportsRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword of the name of the work.
   * 
   * @example
   * Test report
   */
  keyword?: string;
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
   * The UserID of the user to be queried in the Quick BI.
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


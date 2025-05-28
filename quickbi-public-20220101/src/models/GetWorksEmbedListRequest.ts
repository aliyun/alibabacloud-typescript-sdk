// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorksEmbedListRequest extends $dara.Model {
  /**
   * @remarks
   * Report name (fuzzy match)
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * Page number (defaults to 1 if empty)
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of items per page (defaults to 10 if empty)
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Report type
   * 
   * - page, Dashboard
   * - screen, Data Screen
   * - report, Spreadsheet
   * - ANALYSIS, Ad-hoc Analysis
   * - dashboardOfflineQuery, Self-service Data Retrieval
   * - dataForm, Data Entry Form
   * 
   * @example
   * page
   */
  worksType?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 919818-***-*****-wdasd
   */
  wsId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      worksType: 'WorksType',
      wsId: 'WsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      worksType: 'string',
      wsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


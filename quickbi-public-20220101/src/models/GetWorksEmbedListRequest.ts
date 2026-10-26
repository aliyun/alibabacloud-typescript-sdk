// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorksEmbedListRequest extends $dara.Model {
  /**
   * @remarks
   * The report name. Fuzzy match is supported.
   * 
   * @example
   * Test dataset
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The report type. Valid values:
   * 
   * - page: Dashboard.
   * - screen: Data screen.
   * - report: Workbook.
   * - ANALYSIS: Ad hoc analysis.
   * - dashboardOfflineQuery: Self-service data retrieval.
   * - dataForm: Data entry.
   * 
   * @example
   * page
   */
  worksType?: string;
  /**
   * @remarks
   * The workspace ID.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksByOrganizationRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * - Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the works to query. Valid values:
   * 
   * - 0: Unpublished.
   * - 1: Published.
   * - 2: Modified but not published.
   * - 3: Offline.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The third-party embedding status. Valid values:
   * 
   * - 0: Embedding is not enabled.
   * - 1: Embedding is enabled.
   * 
   * @example
   * 1
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The type of works to query. Leave this parameter empty to query all types. Valid values:
   * 
   * - DATAPRODUCT: data portal
   * - PAGE: dashboard
   * - REPORT: workbook
   * - dashboardOfflineQuery: custom query
   * 
   * @example
   * PAGE
   */
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      thirdPartAuthFlag: 'number',
      worksType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


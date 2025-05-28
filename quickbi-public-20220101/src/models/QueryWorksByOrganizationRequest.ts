// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksByOrganizationRequest extends $dara.Model {
  /**
   * @remarks
   * Page number.
   * 
   * - Default value is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * - Default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the work to query. Possible values:
   * 
   * - 0: Unpublished
   * - 1: Published
   * - 2: Modified but not published
   * - 3: Offline
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Possible values:
   * 
   * - 0: Embedding not enabled
   * - 1: Embedding enabled
   * 
   * @example
   * 1
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The type of work to query. Leave blank to query all types. Possible values:
   * 
   * - DATAPRODUCT: Data Portal
   * - PAGE: Dashboard
   * - REPORT: Spreadsheet
   * - dashboardOfflineQuery: Self-service Data Retrieval
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


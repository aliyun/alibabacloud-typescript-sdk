// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEmbeddedInfoResponseBodyResultDetail extends $dara.Model {
  /**
   * @remarks
   * The number of embedded self-service fetching.
   * 
   * @example
   * 1
   */
  dashboardOfflineQuery?: number;
  /**
   * @remarks
   * The number of embedded dashboards.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of embedded spreadsheets.
   * 
   * @example
   * 1
   */
  report?: number;
  static names(): { [key: string]: string } {
    return {
      dashboardOfflineQuery: 'DashboardOfflineQuery',
      page: 'Page',
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardOfflineQuery: 'number',
      page: 'number',
      report: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


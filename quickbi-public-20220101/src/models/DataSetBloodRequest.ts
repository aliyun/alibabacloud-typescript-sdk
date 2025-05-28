// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSetBloodRequest extends $dara.Model {
  /**
   * @remarks
   * List of dataset IDs, separated by English commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 234235234,234235235,234235235
   */
  dataSetIds?: string;
  /**
   * @remarks
   * Specify the owner of the report, which is the userId.
   * 
   * @example
   * dasasgaj342351
   */
  userId?: string;
  /**
   * @remarks
   * Specify the type of report:
   * - REPORT: Workbooks
   * - dashboardOfflineQuery: Downloads
   * - DASHBOARD: Dashboard
   * - ANALYSIS: Ad Hoc Analysis
   * - SCREEN: Visualization Screen
   * - PAGE: Old dashboard
   * 
   * @example
   * PAGE
   */
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSetIds: 'DataSetIds',
      userId: 'UserId',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetIds: 'string',
      userId: 'string',
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


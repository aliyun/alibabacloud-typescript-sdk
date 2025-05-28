// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSetBloodResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Work ID.
   * 
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  worksId?: string;
  /**
   * @remarks
   * Work types: - REPORT: 
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
      worksId: 'WorksId',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
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


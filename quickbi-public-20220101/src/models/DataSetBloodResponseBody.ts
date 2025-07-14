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

export class DataSetBloodResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  /**
   * @remarks
   * Array of works.
   */
  result?: DataSetBloodResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DataSetBloodResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSqlPatternCompareReportRequest extends $dara.Model {
  /**
   * @remarks
   * The AnalyticDB for MySQL instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-2ze1234567890****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The SQL Pattern comparison report ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      reportId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


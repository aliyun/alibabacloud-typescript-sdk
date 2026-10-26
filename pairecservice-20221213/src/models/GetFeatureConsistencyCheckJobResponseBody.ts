// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureConsistencyCheckJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration information.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the feature consistency check configuration.
   * 
   * @example
   * 5
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @remarks
   * The name of the feature consistency check task configuration.
   * 
   * @example
   * feature_consistency_check_1
   */
  featureConsistencyCheckJobConfigName?: string;
  /**
   * @remarks
   * The end time. The time is in ISO 8601 format and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtEndTime?: string;
  /**
   * @remarks
   * The start time. The time is in ISO 8601 format and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The log information.
   */
  logs?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - ToRun: Pending.
   * - Running: Running.
   * - Success: Succeeded.
   * - Failure: Failed.
   * - Terminated: Stopped or canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      featureConsistencyCheckJobConfigName: 'FeatureConsistencyCheckJobConfigName',
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      logs: 'Logs',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      featureConsistencyCheckJobConfigName: 'string',
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


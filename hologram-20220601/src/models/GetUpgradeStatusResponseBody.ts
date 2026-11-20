// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUpgradeStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details.
   * 
   * @example
   * {"UpgradePhase":"Upgrade","StatusCode":"LeaderRestartFailed","FlightingReport":{"SQLResultStat":{"TotalExecuted":9000"Exceptions":0,"Incorrect":1,"Slow":1,"DQLSpeedup":2}"SegmentFormatStat":[{"Database":"test_db","TableUsingSegmentCount":5},{"Database":"user_order","TableUsingSegmentCount":7}],"EstimatedUpgradeTime":{"StopInstance":30,"BackupData":120,"UpgradeInstance":600},"ReadPermissionCheckStat":[{"db":"tst0","user":"v4_300433463265624129","schema":"dim_db","table":"it_rpt_org_tree_info_partition_all"},{"db":"tst1","user":"v4_300433463265624129","schema":"dim_db","table":"it_rpt_org_tree_info_partition_all_2"},]},"UpgradingSteps":{"Stop":{"Status":"Success","StartTime":"2023-05-09T06:48:28.843Z","StopTime":"2023-05-09T06:48:28.843Z"},"Backup":{"Status":"Success","StartTime":"2023-05-09T06:48:28.843Z","StopTime":"2023-05-09T06:48:28.843Z"},"DoUpgrade":{"Status":"Success","StartTime":"2023-05-09T06:48:28.843Z","StopTime":"2023-05-09T06:48:28.843Z"},"Rollback":{"Status":"Success","StartTime":"2023-05-09T06:48:28.843Z","StopTime":"2023-05-09T06:48:28.843Z"}},"Instances":{"LeaderInstanceId":"hgxxx","LeaderInstanceName":"ERP instance","LeaderInstanceStatus":"Running","FollowerInstances":[{"InstanceId":"hgxxx","InstanceName":"TMSinstance","Status":"Running"},{"InstanceId":"hxxx""InstanceName":"WMS readonly","Status":"Unavailable"}]}}
   */
  details?: string;
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * 1.3.23
   */
  fromVersion?: string;
  /**
   * @remarks
   * The time when the preparation is completed. The time is in UTC and formatted in accordance with ISO 8601.
   * 
   * @example
   * 2023-05-09T06:48:28.843Z
   */
  prepareFinishTime?: string;
  /**
   * @remarks
   * The status of the Airflow DAG used for the instance upgrade.
   * 
   * @example
   * archived
   */
  status?: string;
  /**
   * @remarks
   * The target version.
   * 
   * @example
   * 1.3.24
   */
  toVersion?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      fromVersion: 'FromVersion',
      prepareFinishTime: 'PrepareFinishTime',
      status: 'Status',
      toVersion: 'ToVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: 'string',
      fromVersion: 'string',
      prepareFinishTime: 'string',
      status: 'string',
      toVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpgradeStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetUpgradeStatusResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D73E42D0-AA72-5880-B96F-548B43C84736
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. This parameter is unrelated to the business logic.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetUpgradeStatusResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


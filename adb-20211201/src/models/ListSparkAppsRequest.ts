// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSparkAppsRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The filter conditions defined as a JSON-formatted string. The following valid KEY values and their meanings are supported in the JSON string:
   * - SubmittedTimeRange: the start time.
   * - TerminatedTimeRange: the end time.
   * - AppStates: the status of the Spark job.
   * - AppId: the ID of the Spark job.
   * - AppNameRegex: the regular expression for the name of the Spark job.
   * - Tag: the tag information.
   * - ResourceGroupName: the name of the resource group.
   * 
   * For the start time and end time filter conditions, specify the range by using the following substructure:
   * - Min: the lower bound of the time range. A value of null indicates no limit.
   * - Max: the upper bound of the time range. A value of null indicates no limit.
   * 
   * @example
   * {
   * "SubmittedTimeRang": {
   *     "Max": 10000,
   *     "Min": 0
   *   },
   *   "TerminatedTimeRange": {
   *     "Max": 10000,
   *     "Min": 0
   *   },
   *   "AppStates": ["STARTING"],
   *   "AppId": "adc",
   *   "AppNameRegex": "cde",
   *   "AttemptId": "abc-001"
   * }
   */
  filters?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **10** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * @example
   * test_instance
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filters: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


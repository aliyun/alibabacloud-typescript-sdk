// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRecordUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain name to query.
   * 
   * - Supports single or batch domain queries. Separate multiple domain names with commas (,).
   * - If this parameter is left empty, the merged data of all live streaming domain names is returned by default.
   * - When you specify DomainName, make sure that the specified domain name is a live streaming domain name and that the caller has the required permissions on the domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC. Requirements:
   * 
   * - The end time must be later than the start time (StartTime).
   * - The maximum time span between the end time and the start time is 31 days. Requests that exceed 31 days fail and return an error.
   * 
   * @example
   * 2021-05-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Unit: seconds. Valid values:
   * 
   * - 60.
   * 
   * - 300.
   * 
   * - 3600.
   * 
   * - 86400.
   * 
   * >If this parameter is not specified or an unsupported value is specified, the default time granularity is 300 seconds for query spans within 31 days and 86400 seconds for query spans longer than 31 days.
   * 
   * @example
   * 300
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region. Valid values:
   * 
   * - **cn-beijing**: Beijing.
   * 
   * - **cn-shanghai**: Shanghai.
   * 
   * - **cn-shenzhen**: Shenzhen.
   * 
   * - **cn-qingdao**: Qingdao.
   * 
   * - **ap-southeast-1**: Singapore.
   * 
   * - **eu-central-1**: Germany.
   * 
   * - **ap-northeast-1**: Tokyo.
   * 
   * - **ap-southeast-5**: Jakarta.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The grouping key. Valid values:
   * 
   * - **domain**: groups query results by domain name.
   * - **record_fmt**: groups query results by recording type.
   * 
   * > You can specify one or more values. Separate multiple values with commas (,). Default value: `domain,record_fmt`. If this parameter is set to empty or `null`, the results are not grouped by the preceding keys.
   * 
   * @example
   * domain,record_fmt
   */
  splitBy?: string;
  /**
   * @remarks
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * - The minimum data granularity is 5 minutes.
   * - If this parameter is not specified, data of the last 24 hours is returned by default.
   * 
   * >The start time can be set to a point in time within the last 90 days from the current time, accurate to the second.
   * 
   * @example
   * 2021-05-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      splitBy: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


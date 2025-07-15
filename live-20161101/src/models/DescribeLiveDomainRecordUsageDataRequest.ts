// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRecordUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain to query.
   * 
   * *   You can query one or more domain names. If you specify multiple domain names, separate them with commas (,).
   * *   If you leave this parameter empty, the data of all domain names within your Alibaba Cloud account is returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC. Value requirements:
   * 
   * *   The end time is later than the start time.
   * *   The time range between the start time and end time is up to 31 days. If the time range is more than 31 days, the request fails and an error is reported.
   * 
   * @example
   * 2021-05-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Valid values:
   * 
   * *   60
   * *   300
   * *   3600
   * *   86400
   * 
   * > If you do not specify this parameter or specify an invalid value: The time granularity of the query for a time range that is less than or equal to 31 days is 300 seconds by default. The time granularity of the query for a time range that is more than 31 days is 86400 seconds by default.
   * 
   * @example
   * 300
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-qingdao**: China (Qingdao)
   * *   **ap-southeast-1**: Singapore
   * *   **eu-central-1**: Germany (Frankfurt)
   * *   **ap-northeast-1**: Japan (Tokyo)
   * *   **ap-southeast-5**: Indonesia (Jakarta)
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The key that is used to group data. Valid values:
   * 
   * *   **domain**: groups results by domain name.
   * *   **record_fmt**: groups results by recording type.
   * 
   * >  You can select one option or both. If you want to select both options, separate them with a comma (,). The default value is `domain,record_fmt`. If you leave this parameter empty or set the value to `null`, this parameter is ignored.
   * 
   * @example
   * domain,record_fmt
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * *   The minimum data granularity is 5 minutes.
   * *   If you do not specify this parameter, the data in the last 24 hours is returned.
   * 
   * > The earliest start time that you can specify is 90 days back from the current time, accurate to seconds.
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


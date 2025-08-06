// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainHitRateDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * *   If you leave this parameter empty, the merged data of all your accelerated domain names is returned.
   * *   You can specify multiple domain names and separate them with commas (,). You can specify a maximum of 500 domain names in each call.
   * *   To obtain the accelerated domain name, perform the following steps: Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management > CDN Configuration > Domain Names**. On the Domain Names page, view the accelerated domain names. Alternatively, you can call the [DescribeVodUserDomains](~~DescribeVodUserDomains~~) operation to query the accelerated domain names.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 2024-01-20T14:59:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity. Unit: seconds. Valid values: **300**, **3600**, and **86400**. If you leave this parameter empty or specify an invalid value, the default value is used. The supported time granularity varies based on the time range specified by `EndTime` and `StartTime`. The following content describes the supported time granularity.
   * 
   * *   Time range per query < 3 days: **300** (default), **3600**, and **86400**
   * *   3 days ≤ Time range per query < 31 days: **3600** (default) and **86400**
   * *   31 days ≤ Time range per query ≤ 90 days: **86400** (default)
   * 
   * @example
   * 300
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2024-01-20T13:59:58Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
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


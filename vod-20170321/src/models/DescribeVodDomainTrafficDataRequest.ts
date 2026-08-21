// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainTrafficDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name to query.
   * 
   * - If you do not specify this parameter, the pooled data of all accelerated domain names is returned by default.
   * - Batch queries are supported. Separate multiple domain names with commas (,). You can specify up to 500 domain names at a time.
   * - You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com), and choose **Configuration Management > CDN Configuration > Domain Names** in the left-side navigation pane to view the accelerated domain names that you have added to ApsaraVideo VOD. You can also invoke the [DescribeVodUserDomains](https://help.aliyun.com/document_detail/455030.html) operation to query the list of accelerated domain names.
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
   * > The end time must be later than the start time.
   * 
   * @example
   * 2019-01-20T14:59:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the data entries. Unit: seconds. Valid values: **300**, **3600**, and **86400**. If you do not specify this parameter or specify an unsupported value, the default value is used. The supported time granularity varies based on the time span specified by `StartTime` and `EndTime`:
   * 
   * - Less than 3 days (exclusive): **300** (default), **3600**, and **86400**.
   * - 3 to 31 days (exclusive): **3600** (default) and **86400**.
   * - 31 days or more: **86400** (default).
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP) in English. If you do not specify this parameter, data of all ISPs is queried by default.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region in English. If you do not specify this parameter, data of all regions is queried by default. Only the Shanghai region is supported.
   * 
   * @example
   * shanghai
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. 
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2019-01-20T13:59:58Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
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


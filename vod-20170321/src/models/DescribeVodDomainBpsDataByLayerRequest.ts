// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainBpsDataByLayerRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name to query.
   * 
   * - If you do not specify this parameter, the pooled data of all accelerated domain names is returned by default.
   * - Batch queries are supported. Separate multiple domain names with commas (,). You can specify up to 500 domain names at a time.
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com), and choose **Configuration Management > CDN Configuration > Domain Names** in the left-side navigation pane to view the accelerated domain names that you have added to ApsaraVideo VOD. You can also call the [DescribeVodUserDomains](~~DescribeVodUserDomains~~) operation to query the list of accelerated domain names.
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
   * 2019-01-23T12:40:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the data. Unit: seconds. Valid values: **300**, **3600**, and **86400**. If you do not specify this parameter or specify an unsupported value, the default value is used. The supported time granularity varies based on the time range specified by `StartTime` and `EndTime`:
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
   * The protocol type. You can specify the protocol type at the network layer or application layer.
   * 
   * Default value:
   * - all: includes both network layer and application layer
   * 
   * Network layer values:
   * - IPv4
   * - IPv6
   * 
   * Application layer values:
   * - http
   * - https
   * - quic
   * 
   * @example
   * IPv4
   */
  layer?: string;
  /**
   * @remarks
   * The name of the region in English. If you do not specify this parameter, data of all regions is queried by default.
   * 
   * @example
   * beijing
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
   * 2019-01-23T12:35:12Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      layer: 'Layer',
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
      layer: 'string',
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


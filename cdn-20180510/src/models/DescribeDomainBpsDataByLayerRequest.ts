// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataByLayerRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify up to 500 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * > If you do not specify this parameter, the bandwidth data about all accelerated domain names that belong to your Alibaba Cloud account is queried.
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
   * > The end time must be later than the start time.
   * 
   * @example
   * 2020-05-06T07:20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the data entries. Unit: seconds.
   * 
   * The time granularity varies with the maximum time range per query. Valid values: 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For more information, see **Usage notes**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP). You can call the [DescribeCdnRegionAndIsp](~~DescribeCdnRegionAndIsp~~) operation to query ISPs. If you do not specify an ISP, data of all ISPs is queried.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The layer at which you want to query the bandwidth data. Valid values:
   * 
   * *   Network layer: **IPv4** and **IPv6**.
   * *   Application layer: **http**, **https**, and **quic**.
   * *   **all**: specifies that both the network and application layers are included.
   * 
   * Default value: **all**.
   * 
   * @example
   * IPv4
   */
  layer?: string;
  /**
   * @remarks
   * The name of the region. You can call the [DescribeCdnRegionAndIsp](~~DescribeCdnRegionAndIsp~~) operation to query regions. If you do not specify a region, data in all regions is queried.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-05-06T07:10:00Z
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainBpsDataByLayerRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain. You can specify multiple domain names by separating them with commas (,). If you leave this parameter empty, the data of all domain names within your Alibaba Cloud account is returned.
   * 
   * @example
   * pull.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be displayed in UTC.
   * 
   * @example
   * 2022-03-16T16:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Valid values:
   * 
   * *   **300**
   * *   **3600**
   * *   **86400**
   * 
   * > 
   * 
   * *   If the time range specified by the StartTime and EndTime parameters is smaller than or equal to 3 days, the supported time granularities include 300, 3,600, and 86,400 seconds.
   * 
   * *   If the time range is larger than 3 days but smaller than or equal to 31 days, the supported time granularities include 3,600 and 86,400 seconds.
   * 
   * *   If the time range is larger than 31 days, the supported time granularity is 86,400 seconds.
   * 
   * *   If you specify an invalid value or do not specify this parameter, the default time granularity of 300 seconds is used.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP). If you do not specify this parameter, the data of all ISPs is returned.
   * 
   * >  You can call the [DescribeLiveRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query available regions and ISPs.
   * 
   * @example
   * tele***
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The layer at which you want to query the data. Valid values:
   * 
   * *   IPv4 and IPv6 (network layer)
   * *   http, https, and quic (application layer)
   * *   all (default)
   * 
   * @example
   * all
   */
  layer?: string;
  /**
   * @remarks
   * The name of the region. If you do not specify this parameter, the data of all regions is returned.
   * 
   * >  You can call the [DescribeLiveRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query available regions and ISPs.
   * 
   * @example
   * hangzhou
   */
  locationNameEn?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be displayed in UTC.
   * 
   * >  If you do not specify this parameter, the data of the last 24 hours is returned by default. The minimum time granularity is 5 minutes.
   * 
   * @example
   * 2022-03-15T16:00:00Z
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
      regionId: 'RegionId',
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
      regionId: 'string',
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


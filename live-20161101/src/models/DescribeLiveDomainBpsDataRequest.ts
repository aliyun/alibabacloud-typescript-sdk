// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain. You can specify a single domain name or multiple domain names. Separate multiple domain names with commas (,).
   * If this parameter is left empty, the merged data of all live streaming domains is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-12-10T09:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Unit: seconds. Valid values:
   * - **300** (default)
   * - **3600**
   * - **86400**
   * 
   * > - If this parameter is not specified or set to an unsupported value, the default value **300** is used.
   * - When the time granularity is **300**, the returned bps value is the average number of bits transmitted per second within the 300-second interval.
   * - When the time granularity is **3600** or **86400**, the returned bps value is the peak value among all 300-second data points within the query period.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP) in English. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to obtain the ISP name.
   * 
   * @example
   * alibaba
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region in English. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to obtain the region name.
   * 
   * @example
   * tianjin
   */
  locationNameEn?: string;
  ownerId?: number;
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
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-12-10T08:00:00Z
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


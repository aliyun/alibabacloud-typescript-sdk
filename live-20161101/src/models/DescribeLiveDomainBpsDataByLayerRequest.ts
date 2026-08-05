// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainBpsDataByLayerRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain. You can specify multiple domain names separated by commas (,). If this parameter is left empty, the aggregated data of all domain names is returned by default.
   * 
   * @example
   * pull.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query, in the format of <i>yyyy-MM-ddTHH:mm:ssZ</i> (UTC). The end time must be later than the start time.
   * 
   * @example
   * 2022-03-16T16:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the data to query. Unit: seconds. Valid values:
   * 
   * - **300**
   * 
   * - **3600**
   * 
   * - **86400**
   * > - Time range ≤ 3 days: Valid data timestamp granularity values are 300, 3600, and 86400.
   * > - 3 days < time range ≤ 31 days: Valid data timestamp granularity values are 3600 and 86400.
   * > - Time range > 31 days: The only valid value is 86400.
   * > - If this parameter is not specified or the specified value is not supported, the default value 300 is used.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP) in English. If this parameter is not specified, data for all ISPs is returned.
   * >You can call the [DescribeLiveRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query the English names of regions and ISPs.
   * 
   * @example
   * tele***
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The query dimension. Valid values:
   * 
   * - Network layer (IPv4, IPv6)
   * 
   * - Application layer (http, https, quic)
   * 
   * - all (default)
   * 
   * Valid values: all | IPv4 | IPv6 | http | https | quic (case-sensitive).
   * 
   * @example
   * all
   */
  layer?: string;
  /**
   * @remarks
   * The name of the region in English. If this parameter is not specified, data for all regions is returned.
   * >You can call the [DescribeLiveRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query the English names of regions and ISPs.
   * 
   * @example
   * hangzhou
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
   * The beginning of the time range to query, in the format of <i>yyyy-MM-ddTHH:mm:ssZ</i> (UTC).
   * >If this parameter is not specified, data for the last 24 hours is returned by default. The minimum data granularity is 5 minutes.
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


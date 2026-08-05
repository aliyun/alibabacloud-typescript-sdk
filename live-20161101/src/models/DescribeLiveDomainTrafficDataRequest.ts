// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainTrafficDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain. You can specify a single domain name or multiple domain names. Separate multiple domain names with commas (,). If this parameter is left empty, the merged data of all live streaming domains is returned by default.
   * > - When you specify DomainName, make sure that the specified domain names are live streaming domains and that you have the required permissions to operate on the specified domain names.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2017-12-10T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity for querying data. Unit: seconds. Valid values:
   * - **300** (default).
   * - **3600**.
   * - **86400**.
   * 
   * > If you do not set this parameter or set it to an unsupported value, the default value **300** seconds is used.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP) in English. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to obtain the ISP name. If you do not set this parameter, data of all ISPs is returned.
   * 
   * @example
   * alibaba
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region in English. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to obtain the region name. If you do not set this parameter, data of all regions is returned.
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
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * >You can query data from the past **90** days.
   * 
   * @example
   * 2017-12-10T14:00:00Z
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


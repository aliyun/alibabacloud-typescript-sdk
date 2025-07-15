// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRealTimeBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain name or names.
   * 
   * Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  If you do not set this parameter, the data of the hour following the specified start time is returned.
   * 
   * @example
   * 2015-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP).
   * 
   * To query ISPs, call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation.
   * 
   * @example
   * alibaba
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region in which you want to query data.
   * 
   * To query regions, call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation.
   * 
   * @example
   * tianjin
   */
  locationNameEn?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2015-11-30T05:39:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
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


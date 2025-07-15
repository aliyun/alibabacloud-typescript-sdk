// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRealTimeHttpCodeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
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
   * >  If you specify neither the StartTime parameter nor the EndTime parameter, the data of the last **1** hour is returned.
   * 
   * @example
   * 2015-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP).
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/448109.html) operation to query a list of available ISPs.
   * 
   * @example
   * alibaba
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/448109.html) operation to query a list of available regions.
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
   * >  If you specify neither the StartTime parameter nor the EndTime parameter, the data of the last **1** hour is returned.
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


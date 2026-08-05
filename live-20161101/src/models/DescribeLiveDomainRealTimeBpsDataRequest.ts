// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRealTimeBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * 
   * Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example1.aliyundoc.com,example2.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. It must be later than the start time. The format is *yyyy-MM-dd*T*HH:mm:ss*Z (UTC).
   * 
   * > If you do not specify this parameter, data within one hour of the start time is queried by default.
   * 
   * @example
   * 2015-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The English name of the carrier.
   * 
   * For more information, see [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html).
   * 
   * @example
   * alibaba
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The English name of the region.
   * 
   * For more information, see [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html).
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
   * The start time. The format is *yyyy-MM-dd*T*HH:mm:ss*Z (UTC).
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


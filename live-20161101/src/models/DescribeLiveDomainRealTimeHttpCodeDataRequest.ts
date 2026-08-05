// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRealTimeHttpCodeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * > - When you specify DomainName, make sure that the domain name is a live streaming domain and that the caller has the required permissions on the domain name.
   * > - Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * > If both StartTime and EndTime are left empty, data within the last **1** hour from the current time is returned by default.
   * 
   * @example
   * 2015-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP) in English.
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/448109.html) operation to obtain the ISP name.
   * 
   * @example
   * alibaba
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region in English.
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/448109.html) operation to obtain the region name.
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
   * > If both StartTime and EndTime are left empty, data within the last **1** hour from the current time is returned by default.
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


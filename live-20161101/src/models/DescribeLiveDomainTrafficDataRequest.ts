// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainTrafficDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain. You can query one or more domain names. If you specify multiple domain names, separate them with commas (,). If you do not specify this parameter, the data of all domain names within your Alibaba Cloud account is returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2017-12-10T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Valid values:
   * 
   * *   **300** (default)
   * *   **3600**
   * *   **86400**
   * 
   * >  If you specify an invalid value or do not specify this parameter, the default value **300** is used.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP). You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query a list of available ISPs. If you do not specify this parameter, the data of all ISPs is returned.
   * 
   * @example
   * alibaba
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query a list of available regions. If you do not specify this parameter, the data of all regions is returned.
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
   * >  You can query data in the last **90** days.
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


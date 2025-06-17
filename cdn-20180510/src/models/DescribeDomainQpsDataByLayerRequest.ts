// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainQpsDataByLayerRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify a maximum of 500 domain names in a request. Separate multiple domain names with commas (,).
   * 
   * By default, this operation queries the QPS of all accelerated domain names that belong to your Alibaba Cloud account.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format in the ISO 8601 standard. The time is displayed in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time interval between the data entries to return. Unit: seconds.
   * 
   * The time granularity varies with the maximum time range per query. Valid values: 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For more information, see **Description**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP) for your Alibaba Cloud CDN service. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query ISPs. If you do not set this parameter, all ISPs are queried.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The layers at which you want to query the number of queries per second. Valid values:
   * 
   * *   **Network layer**: **IPv4**and **IPv6**.
   * *   **Application layer**: **http**, **https**, and **quic**.
   * *   **all**: The default value. Both the network and application layers are included.
   * 
   * @example
   * all
   */
  layer?: string;
  /**
   * @remarks
   * The name of the region. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query the most recent region list. If you do not set this parameter, all regions are queried.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format in the ISO 8601 standard. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-30T05:33:00Z
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


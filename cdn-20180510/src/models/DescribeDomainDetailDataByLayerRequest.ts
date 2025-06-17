// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDetailDataByLayerRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Internet service provider (ISP) for your Alibaba Cloud CDN service. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query ISP names.
   * 
   * If you do not specify an ISP, data of all ISPs is queried.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The protocol by which you want to query data. Valid values: **http**, **https**, **quic**, and **all**.
   * 
   * The default value is **all**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-07-05T22:05:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * bps,ipv6_traf,traf,http_code,qps
   */
  field?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
   * 
   * @example
   * all
   */
  layer?: string;
  /**
   * @remarks
   * The detailed data of the accelerated domain names.
   * 
   * @example
   * hangzhou
   */
  locationNameEn?: string;
  /**
   * @remarks
   * The name of the region. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions.
   * 
   * If you do not specify a region, data in all regions is queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-07-05T22:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      field: 'Field',
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
      field: 'string',
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


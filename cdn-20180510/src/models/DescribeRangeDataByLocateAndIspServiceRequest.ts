// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRangeDataByLocateAndIspServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time. The maximum time range that can be specified is 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the ISP. You can specify only one ISP name in each call.
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query ISPs.
   * 
   * @example
   * unicom
   */
  ispNames?: string;
  /**
   * @remarks
   * The names of the regions. Separate multiple region names with commas (,).
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query the most recent region list.
   * 
   * @example
   * liaoning,guangxi
   */
  locationNames?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-11-30T05:33:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      endTime: 'EndTime',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      endTime: 'string',
      ispNames: 'string',
      locationNames: 'string',
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


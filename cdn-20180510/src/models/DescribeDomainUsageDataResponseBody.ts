// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainUsageDataResponseBodyUsageDataPerInterval } from "./DescribeDomainUsageDataResponseBodyUsageDataPerInterval";


export class DescribeDomainUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable region where the data was collected.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2015-12-10T22:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B955107D-E658-4E77-B913-E0AC3D31693E
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of content.
   * 
   * @example
   * static
   */
  type?: string;
  /**
   * @remarks
   * The resource usage that was collected at each interval.
   */
  usageDataPerInterval?: DescribeDomainUsageDataResponseBodyUsageDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      type: 'Type',
      usageDataPerInterval: 'UsageDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      type: 'string',
      usageDataPerInterval: DescribeDomainUsageDataResponseBodyUsageDataPerInterval,
    };
  }

  validate() {
    if(this.usageDataPerInterval && typeof (this.usageDataPerInterval as any).validate === 'function') {
      (this.usageDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


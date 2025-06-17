// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRegionDataResponseBodyValue } from "./DescribeDomainRegionDataResponseBodyValue";


export class DescribeDomainRegionDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 86400
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
   * The end of the time range for which the data was queried.
   * 
   * @example
   * 2015-12-07T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2E5AD83F-BD7B-462E-8319-2E30E305519A
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for which the data was queried.
   * 
   * @example
   * 2015-12-05T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The proportions of requests initiated from each region.
   */
  value?: DescribeDomainRegionDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      value: DescribeDomainRegionDataResponseBodyValue,
    };
  }

  validate() {
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainISPDataResponseBodyValue } from "./DescribeDomainIspdataResponseBodyValue";


export class DescribeDomainISPDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval. Unit: seconds.
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
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DE81639B-DAC1-4C76-AB72-F34B836837D5
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range that was queried.
   * 
   * @example
   * 2019-11-29T05:33:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The access statistics by ISP.
   */
  value?: DescribeDomainISPDataResponseBodyValue;
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
      value: DescribeDomainISPDataResponseBodyValue,
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


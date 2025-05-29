// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainUvDataResponseBodyUvDataInterval } from "./DescribeVsDomainUvDataResponseBodyUvDataInterval";


export class DescribeVsDomainUvDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2015-11-30T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2015-11-29T00:00:00Z
   */
  startTime?: string;
  uvDataInterval?: DescribeVsDomainUvDataResponseBodyUvDataInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      uvDataInterval: 'UvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      uvDataInterval: DescribeVsDomainUvDataResponseBodyUvDataInterval,
    };
  }

  validate() {
    if(this.uvDataInterval && typeof (this.uvDataInterval as any).validate === 'function') {
      (this.uvDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


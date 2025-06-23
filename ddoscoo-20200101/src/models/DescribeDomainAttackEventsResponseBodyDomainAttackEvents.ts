// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainAttackEventsResponseBodyDomainAttackEvents extends $dara.Model {
  /**
   * @remarks
   * The attacked domain name.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The time when the DDoS attack stopped. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1560320160
   */
  endTime?: number;
  /**
   * @remarks
   * The peak attack QPS.
   * 
   * @example
   * 1000
   */
  maxQps?: number;
  /**
   * @remarks
   * The time when the DDoS attack started. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1560312900
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      maxQps: 'MaxQps',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      maxQps: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainTrafficDataRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-09-21T02:50:42Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @example
   * beijing
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-08-18T16:00:00Z
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


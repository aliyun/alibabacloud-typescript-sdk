// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsUpPeakPublishStreamDataRequest extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * on
   */
  domainSwitch?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T21:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainSwitch: 'DomainSwitch',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainSwitch: 'string',
      endTime: 'string',
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


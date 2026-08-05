// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpBpsPeakOfLineRequest extends $dara.Model {
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
   * The domain name statistics switch. Valid values:
   * 
   * - on: Enables domain name-level statistics.
   * - off: User-level data. User-level data is collected by default.
   * 
   * @example
   * on
   */
  domainSwitch?: string;
  /**
   * @remarks
   * The end time of stream pulling. Specify the time in UTC. The time interval between StartTime and EndTime must be within 30 days, and EndTime must be later than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The dedicated line. Valid values: integers in the range of [0, 9].
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  line?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of stream pulling. Specify the time in UTC. The time interval between StartTime and EndTime must be within 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-10-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainSwitch: 'DomainSwitch',
      endTime: 'EndTime',
      line: 'Line',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainSwitch: 'string',
      endTime: 'string',
      line: 'string',
      ownerId: 'number',
      regionId: 'string',
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


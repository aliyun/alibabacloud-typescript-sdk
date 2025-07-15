// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpPeakPublishStreamDataRequest extends $dara.Model {
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
   * Specifies whether to collect statistics at the domain name level. Valid values:
   * 
   * *   on: collects statistics at the domain name level.
   * *   off (default): collects statistics at the user level.
   * 
   * @example
   * on
   */
  domainSwitch?: string;
  /**
   * @remarks
   * The end time of stream pulling. The time must be in UTC. The end time must be later than the start time. The maximum time range that can be specified by StartTime and EndTime is 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-10-10T21:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The start time of stream pulling. The time must be in UTC. The maximum time range that can be specified by StartTime and EndTime is 30 days.
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


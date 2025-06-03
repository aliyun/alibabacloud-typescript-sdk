// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcDurationDataRequest extends $dara.Model {
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 2020-02-04T07:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @example
   * 2020-02-04T05:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      serviceArea: 'string',
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


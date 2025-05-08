// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-wuxi-5
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the push operation. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-28T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * Success
   */
  statusDescrip?: string;
  /**
   * @remarks
   * The time when the status was last updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-07T02:37:10Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      startTime: 'StartTime',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      startTime: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


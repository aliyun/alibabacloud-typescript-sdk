// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDashboardMemberDeviceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      regionId: 'string',
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


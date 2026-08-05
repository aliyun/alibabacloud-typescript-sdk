// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserBillPredictionRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time must be in UTC and follow the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2015-12-01T05:45:00Z
   */
  endTime?: string;
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
   * The start time. The time must be in UTC and follow the *yyyy-mm-dd*T*hh:mm:ss*Z format.
   * 
   * @example
   * 2015-12-01T05:40:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


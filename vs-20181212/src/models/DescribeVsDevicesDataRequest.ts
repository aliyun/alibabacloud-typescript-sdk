// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDevicesDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the data to retrieve. The end time must be later than the start time.
   * 
   * > - Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * > - The minimum data granularity is 5 minutes.
   * > - If you do not specify this parameter, the data of the last 24 hours is retrieved by default.
   * 
   * @example
   * 2022-01-30T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time of the data to retrieve.    
   * > - Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * > - The minimum data granularity is 5 minutes.
   * > - If you do not specify this parameter, the data of the last 24 hours is retrieved by default.
   * 
   * @example
   * 2022-01-04T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      groupId: 'string',
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


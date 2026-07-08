// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDevicesDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time.
   * 
   * > - The date must follow the ISO 8601 standard and be in UTC. The format is YYYY-MM-DDThh:mm:ssZ.
   * >
   * > - The minimum data granularity is 5 minutes.
   * >
   * > - If you do not specify this parameter, data from the last 24 hours is retrieved by default.
   * 
   * @example
   * 2022-01-30T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * You can query by space ID.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * > - The date must follow the ISO 8601 standard and be in UTC. The format is YYYY-MM-DDThh:mm:ssZ.
   * >
   * > - The minimum data granularity is 5 minutes.
   * >
   * > - If you do not specify this parameter, data from the last 24 hours is retrieved by default.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDevicesDataRequest extends $dara.Model {
  /**
   * @example
   * 2022-01-30T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  ownerId?: number;
  /**
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


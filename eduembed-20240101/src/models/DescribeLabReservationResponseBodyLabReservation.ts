// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLabReservationResponseBodyLabReservation extends $dara.Model {
  accountId?: number;
  endTime?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  memberCount?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      endTime: 'EndTime',
      id: 'Id',
      memberCount: 'MemberCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      endTime: 'string',
      id: 'string',
      memberCount: 'number',
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


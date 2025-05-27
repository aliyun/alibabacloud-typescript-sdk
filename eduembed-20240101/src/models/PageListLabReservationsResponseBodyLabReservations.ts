// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageListLabReservationsResponseBodyLabReservations extends $dara.Model {
  /**
   * @example
   * -
   */
  accountId?: number;
  /**
   * @example
   * 2023-05-04 09:25:41
   */
  endTime?: string;
  /**
   * @example
   * 552
   */
  id?: string;
  /**
   * @example
   * 1
   */
  memberCount?: number;
  /**
   * @example
   * 2023-05-04 07:25:41
   */
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


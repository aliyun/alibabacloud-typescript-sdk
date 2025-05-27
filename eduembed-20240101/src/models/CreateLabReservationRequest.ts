// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLabReservationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16600
   */
  accountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-04-29 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 875
   */
  labId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  memberCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-04-29 16:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      endTime: 'EndTime',
      labId: 'LabId',
      memberCount: 'MemberCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      endTime: 'string',
      labId: 'number',
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


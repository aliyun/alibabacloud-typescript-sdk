// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShiftPersonnelsRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the on-duty engineer starts a shift. Set the value to a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1593950832000
   */
  beginTime?: number;
  /**
   * @remarks
   * The time when the on-duty engineer ends a shift. Set the value to a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1593950832000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You can log on to the DataWorks console and move the pointer over the profile picture in the upper-right corner to view the ID.
   * 
   * @example
   * 1933790****551
   */
  shiftPersonUID?: string;
  /**
   * @remarks
   * The unique identifier of the shift schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab6456ada634b2f938ee******9b45b
   */
  shiftScheduleIdentifier?: string;
  /**
   * @remarks
   * The type of the on-duty engineer that you want to query. Valid values: ALL, PRIMARY, BACKUP, and DESIGNATED_USER.
   * 
   * @example
   * ALL
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      shiftPersonUID: 'ShiftPersonUID',
      shiftScheduleIdentifier: 'ShiftScheduleIdentifier',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      shiftPersonUID: 'string',
      shiftScheduleIdentifier: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShiftPersonnelsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the on-duty period. This value is a timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1593950832000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time of the on-duty period. This value is a timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1593950832000
   */
  endTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID. You can log on to the DataWorks console and move the pointer over the profile picture in the upper-right corner to view the account ID.
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
   * The query condition for on-duty personnel. Valid values:
   * - ALL: all on-duty personnel.
   * - PRIMARY: primary on-duty personnel.
   * - BACKUP: backup on-duty personnel.
   * - DESIGNATED_USER: designated personnel.
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


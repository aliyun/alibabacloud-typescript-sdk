// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupNotifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp.
   * 
   * Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1551761781273
   */
  endTime?: number;
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6780****
   */
  groupId?: string;
  /**
   * @remarks
   * The type of the pause notification.
   * 
   * Currently, only PauseNotify is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PauseNotify
   */
  policyType?: string;
  regionId?: string;
  /**
   * @remarks
   * The start timestamp.
   * 
   * Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1551761781273
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      policyType: 'string',
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


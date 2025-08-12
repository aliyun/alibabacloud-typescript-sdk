// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupNotifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period for the policy.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1623208500000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 7301****
   */
  groupId?: string;
  /**
   * @remarks
   * The policy type. Valid value: PauseNotify.
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
   * The start time of the validity period for the policy.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1622949300000
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


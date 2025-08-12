// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorGroupNotifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 6780****
   */
  groupId?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * Valid value: PauseNotify.
   * 
   * This parameter is required.
   * 
   * @example
   * PauseNotify
   */
  policyType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      policyType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


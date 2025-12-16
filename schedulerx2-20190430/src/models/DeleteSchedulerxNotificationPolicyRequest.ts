// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSchedulerxNotificationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test-weekdays
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
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


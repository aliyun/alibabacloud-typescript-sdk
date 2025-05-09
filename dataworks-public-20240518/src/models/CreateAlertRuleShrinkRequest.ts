// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @remarks
   * The configuration for the alert notification.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the owner of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 279114181716147735
   */
  owner?: string;
  /**
   * @remarks
   * The alert triggering condition.
   * 
   * This parameter is required.
   */
  triggerConditionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      name: 'Name',
      notificationShrink: 'Notification',
      owner: 'Owner',
      triggerConditionShrink: 'TriggerCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      name: 'string',
      notificationShrink: 'string',
      owner: 'string',
      triggerConditionShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


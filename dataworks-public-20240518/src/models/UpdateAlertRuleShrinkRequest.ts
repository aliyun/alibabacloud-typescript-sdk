// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the rule.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 105412
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * collection_name
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
   * @example
   * 193379****
   */
  owner?: string;
  /**
   * @remarks
   * The alert triggering condition.
   */
  triggerConditionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      notificationShrink: 'Notification',
      owner: 'Owner',
      triggerConditionShrink: 'TriggerCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
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


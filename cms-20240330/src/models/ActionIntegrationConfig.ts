// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActionIntegrationConfig extends $dara.Model {
  /**
   * @remarks
   * The list of action integration configurations. An action integration is an automated action that is executed after an alert rule is triggered, such as sending a notification or invoking a webhook. Each action integration is referenced by its action integration ID.
   */
  actions?: string[];
  /**
   * @remarks
   * Indicates whether action integration is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


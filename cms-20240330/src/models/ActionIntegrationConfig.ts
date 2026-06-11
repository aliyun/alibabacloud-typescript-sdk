// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActionIntegrationConfig extends $dara.Model {
  /**
   * @remarks
   * A list of actions to perform.
   */
  actions?: string[];
  /**
   * @remarks
   * Indicates whether action integration is enabled.
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


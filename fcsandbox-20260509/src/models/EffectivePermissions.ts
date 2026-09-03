// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EffectivePermissions extends $dara.Model {
  /**
   * @remarks
   * The actions.
   */
  actions?: string[];
  /**
   * @remarks
   * The capabilities.
   */
  capabilities?: string[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      capabilities: 'capabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      capabilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActionIntegrationConfig extends $dara.Model {
  /**
   * @remarks
   * 行动集成 ID 列表
   */
  actions?: string[];
  /**
   * @remarks
   * 是否启用行动集成
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


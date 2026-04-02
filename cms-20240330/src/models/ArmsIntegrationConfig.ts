// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArmsIntegrationConfig extends $dara.Model {
  /**
   * @remarks
   * 是否启用 ARMS 集成
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


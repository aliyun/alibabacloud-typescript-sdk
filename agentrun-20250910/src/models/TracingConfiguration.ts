// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TracingConfiguration extends $dara.Model {
  /**
   * @remarks
   * 是否启用链路追踪功能
   * 
   * @example
   * true
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayQuotaRuleStatusRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  clearHistory?: boolean;
  /**
   * @example
   * false
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      clearHistory: 'clearHistory',
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearHistory: 'boolean',
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


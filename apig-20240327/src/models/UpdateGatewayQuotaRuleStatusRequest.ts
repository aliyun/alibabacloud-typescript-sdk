// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayQuotaRuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear historical quota usage when enabling or disabling the rule.
   * 
   * @example
   * false
   */
  clearHistory?: boolean;
  /**
   * @remarks
   * Specifies whether to enable or disable the rule.
   * 
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


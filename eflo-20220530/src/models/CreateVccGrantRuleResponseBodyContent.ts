// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVccGrantRuleResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Authorized resource primary key ID
   * 
   * @example
   * grant-rule-8rgvqazb
   */
  grantRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      grantRuleId: 'GrantRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


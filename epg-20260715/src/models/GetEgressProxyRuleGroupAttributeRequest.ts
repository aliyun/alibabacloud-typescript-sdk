// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEgressProxyRuleGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eprg-uf60966a9633667c****
   */
  egressProxyRuleGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


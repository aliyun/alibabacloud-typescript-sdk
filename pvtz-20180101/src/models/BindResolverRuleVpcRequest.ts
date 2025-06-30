// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindResolverRuleVpcRequestVpc } from "./BindResolverRuleVpcRequestVpc";


export class BindResolverRuleVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  /**
   * @remarks
   * The VPCs that you want to associate with the forwarding rule.
   */
  vpc?: BindResolverRuleVpcRequestVpc[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'string',
      vpc: { 'type': 'array', 'itemType': BindResolverRuleVpcRequestVpc },
    };
  }

  validate() {
    if(Array.isArray(this.vpc)) {
      $dara.Model.validateArray(this.vpc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


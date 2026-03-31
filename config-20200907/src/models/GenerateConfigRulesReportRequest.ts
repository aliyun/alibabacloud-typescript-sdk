// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateConfigRulesReportRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the rule. Separate multiple rule IDs with commas (,).
   * 
   * For more information about how to query the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * @example
   * cr-25d86457e0d900b5****
   */
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAggregateConfigRulesReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of the account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The rule ID. Separate multiple rule IDs with commas (,).
   * 
   * For more information about how to obtain the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * @example
   * cr-25d86457e0d900b5****
   */
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
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


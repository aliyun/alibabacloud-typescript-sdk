// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails } from "./GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails";


export class GetAggregateConfigRuleResponseBodyConfigRuleSource extends $dara.Model {
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * *   If the rule was created based on a managed rule, the value of this parameter is the name of the managed rule.
   * *   If the rule is a custom rule, the value of this parameter is the Alibaba Cloud Resource Name (ARN) of the relevant function in Function Compute.
   * 
   * @example
   * acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/specific-config
   */
  identifier?: string;
  /**
   * @remarks
   * The way in which the rule was created. Valid values:
   * 
   * *   CUSTOM_FC: The rule is a custom rule.
   * *   ALIYUN: The rule was created based on a managed rule of Alibaba Cloud.
   * 
   * @example
   * ALIYUN
   */
  owner?: string;
  /**
   * @remarks
   * The details of the source of the rule.
   */
  sourceDetails?: GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      owner: 'Owner',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      owner: 'string',
      sourceDetails: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.sourceDetails)) {
      $dara.Model.validateArray(this.sourceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigRuleResponseBodyConfigRuleSourceSourceDetails } from "./GetConfigRuleResponseBodyConfigRuleSourceSourceDetails";


export class GetConfigRuleResponseBodyConfigRuleSource extends $dara.Model {
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * *   If the rule is a managed rule, the value of this parameter is the identifier of the managed rule.
   * *   If the rule is a custom rule, the value of this parameter is the Alibaba Cloud Resource Name (ARN) of a function.
   * 
   * @example
   * acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/specific-config
   */
  identifier?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   CUSTOM_FC: a custom rule.
   * *   ALIYUN: a managed rule.
   * 
   * @example
   * ALIYUN
   */
  owner?: string;
  /**
   * @remarks
   * The details of the source of the rule.
   */
  sourceDetails?: GetConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
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
      sourceDetails: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleSourceSourceDetails },
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


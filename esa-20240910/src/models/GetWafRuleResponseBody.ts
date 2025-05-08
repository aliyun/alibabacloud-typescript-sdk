// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class GetWafRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Rule configuration.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * The ID of the WAF rule, which can be obtained by calling the [ListWafRules](https://help.aliyun.com/document_detail/2878257.html) interface.
   * 
   * @example
   * 2000001
   */
  id?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * WAF operation phase.
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The position of the rule in the rule set.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rulesetId?: number;
  /**
   * @remarks
   * Rule status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The last modified time of the rule.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      requestId: 'RequestId',
      rulesetId: 'RulesetId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      requestId: 'string',
      rulesetId: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class GetWafRulesetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF ruleset. You can obtain this ID by calling the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The ruleset name.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The execution phase of the WAF ruleset. Valid values:
   * 
   * - `http_whitelist`: A whitelist rule
   * 
   * - `http_custom`: A custom rule
   * 
   * - `http_managed`: A managed rule
   * 
   * - `http_anti_scan`: A scan protection rule
   * 
   * - `http_ratelimit`: A rate limit rule
   * 
   * - `ip_access_rule`: An IP access rule
   * 
   * - `http_bot`: A bot rule
   * 
   * - `http_security_level_rule`: A security rule
   * 
   * This parameter is required.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rule configurations in the ruleset.
   */
  rules?: WafRuleConfig[];
  /**
   * @remarks
   * The shared configuration for rules within the ruleset.
   */
  shared?: WafBatchRuleShared;
  /**
   * @remarks
   * The ruleset status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The time when the ruleset was last updated.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      requestId: 'RequestId',
      rules: 'Rules',
      shared: 'Shared',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      phase: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': WafRuleConfig },
      shared: WafBatchRuleShared,
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.shared && typeof (this.shared as any).validate === 'function') {
      (this.shared as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


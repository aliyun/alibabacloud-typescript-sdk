// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class BatchUpdateWafRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of rule configurations. Specifies the detailed configuration for each rule.
   * 
   * **Required subfields for each phase** (applicable only to the two phases supported by this batch operation):
   * 
   * - `http_anti_scan`: You must provide `Type` and at least one of `ManagedList` or `RateLimit`.
   * - `http_bot`: You must provide the advanced mode bots configuration. The subfields are defined in the `WafRuleConfig` data structure.
   * 
   * > Note: Other phases such as `http_custom` and `http_whitelist` cannot use this batch operation. Use the single-rule operation `UpdateWafRule` instead. The subfield constraints for those phases are described in the single-rule operation documentation.
   * 
   * > Important: If `Configs` is missing or subfields are incomplete, the server returns `InvalidParameter(400)` or `Rule.Config.Malformed`.
   * 
   * @example
   * 10000001
   */
  configs?: WafRuleConfig[];
  /**
   * @remarks
   * The WAF rule execution phase. This **batch operation supports only** the following two phases. For other phases, use the single-rule operation `UpdateWafRule`:
   * - `http_anti_scan`: scan protection rules
   * - `http_bot`: advanced mode bots
   * 
   * > Note: The `http_anti_scan` and `http_bot` phases **support only batch updates**. The single-rule operation `UpdateWafRule` does not accept these two values. Conversely, other phases such as `http_custom` and `http_whitelist` can be updated only by using the single-rule operation, not this batch operation.
   * 
   * **Required constraint**: Although this parameter is marked as optional (required: false) in the specification, it is **required** when you call this batch operation. The server cannot determine the target ruleset without the Phase parameter and returns `InvalidParameter(400)` if it is not provided.
   * 
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @remarks
   * The ID of the WAF ruleset. You can call the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation to obtain the ruleset ID.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The shared configuration for multiple rules. Specifies the common properties shared across multiple rules.
   * 
   * **Conditionally required**: Although this parameter is marked as optional (required: false) in the specification, it is **required** when `Phase=http_anti_scan`. The server returns `InvalidParameter(400)` if it is not provided.
   * 
   * **Subfield requirements**: When the phase is `http_anti_scan`, Shared must include the `Name` (rule name), `Expression` (match expression), and `Action` (rule action) shared fields. For other phases, the required subfields of Shared vary depending on the specific phase.
   */
  shared?: WafBatchRuleShared;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the site version on which the configuration takes effect. The default value is 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      shared: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': WafRuleConfig },
      phase: 'string',
      rulesetId: 'number',
      shared: WafBatchRuleShared,
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
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


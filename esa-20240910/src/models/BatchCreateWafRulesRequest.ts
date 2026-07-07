// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class BatchCreateWafRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of rule configurations. Specifies the detailed configuration for each rule.
   * 
   * **Required subfields for each phase** (applicable only to the two phases supported by this batch operation):
   * 
   * - `http_anti_scan`: You must specify `Type` and at least one of `ManagedList` or `RateLimit`.
   * - `http_bot`: You must specify the advanced mode bots configuration. The subfields are defined in the `WafRuleConfig` data structure.
   * 
   * > Note: Other phases such as `http_custom` and `http_whitelist` cannot use this batch operation. Use the single-rule operation `CreateWafRule` instead. The subfield constraints are described in the single-rule operation documentation.
   * 
   * > If `Configs` is not specified or required subfields are missing, the service returns `InvalidParameter(400)` or `Rule.Config.Malformed`.
   */
  configs?: WafRuleConfig[];
  /**
   * @remarks
   * The WAF rule execution phase. This **batch operation supports only** the following two phases. For other phases, use the single-rule operations `CreateWafRule` or `UpdateWafRule`:
   * - `http_anti_scan`: scan protection rules
   * - `http_bot`: advanced mode bots
   * 
   * > Note: The `http_anti_scan` and `http_bot` phases **support only batch creation**. The single-rule operation `CreateWafRule` does not accept these two values. Conversely, other phases such as `http_custom` and `http_whitelist` can be created only by using single-rule operations and cannot use this batch operation.
   * 
   * **Required constraint**: Although this parameter is marked as optional (required: false) in the specification, it is **required** when you call this batch operation. If this parameter is not specified, the service returns `InvalidParameter(400)`.
   * 
   * **Plan prerequisite**: `http_anti_scan` requires the site to have a **high or higher plan**. Calling this operation with a basic plan returns `Phase.HttpAntiScan.NotSupport`. Verify the site plan before calling this operation.
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
   * The shared configuration for multiple rules. Specifies the common properties of multiple rules.
   * 
   * **Conditionally required**: Although this parameter is marked as optional (required: false) in the specification, it is **required** when `Phase=http_anti_scan`. If this parameter is not specified, the service returns `InvalidParameter(400)`.
   * 
   * **Subfield requirements**: In the `http_anti_scan` phase, Shared must include shared fields such as `Name` (rule name) and `Action` (rule action). For other phases, the required subfields of Shared vary depending on the specific phase.
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


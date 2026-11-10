// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class BatchCreateWafRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of rule configurations, which specifies the detailed configuration of each rule.
   * 
   * **Required subfields for each phase** (only applicable to the two phases supported by this batch operation):
   * 
   * - http_anti_scan: You must provide Type and at least one of ManagedList or RateLimit.
   * - http_bot: You must provide configurations related to advanced bots. The subfields are subject to the WafRuleConfig data structure definition.
   * 
   * > Note: Other phases such as http_custom and http_whitelist cannot use this batch operation. Use the single-item operation CreateWafRule instead. The subfield constraints are subject to the single-item operation documentation.
   * 
   * > Notice: If Configs is missing or subfields are missing, the service returns InvalidParameter(400) or Rule.Config.Malformed.
   */
  configs?: WafRuleConfig[];
  /**
   * @remarks
   * The execution phase of the WAF rule. This **batch operation only supports** the following two phases. For other phases, use the single-item operations CreateWafRule or UpdateWafRule:
   * - http_anti_scan: Scan protection rules.
   * - http_bot: Advanced bots.
   * 
   * > Note: The http_anti_scan and http_bot phases **only support batch creation**. The single-item operation CreateWafRule does not accept these two values. Conversely, other phases (such as http_custom and http_whitelist) can only be created by using the single-item operation and cannot use this batch operation.
   * 
   * **Required constraint**: Although this parameter is marked as optional (required: false) in the specification, it **must be provided** when you call this batch operation. If it is not provided, the service returns InvalidParameter(400).
   * 
   * **Edition prerequisite**: http_anti_scan requires the site to have the **High edition or higher**. Calls from the Basic edition return Phase.HttpAntiScan.NotSupport. Verify the site edition before you call the operation.
   * 
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @remarks
   * The ID of the WAF ruleset. You can obtain the ruleset ID by calling the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The shared configuration for multiple rules, which specifies the common attributes of the rules.
   * 
   * **Conditionally required**: Although this parameter is marked as optional (required: false) in the specification, it is **actually required** when Phase is set to http_anti_scan. If it is not provided, the service returns InvalidParameter(400).
   * 
   * **Subfield requirements**: In the http_anti_scan phase, Shared must include shared fields such as Name (rule name) and Action (rule action). For other phases, the required subfields of Shared depend on the specific phase.
   */
  shared?: WafBatchRuleShared;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version where the configuration takes effect. Default value: 0.
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


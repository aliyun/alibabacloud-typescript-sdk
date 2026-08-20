// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeModuleResponseBodyChargeModules extends $dara.Model {
  /**
   * @remarks
   * The pricing mode of the pricing module. Valid values:
   * - **NORMAL_PRICE**: standard pricing.
   * - **STEP_ACCUMULATION**: tiered pricing.
   * 
   * @example
   * NORMAL_PRICE
   */
  chargeMode?: string;
  /**
   * @remarks
   * The pricing details of the pricing module.
   */
  chargeModeDetails?: string[];
  /**
   * @remarks
   * The pricing unit.
   * 
   * @example
   * SeCU
   */
  chargeUnit?: string;
  /**
   * @remarks
   * The pricing module identity. Valid values:
   * - **domainCount**: the number of CNAME-connected domain names.
   * - **qps**: the peak QPS.
   * - **request**: the basic traffic fee.
   * - **ipBlacklistRuleCount**: the number of IP blacklist rules.
   * - **customAclBaseRuleCount**: the number of Basic Policies in custom rules.
   * - **customAclAdvanceRuleCount**: the number of advanced rules in custom rules.
   * - **antiScanRuleCount**: the number of scan protection rules.
   * - **customResponseRuleCount**: the number of custom response rules.
   * - **ipv6**: IPv6.
   * - **gslb**: intelligent load balancing.
   * - **exclusiveIpCount**: the number of exclusive IP addresses.
   * - **ccRuleCount**: the number of HTTP flood mitigation rules.
   * - **regionBlockRuleCount**: the number of Location Blacklist rules.
   * - **tamperproofRuleCount**: the number of web tamper proofing rules.
   * - **dlpRuleCount**: the number of information leak prevention rules.
   * - **botTraffic**: the Bot management traffic fee.
   * - **aiWhiteListTemplateCount**: the number of intelligent whitelist templates.
   * - **apisecResourceCount**: the number of protected objects with API security enabled.
   * - **apisecTraffic**: the API security traffic fee.
   * - **compliance**: the number of protocol compliance templates.
   * - **riskTraffic**: the number of risk identification hits in Bot management.
   * - **assetStatus**: the asset center.
   * - **nonPort**: non-standard ports.
   * - **customAclCaptcha**: the number of custom rule slider verification attempts.
   * - **wafBaseTemplateCount**: the number of web core protection rules.
   * - **instanceFee**: the WAF instance fee.
   * - **spikeThrottleRuleCount**: the number of peak traffic throttling rules.
   * - **botWebTemplateCount**: the number of web protection templates in Bot management.
   * - **botAppTemplateCount**: the number of app protection templates in Bot management.
   * - **customAclBotRuleCount**: the number of advanced custom rules in Bot management.
   * 
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
   * @remarks
   * The billing period type of the pricing module. Valid values:
   * - **Hour**: hourly billing.
   * 
   * @example
   * Hour
   */
  periodType?: string;
  /**
   * @remarks
   * The usage type of the pricing module. Valid values:
   * - **template**: template.
   * - **qps**: QPS.
   * - **domain**: domain name.
   * - **rule**: rule.
   * - **ip**: IP address.
   * - **resource**: protected object.
   * - **reqest**: request.
   * - **function**: feature enablement.
   * - **time**: number of times.
   * 
   * @example
   * domain
   */
  usageType?: string;
  /**
   * @remarks
   * The billing unit factor of the pricing module.
   * 
   * > The billing unit factor **UsageUnitFactor** multiplied by the usage type **UsageType** forms the billing unit of the module.
   * 
   * @example
   * 1
   */
  usageUnitFactor?: number;
  static names(): { [key: string]: string } {
    return {
      chargeMode: 'ChargeMode',
      chargeModeDetails: 'ChargeModeDetails',
      chargeUnit: 'ChargeUnit',
      moduleCode: 'ModuleCode',
      periodType: 'PeriodType',
      usageType: 'UsageType',
      usageUnitFactor: 'UsageUnitFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeMode: 'string',
      chargeModeDetails: { 'type': 'array', 'itemType': 'string' },
      chargeUnit: 'string',
      moduleCode: 'string',
      periodType: 'string',
      usageType: 'string',
      usageUnitFactor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chargeModeDetails)) {
      $dara.Model.validateArray(this.chargeModeDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChargeModuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of WAF pricing module information.
   */
  chargeModules?: DescribeChargeModuleResponseBodyChargeModules[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeModules: 'ChargeModules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeModules: { 'type': 'array', 'itemType': DescribeChargeModuleResponseBodyChargeModules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chargeModules)) {
      $dara.Model.validateArray(this.chargeModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


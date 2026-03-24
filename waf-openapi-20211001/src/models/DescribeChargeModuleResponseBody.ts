// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChargeModuleResponseBodyChargeModules extends $dara.Model {
  /**
   * @remarks
   * The pricing model of the billing module. Valid values:
   * 
   * - **NORMAL_PRICE**: tiered pricing.
   * 
   * - **STEP_ACCUMULATION**: tiered pricing.
   * 
   * @example
   * NORMAL_PRICE
   */
  chargeMode?: string;
  /**
   * @remarks
   * The detailed pricing information for the billing module.
   */
  chargeModeDetails?: string[];
  /**
   * @remarks
   * The code of the billing module. Valid values:
   * 
   * - **domainCount**: the number of domain names added to WAF in CNAME record mode.
   * 
   * - **qps**: the peak queries per second (QPS).
   * 
   * - **request**: the basic traffic fee.
   * 
   * - **ipBlacklistRuleCount**: the number of IP blacklist rules.
   * 
   * - **customAclBaseRuleCount**: the number of basic rules in custom protection rules.
   * 
   * - **customAclAdvanceRuleCount**: the number of advanced rules in custom protection rules.
   * 
   * - **antiScanRuleCount**: the number of scan protection rules.
   * 
   * - **customResponseRuleCount**: the number of custom response rules.
   * 
   * - **ipv6**: IPv6 protection.
   * 
   * - **gslb**: intelligent load balancing.
   * 
   * - **exclusiveIpCount**: the number of exclusive IP addresses.
   * 
   * - **ccRuleCount**: the number of HTTP flood protection rules.
   * 
   * - **regionBlockRuleCount**: the number of rules in the region blacklist.
   * 
   * - **tamperproofRuleCount**: the number of web tamper-proofing rules.
   * 
   * - **dlpRuleCount**: the number of data leakage prevention rules.
   * 
   * - **botTraffic**: the traffic fee for bot management.
   * 
   * - **aiWhiteListTemplateCount**: the number of intelligent whitelist templates.
   * 
   * - **apisecResourceCount**: the number of protected objects for which API security is enabled.
   * 
   * - **apisecTraffic**: the traffic fee for API security.
   * 
   * - **compliance**: the number of protocol compliance templates.
   * 
   * - **riskTraffic**: the number of times that risk identification in bot management is matched.
   * 
   * - **assetStatus**: asset center.
   * 
   * - **nonPort**: custom ports protection.
   * 
   * - **customAclCaptcha**: the number of times that sliders are used for custom protection rules.
   * 
   * - **wafBaseTemplateCount**: the number of core web protection rules.
   * 
   * - **instanceFee**: the WAF instance fee.
   * 
   * - **spikeThrottleRuleCount**: the number of peak traffic throttling rules.
   * 
   * - **botWebTemplateCount**: the number of web protection templates in bot management.
   * 
   * - **botAppTemplateCount**: the number of app protection templates in bot management.
   * 
   * - **customAclBotRuleCount**: the number of advanced custom rules in bot management.
   * 
   * @example
   * domainCount
   */
  moduleCode?: string;
  /**
   * @remarks
   * The billing cycle of the billing module. Valid values:
   * 
   * - **Hour**: hourly billing.
   * 
   * @example
   * Hour
   */
  periodType?: string;
  /**
   * @remarks
   * The usage type of the billing module. Valid values:
   * 
   * - **template**: template.
   * 
   * - **qps**: QPS.
   * 
   * - **domain**: domain name.
   * 
   * - **rule**: rule.
   * 
   * - **ip**: IP address.
   * 
   * - **resource**: protected object.
   * 
   * - **request**: request.
   * 
   * - **function**: feature enablement.
   * 
   * - **time**: number of times.
   * 
   * @example
   * domain
   */
  usageType?: string;
  /**
   * @remarks
   * The billing unit coefficient of the billing module.
   * 
   * > The usage unit for the module is determined by multiplying the **UsageUnitFactor** by the **UsageType**.
   * 
   * @example
   * 1
   */
  usageUnitFactor?: number;
  static names(): { [key: string]: string } {
    return {
      chargeMode: 'ChargeMode',
      chargeModeDetails: 'ChargeModeDetails',
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
   * A list of billing modules for WAF.
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


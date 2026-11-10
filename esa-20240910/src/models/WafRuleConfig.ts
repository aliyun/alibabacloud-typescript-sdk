// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafTimer } from "./WafTimer";
import { WafRatelimitCharacteristics } from "./WafRatelimitCharacteristics";


export class WafRuleConfigActionsBypass extends $dara.Model {
  /**
   * @remarks
   * The list of custom rule IDs.
   */
  customRules?: number[];
  /**
   * @remarks
   * The list of managed rule IDs.
   */
  regularRules?: number[];
  /**
   * @remarks
   * The list of managed rule types.
   */
  regularTypes?: string[];
  /**
   * @remarks
   * The type of the bypassed module.
   * 
   * @example
   * part
   */
  skip?: string;
  /**
   * @remarks
   * The list of bypassed module phases.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      customRules: 'CustomRules',
      regularRules: 'RegularRules',
      regularTypes: 'RegularTypes',
      skip: 'Skip',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRules: { 'type': 'array', 'itemType': 'number' },
      regularRules: { 'type': 'array', 'itemType': 'number' },
      regularTypes: { 'type': 'array', 'itemType': 'string' },
      skip: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customRules)) {
      $dara.Model.validateArray(this.customRules);
    }
    if(Array.isArray(this.regularRules)) {
      $dara.Model.validateArray(this.regularRules);
    }
    if(Array.isArray(this.regularTypes)) {
      $dara.Model.validateArray(this.regularTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigActionsResponse extends $dara.Model {
  /**
   * @remarks
   * The custom response code.
   * 
   * @example
   * 403
   */
  code?: number;
  /**
   * @remarks
   * The ID of the custom response page. You can obtain the ID by calling the [ListPages](https://help.aliyun.com/document_detail/2850223.html) operation.
   * 
   * @example
   * 50000001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigActions extends $dara.Model {
  /**
   * @remarks
   * The modules bypassed by the whitelist rule.
   */
  bypass?: WafRuleConfigActionsBypass;
  /**
   * @remarks
   * The custom response page.
   */
  response?: WafRuleConfigActionsResponse;
  static names(): { [key: string]: string } {
    return {
      bypass: 'Bypass',
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bypass: WafRuleConfigActionsBypass,
      response: WafRuleConfigActionsResponse,
    };
  }

  validate() {
    if(this.bypass && typeof (this.bypass as any).validate === 'function') {
      (this.bypass as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigAppPackagePackageSigns extends $dara.Model {
  /**
   * @remarks
   * The specified valid package name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The package signature.
   * 
   * @example
   * sign
   */
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigAppPackage extends $dara.Model {
  /**
   * @remarks
   * The repackaging detection.
   */
  packageSigns?: WafRuleConfigAppPackagePackageSigns[];
  static names(): { [key: string]: string } {
    return {
      packageSigns: 'PackageSigns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageSigns: { 'type': 'array', 'itemType': WafRuleConfigAppPackagePackageSigns },
    };
  }

  validate() {
    if(Array.isArray(this.packageSigns)) {
      $dara.Model.validateArray(this.packageSigns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigAppSdkCustomSign extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * sign
   */
  key?: string;
  /**
   * @remarks
   * The field value.
   * 
   * @example
   * examplesignvalue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigAppSdk extends $dara.Model {
  /**
   * @remarks
   * The custom signature field.
   */
  customSign?: WafRuleConfigAppSdkCustomSign;
  /**
   * @remarks
   * The custom signature field switch.
   * 
   * @example
   * on
   */
  customSignStatus?: string;
  /**
   * @remarks
   * The app feature anomaly.
   */
  featureAbnormal?: string[];
  static names(): { [key: string]: string } {
    return {
      customSign: 'CustomSign',
      customSignStatus: 'CustomSignStatus',
      featureAbnormal: 'FeatureAbnormal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSign: WafRuleConfigAppSdkCustomSign,
      customSignStatus: 'string',
      featureAbnormal: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.customSign && typeof (this.customSign as any).validate === 'function') {
      (this.customSign as any).validate();
    }
    if(Array.isArray(this.featureAbnormal)) {
      $dara.Model.validateArray(this.featureAbnormal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigManagedRulesetsManagedRules extends $dara.Model {
  /**
   * @remarks
   * The action of the managed rule.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The managed rule ID.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * The status of the managed rule.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigManagedRulesets extends $dara.Model {
  /**
   * @remarks
   * The action to perform.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The attack type.
   * 
   * @example
   * 11
   */
  attackType?: number;
  /**
   * @remarks
   * The list of managed rules.
   */
  managedRules?: WafRuleConfigManagedRulesetsManagedRules[];
  /**
   * @remarks
   * The number of enabled rules.
   * 
   * @example
   * 50
   */
  numberEnabled?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 100
   */
  numberTotal?: number;
  /**
   * @remarks
   * The protection level.
   * 
   * @example
   * 4
   */
  protectionLevel?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      attackType: 'AttackType',
      managedRules: 'ManagedRules',
      numberEnabled: 'NumberEnabled',
      numberTotal: 'NumberTotal',
      protectionLevel: 'ProtectionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      attackType: 'number',
      managedRules: { 'type': 'array', 'itemType': WafRuleConfigManagedRulesetsManagedRules },
      numberEnabled: 'number',
      numberTotal: 'number',
      protectionLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.managedRules)) {
      $dara.Model.validateArray(this.managedRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigRateLimitThresholdResponseStatus extends $dara.Model {
  /**
   * @remarks
   * The HTTP response code.
   * 
   * @example
   * 404
   */
  code?: number;
  /**
   * @remarks
   * The response code count threshold.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The response code percentage.
   * 
   * @example
   * 10
   */
  ratio?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      ratio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigRateLimitThreshold extends $dara.Model {
  /**
   * @remarks
   * The threshold for the number of distinct managed rules.
   * 
   * @example
   * 10
   */
  distinctManagedRules?: number;
  /**
   * @remarks
   * The managed rule hit threshold.
   * 
   * @example
   * 10
   */
  managedRulesBlocked?: number;
  /**
   * @remarks
   * The request threshold.
   * 
   * @example
   * 10
   */
  request?: number;
  /**
   * @remarks
   * The response code threshold.
   */
  responseStatus?: WafRuleConfigRateLimitThresholdResponseStatus;
  /**
   * @remarks
   * **[Deprecated]** The traffic threshold.
   * 
   * @example
   * 10Gb
   */
  traffic?: string;
  static names(): { [key: string]: string } {
    return {
      distinctManagedRules: 'DistinctManagedRules',
      managedRulesBlocked: 'ManagedRulesBlocked',
      request: 'Request',
      responseStatus: 'ResponseStatus',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctManagedRules: 'number',
      managedRulesBlocked: 'number',
      request: 'number',
      responseStatus: WafRuleConfigRateLimitThresholdResponseStatus,
      traffic: 'string',
    };
  }

  validate() {
    if(this.responseStatus && typeof (this.responseStatus as any).validate === 'function') {
      (this.responseStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigRateLimit extends $dara.Model {
  /**
   * @remarks
   * The specified object for rate statistics.
   */
  characteristics?: WafRatelimitCharacteristics;
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * Specifies whether to apply the rule to requests that hit the cache.
   * 
   * @example
   * true
   */
  onHit?: boolean;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 10
   */
  TTL?: number;
  /**
   * @remarks
   * The statistical threshold.
   */
  threshold?: WafRuleConfigRateLimitThreshold;
  static names(): { [key: string]: string } {
    return {
      characteristics: 'Characteristics',
      interval: 'Interval',
      onHit: 'OnHit',
      TTL: 'TTL',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characteristics: WafRatelimitCharacteristics,
      interval: 'number',
      onHit: 'boolean',
      TTL: 'number',
      threshold: WafRuleConfigRateLimitThreshold,
    };
  }

  validate() {
    if(this.characteristics && typeof (this.characteristics as any).validate === 'function') {
      (this.characteristics as any).validate();
    }
    if(this.threshold && typeof (this.threshold as any).validate === 'function') {
      (this.threshold as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigSecurityLevel extends $dara.Model {
  /**
   * @remarks
   * The security level value. Valid values:
   * * off: Disabled.
   * * essentially_off: Essentially disabled.
   * * low: Low.
   * * medium: Medium.
   * * high: High.
   * * under_attack: Under attack.
   * 
   * @example
   * low
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfig extends $dara.Model {
  /**
   * @remarks
   * The action performed after a WAF rule is matched.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The extended actions.
   */
  actions?: WafRuleConfigActions;
  /**
   * @remarks
   * The repackaging detection configuration.
   */
  appPackage?: WafRuleConfigAppPackage;
  /**
   * @remarks
   * The app SDK configuration.
   */
  appSdk?: WafRuleConfigAppSdk;
  /**
   * @remarks
   * The matching expression.
   * 
   * @example
   * ip.src eq 10.0.0.1
   */
  expression?: string;
  /**
   * @remarks
   * The ID of the WAF rule.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * **[Deprecated]** The managed rule group ID.
   * 
   * @example
   * 30000001
   */
  managedGroupId?: number;
  /**
   * @remarks
   * The managed list.
   * 
   * @example
   * intelligence_crawler
   */
  managedList?: string;
  /**
   * @remarks
   * The list of managed rulesets.
   */
  managedRulesets?: WafRuleConfigManagedRulesets[];
  /**
   * @remarks
   * The name of the WAF rule.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * example notes
   */
  notes?: string;
  /**
   * @remarks
   * The configurations related to the rate limiting rule.
   */
  rateLimit?: WafRuleConfigRateLimit;
  /**
   * @remarks
   * The security level.
   */
  securityLevel?: WafRuleConfigSecurityLevel;
  /**
   * @remarks
   * The token verification configurations.
   */
  sigchl?: string[];
  /**
   * @remarks
   * The status of the WAF rule.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The timer.
   */
  timer?: WafTimer;
  /**
   * @remarks
   * The type of the WAF rule.
   * 
   * @example
   * http_custom
   */
  type?: string;
  /**
   * @remarks
   * The IP access control value.
   * 
   * @example
   * 10.0.0.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actions: 'Actions',
      appPackage: 'AppPackage',
      appSdk: 'AppSdk',
      expression: 'Expression',
      id: 'Id',
      managedGroupId: 'ManagedGroupId',
      managedList: 'ManagedList',
      managedRulesets: 'ManagedRulesets',
      name: 'Name',
      notes: 'Notes',
      rateLimit: 'RateLimit',
      securityLevel: 'SecurityLevel',
      sigchl: 'Sigchl',
      status: 'Status',
      timer: 'Timer',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actions: WafRuleConfigActions,
      appPackage: WafRuleConfigAppPackage,
      appSdk: WafRuleConfigAppSdk,
      expression: 'string',
      id: 'number',
      managedGroupId: 'number',
      managedList: 'string',
      managedRulesets: { 'type': 'array', 'itemType': WafRuleConfigManagedRulesets },
      name: 'string',
      notes: 'string',
      rateLimit: WafRuleConfigRateLimit,
      securityLevel: WafRuleConfigSecurityLevel,
      sigchl: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      timer: WafTimer,
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.actions && typeof (this.actions as any).validate === 'function') {
      (this.actions as any).validate();
    }
    if(this.appPackage && typeof (this.appPackage as any).validate === 'function') {
      (this.appPackage as any).validate();
    }
    if(this.appSdk && typeof (this.appSdk as any).validate === 'function') {
      (this.appSdk as any).validate();
    }
    if(Array.isArray(this.managedRulesets)) {
      $dara.Model.validateArray(this.managedRulesets);
    }
    if(this.rateLimit && typeof (this.rateLimit as any).validate === 'function') {
      (this.rateLimit as any).validate();
    }
    if(this.securityLevel && typeof (this.securityLevel as any).validate === 'function') {
      (this.securityLevel as any).validate();
    }
    if(Array.isArray(this.sigchl)) {
      $dara.Model.validateArray(this.sigchl);
    }
    if(this.timer && typeof (this.timer as any).validate === 'function') {
      (this.timer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafTimer } from "./WafTimer";
import { WafRuleMatch2 } from "./WafRuleMatch2";


export class WafRuleConfigActionsBypass extends $dara.Model {
  customRules?: number[];
  regularRules?: number[];
  regularTypes?: string[];
  skip?: string;
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
  code?: number;
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
  bypass?: WafRuleConfigActionsBypass;
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
  name?: string;
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
  key?: string;
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
  customSign?: WafRuleConfigAppSdkCustomSign;
  customSignStatus?: string;
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
  action?: string;
  id?: number;
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
  action?: string;
  attackType?: number;
  managedRules?: WafRuleConfigManagedRulesetsManagedRules[];
  numberEnabled?: number;
  numberTotal?: number;
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
  code?: number;
  count?: number;
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
  distinctManagedRules?: number;
  managedRulesBlocked?: number;
  request?: number;
  responseStatus?: WafRuleConfigRateLimitThresholdResponseStatus;
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
  characteristics?: WafRuleMatch2;
  interval?: number;
  onHit?: boolean;
  TTL?: number;
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
      characteristics: WafRuleMatch2,
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
  action?: string;
  actions?: WafRuleConfigActions;
  appPackage?: WafRuleConfigAppPackage;
  appSdk?: WafRuleConfigAppSdk;
  expression?: string;
  id?: number;
  managedGroupId?: number;
  managedList?: string;
  managedRulesets?: WafRuleConfigManagedRulesets[];
  name?: string;
  notes?: string;
  rateLimit?: WafRuleConfigRateLimit;
  securityLevel?: WafRuleConfigSecurityLevel;
  sigchl?: string[];
  status?: string;
  timer?: WafTimer;
  type?: string;
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


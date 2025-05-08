// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfigActions } from "./WafRuleConfigActions";
import { WafRuleConfigAppPackage } from "./WafRuleConfigAppPackage";
import { WafRuleConfigAppSdk } from "./WafRuleConfigAppSdk";
import { WafRuleConfigManagedRulesets } from "./WafRuleConfigManagedRulesets";
import { WafRuleConfigRateLimit } from "./WafRuleConfigRateLimit";
import { WafRuleConfigSecurityLevel } from "./WafRuleConfigSecurityLevel";
import { WafTimer } from "./WafTimer";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddonMetaEnvironmentsPoliciesBindEntity } from "./AddonMetaEnvironmentsPoliciesBindEntity";
import { AddonMetaEnvironmentsPoliciesMetricCheckRule } from "./AddonMetaEnvironmentsPoliciesMetricCheckRule";
import { AddonMetaEnvironmentsPoliciesProtocols } from "./AddonMetaEnvironmentsPoliciesProtocols";


export class AddonMetaEnvironmentsPolicies extends $dara.Model {
  alertDefaultStatus?: string;
  bindDefaultPolicy?: boolean;
  bindEntity?: AddonMetaEnvironmentsPoliciesBindEntity;
  defaultInstall?: boolean;
  enableServiceAccount?: boolean;
  metricCheckRule?: AddonMetaEnvironmentsPoliciesMetricCheckRule;
  needRestartAfterIntegration?: boolean;
  protocols?: AddonMetaEnvironmentsPoliciesProtocols[];
  targetAddonName?: string;
  static names(): { [key: string]: string } {
    return {
      alertDefaultStatus: 'alertDefaultStatus',
      bindDefaultPolicy: 'bindDefaultPolicy',
      bindEntity: 'bindEntity',
      defaultInstall: 'defaultInstall',
      enableServiceAccount: 'enableServiceAccount',
      metricCheckRule: 'metricCheckRule',
      needRestartAfterIntegration: 'needRestartAfterIntegration',
      protocols: 'protocols',
      targetAddonName: 'targetAddonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDefaultStatus: 'string',
      bindDefaultPolicy: 'boolean',
      bindEntity: AddonMetaEnvironmentsPoliciesBindEntity,
      defaultInstall: 'boolean',
      enableServiceAccount: 'boolean',
      metricCheckRule: AddonMetaEnvironmentsPoliciesMetricCheckRule,
      needRestartAfterIntegration: 'boolean',
      protocols: { 'type': 'array', 'itemType': AddonMetaEnvironmentsPoliciesProtocols },
      targetAddonName: 'string',
    };
  }

  validate() {
    if(this.bindEntity && typeof (this.bindEntity as any).validate === 'function') {
      (this.bindEntity as any).validate();
    }
    if(this.metricCheckRule && typeof (this.metricCheckRule as any).validate === 'function') {
      (this.metricCheckRule as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


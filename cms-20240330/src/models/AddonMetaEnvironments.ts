// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddonMetaEnvironmentsDependencies } from "./AddonMetaEnvironmentsDependencies";
import { AddonMetaEnvironmentsPolicies } from "./AddonMetaEnvironmentsPolicies";


export class AddonMetaEnvironments extends $dara.Model {
  dependencies?: AddonMetaEnvironmentsDependencies;
  description?: string;
  enable?: boolean;
  label?: string;
  name?: string;
  policies?: AddonMetaEnvironmentsPolicies;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      dependencies: 'dependencies',
      description: 'description',
      enable: 'enable',
      label: 'label',
      name: 'name',
      policies: 'policies',
      policyType: 'policyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencies: AddonMetaEnvironmentsDependencies,
      description: 'string',
      enable: 'boolean',
      label: 'string',
      name: 'string',
      policies: AddonMetaEnvironmentsPolicies,
      policyType: 'string',
    };
  }

  validate() {
    if(this.dependencies && typeof (this.dependencies as any).validate === 'function') {
      (this.dependencies as any).validate();
    }
    if(this.policies && typeof (this.policies as any).validate === 'function') {
      (this.policies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


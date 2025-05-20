// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SecurityContextCapabilities } from "./SecurityContextCapabilities";
import { SeccompProfile } from "./SeccompProfile";


export class SecurityContext extends $dara.Model {
  capabilities?: SecurityContextCapabilities;
  privileged?: boolean;
  /**
   * @example
   * 1000
   */
  runAsGroup?: number;
  /**
   * @example
   * 1000
   */
  runAsUser?: number;
  seccompProfile?: SeccompProfile;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'Capabilities',
      privileged: 'Privileged',
      runAsGroup: 'RunAsGroup',
      runAsUser: 'RunAsUser',
      seccompProfile: 'SeccompProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: SecurityContextCapabilities,
      privileged: 'boolean',
      runAsGroup: 'number',
      runAsUser: 'number',
      seccompProfile: SeccompProfile,
    };
  }

  validate() {
    if(this.capabilities && typeof (this.capabilities as any).validate === 'function') {
      (this.capabilities as any).validate();
    }
    if(this.seccompProfile && typeof (this.seccompProfile as any).validate === 'function') {
      (this.seccompProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


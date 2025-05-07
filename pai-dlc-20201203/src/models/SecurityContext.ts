// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SeccompProfile } from "./SeccompProfile";


export class SecurityContext extends $dara.Model {
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
      runAsGroup: 'RunAsGroup',
      runAsUser: 'RunAsUser',
      seccompProfile: 'SeccompProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runAsGroup: 'number',
      runAsUser: 'number',
      seccompProfile: SeccompProfile,
    };
  }

  validate() {
    if(this.seccompProfile && typeof (this.seccompProfile as any).validate === 'function') {
      (this.seccompProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


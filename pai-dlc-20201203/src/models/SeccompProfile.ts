// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SeccompProfile extends $dara.Model {
  /**
   * @remarks
   * The path of the Seccomp profile on the node. This parameter takes effect only when Type is set to Localhost.
   * 
   * @example
   * my-profiles/profile-allow.json
   */
  localhostProfile?: string;
  /**
   * @remarks
   * The Seccomp configuration type. Valid values: Localhost, RuntimeDefault, Unconfined.
   * 
   * @example
   * Unconfined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      localhostProfile: 'LocalhostProfile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localhostProfile: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


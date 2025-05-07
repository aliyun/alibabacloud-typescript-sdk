// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SeccompProfile extends $dara.Model {
  /**
   * @example
   * my-profiles/profile-allow.json
   */
  localhostProfile?: string;
  /**
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


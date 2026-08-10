// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthInfoConfigValue extends $dara.Model {
  /**
   * @remarks
   * The credential.
   * 
   * @example
   * token-xxx
   */
  authToken?: string;
  /**
   * @remarks
   * The private domain name.
   * 
   * @example
   * https://xxx
   */
  privateDomain?: string;
  /**
   * @remarks
   * The project space.
   * 
   * @example
   * proj-xxx
   */
  project?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * https://xxx
   */
  publicDomain?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'AuthToken',
      privateDomain: 'PrivateDomain',
      project: 'Project',
      publicDomain: 'PublicDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      privateDomain: 'string',
      project: 'string',
      publicDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


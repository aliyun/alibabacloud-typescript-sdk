// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthorizeInstanceGroupRequestUserMeta extends $dara.Model {
  /**
   * @remarks
   * The AD domain name.
   * 
   * @example
   * example.com
   */
  adDomain?: string;
  /**
   * @remarks
   * The user type.
   * 
   * Valid values:
   * 
   * *   ad: Active Directory (AD) account
   * *   simple: convenience account
   * 
   * @example
   * simple
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
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


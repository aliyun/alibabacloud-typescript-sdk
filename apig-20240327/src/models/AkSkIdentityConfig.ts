// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AkSkIdentityConfig extends $dara.Model {
  /**
   * @remarks
   * Access Key
   * 
   * @example
   * xxxx
   */
  ak?: string;
  /**
   * @remarks
   * Generation mode
   * 
   * @example
   * System
   */
  generateMode?: string;
  /**
   * @remarks
   * Secret Key
   * 
   * @example
   * xxxx
   */
  sk?: string;
  /**
   * @remarks
   * Identity authentication type
   * 
   * @example
   * Jwt
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      generateMode: 'generateMode',
      sk: 'sk',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      generateMode: 'string',
      sk: 'string',
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


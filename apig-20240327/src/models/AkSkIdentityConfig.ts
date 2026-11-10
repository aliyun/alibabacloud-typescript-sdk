// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AkSkIdentityConfig extends $dara.Model {
  /**
   * @remarks
   * The AK configuration.
   * 
   * @example
   * ak-xxxxxxxx
   */
  ak?: string;
  /**
   * @remarks
   * The generation mode.
   * 
   * @example
   * System
   */
  generateMode?: string;
  /**
   * @remarks
   * The SK configuration.
   * 
   * @example
   * sk-xxxxxxxx
   */
  sk?: string;
  /**
   * @remarks
   * The type.
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


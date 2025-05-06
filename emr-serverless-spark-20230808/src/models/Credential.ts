// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Credential extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dir?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  expire?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      dir: 'dir',
      expire: 'expire',
      host: 'host',
      policy: 'policy',
      securityToken: 'securityToken',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


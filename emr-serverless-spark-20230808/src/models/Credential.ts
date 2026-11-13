// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Credential extends $dara.Model {
  /**
   * @remarks
   * sts ak
   * 
   * This parameter is required.
   */
  accessId?: string;
  /**
   * @remarks
   * The OSS path.
   * 
   * This parameter is required.
   */
  dir?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * This parameter is required.
   */
  expire?: string;
  /**
   * @remarks
   * The OSS domain name.
   * 
   * This parameter is required.
   */
  host?: string;
  /**
   * @remarks
   * The OSS access policy.
   * 
   * This parameter is required.
   */
  policy?: string;
  /**
   * @remarks
   * sts token
   * 
   * This parameter is required.
   */
  securityToken?: string;
  /**
   * @remarks
   * The OSS access signature.
   * 
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


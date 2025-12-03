// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserKeyRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * 2022-03-12 12:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  keyScope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  publicKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SSH Title
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      expireTime: 'expireTime',
      keyScope: 'keyScope',
      publicKey: 'publicKey',
      title: 'title',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expireTime: 'string',
      keyScope: 'string',
      publicKey: 'string',
      title: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


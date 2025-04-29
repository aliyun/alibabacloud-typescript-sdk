// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveApiProductsAuthoritiesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The API products.
   * 
   * This parameter is required.
   */
  apiProductIdsShrink?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 110982490
   */
  appId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiProductIdsShrink: 'ApiProductIds',
      appId: 'AppId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductIdsShrink: 'string',
      appId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


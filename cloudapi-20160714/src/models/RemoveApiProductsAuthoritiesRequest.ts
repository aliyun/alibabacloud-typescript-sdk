// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveApiProductsAuthoritiesRequest extends $dara.Model {
  /**
   * @remarks
   * The API products.
   * 
   * This parameter is required.
   */
  apiProductIds?: string[];
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
      apiProductIds: 'ApiProductIds',
      appId: 'AppId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductIds: { 'type': 'array', 'itemType': 'string' },
      appId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiProductIds)) {
      $dara.Model.validateArray(this.apiProductIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


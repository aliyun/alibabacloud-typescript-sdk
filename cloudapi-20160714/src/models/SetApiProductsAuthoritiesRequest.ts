// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetApiProductsAuthoritiesRequest extends $dara.Model {
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
   * 111385984
   */
  appId?: number;
  /**
   * @remarks
   * 授权有效时间的截止时间，请设置格林尼治标准时间(GMT), 如果为空，即为授权永久有效。
   * 
   * @example
   * 2023-06-12T03:07:37Z
   */
  authValidTime?: string;
  /**
   * @remarks
   * The authorization description.
   * 
   * @example
   * test
   */
  description?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiProductIds: 'ApiProductIds',
      appId: 'AppId',
      authValidTime: 'AuthValidTime',
      description: 'Description',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductIds: { 'type': 'array', 'itemType': 'string' },
      appId: 'number',
      authValidTime: 'string',
      description: 'string',
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


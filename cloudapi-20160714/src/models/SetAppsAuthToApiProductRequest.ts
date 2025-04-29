// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAppsAuthToApiProductRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API product.
   * 
   * This parameter is required.
   * 
   * @example
   * 117b7a64a8b3f064eaa4a47ac62aac5e
   */
  apiProductId?: string;
  /**
   * @remarks
   * The IDs of the applications that you want to authorize.
   * 
   * This parameter is required.
   */
  appIds?: number[];
  /**
   * @remarks
   * The time (UTC) when the authorization expires. If this parameter is empty, the authorization does not expire.
   * 
   * @example
   * 2023-05-31T08:15:39Z
   */
  authValidTime?: string;
  /**
   * @remarks
   * The description of the authorization.
   * 
   * @example
   * Test
   */
  description?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiProductId: 'ApiProductId',
      appIds: 'AppIds',
      authValidTime: 'AuthValidTime',
      description: 'Description',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductId: 'string',
      appIds: { 'type': 'array', 'itemType': 'number' },
      authValidTime: 'string',
      description: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


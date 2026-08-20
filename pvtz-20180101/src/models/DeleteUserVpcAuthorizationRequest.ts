// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserVpcAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - NORMAL: Standard authorization.
   * 
   * - CLOUD_PRODUCT: Cloud product authorization.
   * 
   * Default value: NORMAL
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the authorized resources.
   * 
   * This parameter is required.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


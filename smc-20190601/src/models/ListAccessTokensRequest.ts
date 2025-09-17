// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessTokensRequest extends $dara.Model {
  /**
   * @remarks
   * The information about activation codes.
   */
  accessTokenId?: string[];
  /**
   * @remarks
   * The name of the activation code.
   * 
   * @example
   * test_name
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The status of the activation code. Valid values:
   * 
   * *   activated
   * *   unactivated
   * *   expired
   * 
   * @example
   * activated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessTokenId)) {
      $dara.Model.validateArray(this.accessTokenId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


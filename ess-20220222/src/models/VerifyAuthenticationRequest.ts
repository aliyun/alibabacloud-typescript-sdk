// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyAuthenticationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to only check the authorization status. Valid values:
   * - true: Only checks the authorization status and does not create the service-linked role.
   * - false: Checks the authorization status and resource usage.
   * Default value: false.
   * 
   * @example
   * false
   */
  onlyCheck?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 12345678123*****
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      onlyCheck: 'OnlyCheck',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlyCheck: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


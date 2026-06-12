// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddServiceSharedAccountsRequestSharedAccounts extends $dara.Model {
  /**
   * @remarks
   * The permission type. Valid values:
   * 
   * - Deployable: The service can be deployed.
   * 
   * - Accessible: The service can be accessed.
   * 
   * This parameter is required.
   * 
   * @example
   * Accessible
   */
  permission?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  userAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      userAliUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * A unique identifier that you provide to ensure the idempotence of the request. The token can contain only ASCII characters and cannot be longer than 64 characters.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-63b8a060e9d54cxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The shared accounts and their permissions.
   * 
   * This parameter is required.
   */
  sharedAccounts?: AddServiceSharedAccountsRequestSharedAccounts[];
  /**
   * @remarks
   * The service sharing type. The default value is SharedAccount. Valid values:
   * 
   * - SharedAccount: The service is shared with a specified account.
   * 
   * - Reseller: The service is shared with a reseller.
   * 
   * @example
   * SharedAccount
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      sharedAccounts: 'SharedAccounts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      sharedAccounts: { 'type': 'array', 'itemType': AddServiceSharedAccountsRequestSharedAccounts },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sharedAccounts)) {
      $dara.Model.validateArray(this.sharedAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


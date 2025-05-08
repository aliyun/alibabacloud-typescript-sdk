// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddServiceSharedAccountsRequestSharedAccounts } from "./AddServiceSharedAccountsRequestSharedAccounts";


export class AddServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * The shared account and permissions of the service.
   * 
   * This parameter is required.
   */
  sharedAccounts?: AddServiceSharedAccountsRequestSharedAccounts[];
  /**
   * @remarks
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Reseller: The service is distributed.
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


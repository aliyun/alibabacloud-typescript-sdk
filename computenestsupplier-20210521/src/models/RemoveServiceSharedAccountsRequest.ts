// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
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
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
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
  /**
   * @remarks
   * Whitelist accounts for service sharing.
   * 
   * This parameter is required.
   */
  userAliUids?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUids: 'UserAliUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      type: 'string',
      userAliUids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userAliUids)) {
      $dara.Model.validateArray(this.userAliUids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


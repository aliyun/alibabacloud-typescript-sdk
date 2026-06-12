// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You must make sure that the token is unique for each request. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * The service sharing type. The default value is SharedAccount. Valid values:
   * 
   * - SharedAccount: The regular sharing type.
   * 
   * - Reseller: The reseller sharing type.
   * 
   * @example
   * SharedAccount
   */
  type?: string;
  /**
   * @remarks
   * The whitelisted accounts for service sharing.
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


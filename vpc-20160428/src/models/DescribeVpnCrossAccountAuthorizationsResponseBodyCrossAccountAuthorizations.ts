// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnCrossAccountAuthorizationsResponseBodyCrossAccountAuthorizations extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the IPsec-VPN connection belongs.
   * 
   * @example
   * 1250123456123456
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-vv8h0t3klfpaae****
   */
  bindInstance?: string;
  /**
   * @remarks
   * The type of resource that can be associated with the IPsec-VPN connection.
   * 
   * Only **CEN** can be returned, which indicates that the IPsec-VPN connection is authorized to be associated with the transit router of a Cloud Enterprise Network (CEN) instance that belongs to another Alibaba Cloud account.
   * 
   * @example
   * CEN
   */
  bindProduct?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account whose resources the IPsec-VPN connection is authorized to be associated with.
   * 
   * @example
   * 1210123456123456
   */
  bindUid?: number;
  /**
   * @remarks
   * The time when the authorization for the IPsec-VPN connection was created.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1658201810000
   */
  creationTime?: number;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bindInstance: 'BindInstance',
      bindProduct: 'BindProduct',
      bindUid: 'BindUid',
      creationTime: 'CreationTime',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bindInstance: 'string',
      bindProduct: 'string',
      bindUid: 'number',
      creationTime: 'number',
      vpnConnectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


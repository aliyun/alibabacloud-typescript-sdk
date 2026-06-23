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
   * The instance ID of the CEN instance to which the IPsec-VPN connection authorization is granted.
   * 
   * @example
   * cen-vv8h0t3klfpaae****
   */
  bindInstance?: string;
  /**
   * @remarks
   * The type of resource to which the IPsec-VPN connection is authorized.
   * 
   * The value is **CEN** only, which indicates that the IPsec-VPN connection is authorized to a cross-account Cloud Enterprise Network (CEN) instance. The IPsec-VPN connection can be attached to a transit router instance under the cross-account CEN instance.
   * 
   * @example
   * CEN
   */
  bindProduct?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the IPsec-VPN connection is authorized.
   * 
   * @example
   * 1210123456123456
   */
  bindUid?: number;
  /**
   * @remarks
   * The timestamp when the cross-account authorization was created for the IPsec-VPN connection.
   * 
   * The timestamp is in the UNIX format and represents the total number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC to the time when the cross-account authorization was created.
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

export class DescribeVpnCrossAccountAuthorizationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cross-account authorization information for the IPsec-VPN connection.
   */
  crossAccountAuthorizations?: DescribeVpnCrossAccountAuthorizationsResponseBodyCrossAccountAuthorizations[];
  /**
   * @remarks
   * The page number of the list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB04E39A-6F0C-36AC-BCA0-B6D371B90062
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountAuthorizations: 'CrossAccountAuthorizations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountAuthorizations: { 'type': 'array', 'itemType': DescribeVpnCrossAccountAuthorizationsResponseBodyCrossAccountAuthorizations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crossAccountAuthorizations)) {
      $dara.Model.validateArray(this.crossAccountAuthorizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


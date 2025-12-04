// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLeniPrivateIpAddressesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test_vpn1_pbr_route_54
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1675929918000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the certificate was updated.
   * 
   * @example
   * 1675929918000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP address.
   * 
   * @example
   * 10.0.****
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzaq3ypaqkdy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ipName: 'IpName',
      message: 'Message',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ipName: 'string',
      message: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLeniPrivateIpAddressesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListLeniPrivateIpAddressesResponseBodyContentData[];
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resourceGroupId: 'ResourceGroupId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListLeniPrivateIpAddressesResponseBodyContentData },
      resourceGroupId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLeniPrivateIpAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: ListLeniPrivateIpAddressesResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListLeniPrivateIpAddressesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


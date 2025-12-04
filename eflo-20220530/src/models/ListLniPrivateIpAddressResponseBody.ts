// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLniPrivateIpAddressResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1651734291000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * MAC address of the secondary private network
   * 
   * @example
   * 00-ff-84-15-ba-67
   */
  ipAddressMac?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * @example
   * sip-1hq1ql7vz
   */
  ipName?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-bp11hq1ql7vza3k4xz7q
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * Secondary private IP address of Lingjun network interface controller
   * 
   * @example
   * 10.42.5.92
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
   * rg-aekzt452sjgqm2y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      ipAddressMac: 'IpAddressMac',
      ipName: 'IpName',
      message: 'Message',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      ipAddressMac: 'string',
      ipName: 'string',
      message: 'string',
      networkInterfaceId: 'string',
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

export class ListLniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ListLniPrivateIpAddressResponseBodyContentData[];
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
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
      data: { 'type': 'array', 'itemType': ListLniPrivateIpAddressResponseBodyContentData },
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

export class ListLniPrivateIpAddressResponseBody extends $dara.Model {
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
   * The response parameters.
   */
  content?: ListLniPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission to do this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
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
      content: ListLniPrivateIpAddressResponseBodyContent,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLniPrivateIpAddressResponseBodyContent extends $dara.Model {
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
   * 2022-12-26 20:16:36
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
   * sip-xxxxx
   */
  ipName?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:ListVpdRouteEntries, arn=acs:eflo:cn-wulanchabu:1263399219805497:vpd_rte/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-2ze4uww7n6hsfzrwq77y
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The secondary private IP address of the Lingjun network interface controller.
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
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the rule.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The subnet instance ID.
   * 
   * @example
   * subnet-aj93mko8
   */
  subnetId?: string;
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
      subnetId: 'SubnetId',
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
      subnetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLniPrivateIpAddressResponseBody extends $dara.Model {
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
  content?: GetLniPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:GetLniPrivateIpAddress, arn=acs:eflo:cn-wulanchabu:1382782317087063:networkinterface/00
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * DBAD15D6-3F47-5B36-8A92-57C2919D13D0
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
      content: GetLniPrivateIpAddressResponseBodyContent,
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


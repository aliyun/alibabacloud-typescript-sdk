// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWuyingServerResponseBodyDataPrivateIpSets extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IP address is the primary private IP address. Valid values:
   * - true: The IP address is the primary private IP address.
   * - false: The IP address is a secondary private IP address.
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.0.0.1
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWuyingServerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bandwidth size, in Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time, in US English date and time format with a 12-hour clock.
   * 
   * @example
   * Sep 2, 2026 1:46:41 PM
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum number of private IP addresses per NIC, including the primary IP address.
   * 
   * @example
   * 10
   */
  eniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The expiration time, in US English date and time format with a 12-hour clock.
   * 
   * @example
   * Oct 3, 2026 12:00:00 AM
   */
  expiredTime?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * img-bp1234567890abcde
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Ubuntu 22.04
   */
  imageName?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 10.0.0.1
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-hangzhou+dir-abc123
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Default Workspace
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The workspace type.
   * 
   * @example
   * Simple
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The set of private IP addresses, including the primary and secondary IP addresses.
   */
  privateIpSets?: DescribeWuyingServerResponseBodyDataPrivateIpSets[];
  /**
   * @remarks
   * The status of the development host.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Whether ASP streaming connection is supported.
   * 
   * @example
   * true
   */
  supportASP?: boolean;
  /**
   * @remarks
   * The type of the system cloud disk.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system cloud disk, in GB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the development host.
   * 
   * @example
   * aig-bp1234567890abcde
   */
  wuyingServerId?: string;
  /**
   * @remarks
   * The name of the development host.
   * 
   * @example
   * my-dev-server
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      eniPrivateIpAddressQuantity: 'EniPrivateIpAddressQuantity',
      expiredTime: 'ExpiredTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      osType: 'OsType',
      privateIpSets: 'PrivateIpSets',
      status: 'Status',
      supportASP: 'SupportASP',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      wuyingServerId: 'WuyingServerId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bizRegionId: 'string',
      chargeType: 'string',
      createTime: 'string',
      eniPrivateIpAddressQuantity: 'number',
      expiredTime: 'string',
      imageId: 'string',
      imageName: 'string',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      osType: 'string',
      privateIpSets: { 'type': 'array', 'itemType': DescribeWuyingServerResponseBodyDataPrivateIpSets },
      status: 'string',
      supportASP: 'boolean',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      wuyingServerId: 'string',
      wuyingServerName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privateIpSets)) {
      $dara.Model.validateArray(this.privateIpSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWuyingServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the development host.
   */
  data?: DescribeWuyingServerResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeWuyingServerResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


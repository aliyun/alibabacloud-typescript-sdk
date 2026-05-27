// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWuyingServerResponseBodyDataPrivateIpSets extends $dara.Model {
  /**
   * @example
   * true
   */
  primary?: boolean;
  /**
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
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 10
   */
  eniPrivateIpAddressQuantity?: number;
  /**
   * @example
   * 2027-01-01T00:00:00Z
   */
  expiredTime?: string;
  /**
   * @example
   * img-bp1234567890abcde
   */
  imageId?: string;
  /**
   * @example
   * Ubuntu 22.04
   */
  imageName?: string;
  /**
   * @example
   * 10.0.0.1
   */
  networkInterfaceIp?: string;
  /**
   * @example
   * cn-hangzhou+dir-abc123
   */
  officeSiteId?: string;
  /**
   * @example
   * 默认工作区
   */
  officeSiteName?: string;
  /**
   * @example
   * Simple
   */
  officeSiteType?: string;
  /**
   * @example
   * Linux
   */
  osType?: string;
  privateIpSets?: DescribeWuyingServerResponseBodyDataPrivateIpSets[];
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @example
   * aig-bp1234567890abcde
   */
  wuyingServerId?: string;
  /**
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


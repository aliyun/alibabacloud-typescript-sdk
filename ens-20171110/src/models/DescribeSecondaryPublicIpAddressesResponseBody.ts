// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecondaryPublicIpAddressesResponseBodySecondaryPublicIpAddresses extends $dara.Model {
  /**
   * @remarks
   * The subnet mask of the CIDR block.
   * 
   * @example
   * 24
   */
  cidrMask?: number;
  /**
   * @remarks
   * The time when the secondary public IP address was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-07-25T09:43:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-beijing-15
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The gateway.
   * 
   * @example
   * 12.XXX.XXX.1
   */
  gateway?: string;
  /**
   * @remarks
   * The version of the IP address. Valid values:
   * 
   * *   **ipv4**
   * *   **ipv6**
   * 
   * @example
   * ipv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The Internet service provider. Valid values:
   * 
   * *   cmcc: China Mobile.
   * *   unicom: China Unicom.
   * *   telecom: China Telecom.
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * The secondary public IP address.
   * 
   * @example
   * 12.XXX.XXX.4
   */
  secondaryPublicIpAddress?: string;
  /**
   * @remarks
   * The ID of the secondary public IP address.
   * 
   * @example
   * spi-5wys0pio93c9f9ukzj2f2fwyr
   */
  secondaryPublicIpId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrMask: 'CidrMask',
      creationTime: 'CreationTime',
      ensRegionId: 'EnsRegionId',
      gateway: 'Gateway',
      ipVersion: 'IpVersion',
      isp: 'Isp',
      secondaryPublicIpAddress: 'SecondaryPublicIpAddress',
      secondaryPublicIpId: 'SecondaryPublicIpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrMask: 'number',
      creationTime: 'string',
      ensRegionId: 'string',
      gateway: 'string',
      ipVersion: 'string',
      isp: 'string',
      secondaryPublicIpAddress: 'string',
      secondaryPublicIpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecondaryPublicIpAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The array of returned secondary IP addresses.
   */
  secondaryPublicIpAddresses?: DescribeSecondaryPublicIpAddressesResponseBodySecondaryPublicIpAddresses[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secondaryPublicIpAddresses: 'SecondaryPublicIpAddresses',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secondaryPublicIpAddresses: { 'type': 'array', 'itemType': DescribeSecondaryPublicIpAddressesResponseBodySecondaryPublicIpAddresses },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.secondaryPublicIpAddresses)) {
      $dara.Model.validateArray(this.secondaryPublicIpAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


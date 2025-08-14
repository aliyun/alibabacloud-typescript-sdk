// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocksIpv6CidrBlock extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The type of the IPv6 CIDR block of the VPC. Valid values:
   * 
   * *   BGP (default): Alibaba Cloud Border Gateway Protocol (BGP) IPv6
   * *   ChinaMobile: China Mobile (single line)
   * *   ChinaUnicom: China Unicom (single line)
   * *   ChinaTelecom: China Telecom (single line)
   * 
   * >  If you are on the whitelist of single-line bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6Isp: 'Ipv6Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: 'string',
      ipv6Isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocks extends $dara.Model {
  ipv6CidrBlock?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocksIpv6CidrBlock[];
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'ipv6CidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: { 'type': 'array', 'itemType': DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocksIpv6CidrBlock },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6CidrBlock)) {
      $dara.Model.validateArray(this.ipv6CidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesSecondaryCidrBlocks extends $dara.Model {
  secondaryCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      secondaryCidrBlock: 'secondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.secondaryCidrBlock)) {
      $dara.Model.validateArray(this.secondaryCidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the VPC.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   * 
   * @example
   * 2408:XXXX:0:a600::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The IPv6 CIDR blocks of the VPC.
   */
  ipv6CidrBlocks?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocks;
  /**
   * @remarks
   * The information about the VPC secondary CIDR block.
   */
  secondaryCidrBlocks?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesSecondaryCidrBlocks;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6CidrBlocks: 'Ipv6CidrBlocks',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ipv6CidrBlock: 'string',
      ipv6CidrBlocks: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocks,
      secondaryCidrBlocks: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesSecondaryCidrBlocks,
    };
  }

  validate() {
    if(this.ipv6CidrBlocks && typeof (this.ipv6CidrBlocks as any).validate === 'function') {
      (this.ipv6CidrBlocks as any).validate();
    }
    if(this.secondaryCidrBlocks && typeof (this.secondaryCidrBlocks as any).validate === 'function') {
      (this.secondaryCidrBlocks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-5mv960yjhja0dh****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the network instance was attached to the CEN instance.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-30T07:53Z
   */
  childInstanceAttachTime?: string;
  /**
   * @remarks
   * The details about the network instance.
   */
  childInstanceAttributes?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-2zebdboka7d7t37vo****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * defaultvpc
   */
  childInstanceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the network instance belongs.
   * 
   * @example
   * 1688000000000000
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * @example
   * cn-beijing
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **VBR**: VBR
   * *   **CCN**: CCN instance
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  managedService?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADD98358-D265-4060-87CB-A2427F5A8944
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the network instance is attached to the CEN instance.
   * 
   * *   **Attaching**: The network instance is being attached to the CEN instance.
   * *   **Attached**: The network instance is attached to the CEN instance.
   * *   **Detaching**: The network instance is being detached from the CEN instance.
   * 
   * @example
   * Attached
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceAttachTime: 'ChildInstanceAttachTime',
      childInstanceAttributes: 'ChildInstanceAttributes',
      childInstanceId: 'ChildInstanceId',
      childInstanceName: 'ChildInstanceName',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      managedService: 'ManagedService',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceAttachTime: 'string',
      childInstanceAttributes: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes,
      childInstanceId: 'string',
      childInstanceName: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      managedService: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.childInstanceAttributes && typeof (this.childInstanceAttributes as any).validate === 'function') {
      (this.childInstanceAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6CidrBlocks } from "./DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesIpv6cidrBlocks";
import { DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesSecondaryCidrBlocks } from "./DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributesSecondaryCidrBlocks";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamPoolAllocationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom reserved CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The ID of the custom reserved CIDR block.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE9CDAE5-341E-5D0B-AC8A-2BAC707D3EB2
   */
  requestId?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 192.168.0.0/16
   */
  sourceCidr?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      requestId: 'RequestId',
      sourceCidr: 'SourceCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolAllocationId: 'string',
      requestId: 'string',
      sourceCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


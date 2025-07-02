// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamPoolCidrsResponseBodyIpamPoolCidrs extends $dara.Model {
  /**
   * @remarks
   * The provisioned CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The ID of the IPAM pool.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The status of the CIDR block provisioned to the IPAM pool. Valid values:
   * 
   * *   **Created**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolId: 'IpamPoolId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolId: 'string',
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


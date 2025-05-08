// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatTableEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Network Address Translation (NAT) gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * nat-5tawjw5j7sgd2deujxuk0****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * @example
   * snat-5tfjp36fsrb36zs36faj0****
   */
  snatEntryId?: string;
  /**
   * @remarks
   * The name of the SNAT entry.
   * 
   * @example
   * test0
   */
  snatEntryName?: string;
  /**
   * @remarks
   * The elastic IP address (EIP) specified in the SNAT entry.
   * 
   * @example
   * 58.XXXX.XXX.29
   */
  snatIp?: string;
  /**
   * @remarks
   * The information about the EIP specified in the SNAT entry.
   */
  snatIps?: string[];
  /**
   * @remarks
   * The source CIDR block specified in the SNAT entry.
   * 
   * @example
   * 10.1.0.50/32
   */
  sourceCIDR?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      snatIps: 'SnatIps',
      sourceCIDR: 'SourceCIDR',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      snatIps: { 'type': 'array', 'itemType': 'string' },
      sourceCIDR: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snatIps)) {
      $dara.Model.validateArray(this.snatIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


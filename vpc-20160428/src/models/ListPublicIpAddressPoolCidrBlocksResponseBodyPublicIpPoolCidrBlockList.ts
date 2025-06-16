// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicIpAddressPoolCidrBlocksResponseBodyPublicIpPoolCidrBlockList extends $dara.Model {
  /**
   * @remarks
   * The ID of the IP address pool.
   * 
   * @example
   * 47.0.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The CIDR blocks.
   * 
   * @example
   * 2022-05-10T01:37:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The information about the CIDR blocks.
   * 
   * @example
   * pippool-6wetvn6fumkgycssx****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The time when the CIDR block was created. The time is displayed in `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The total number of available IP addresses in the CIDR block.
   * 
   * @example
   * 20
   */
  totalIpNum?: number;
  /**
   * @remarks
   * The status of the CIDR block in the IP address pool. Valid values:
   * 
   * *   **Created**: available
   * *   **Deleting**: being deleted
   * *   **Modifying**: being modified
   * 
   * @example
   * 20
   */
  usedIpNum?: number;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      creationTime: 'CreationTime',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
      status: 'Status',
      totalIpNum: 'TotalIpNum',
      usedIpNum: 'UsedIpNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      creationTime: 'string',
      publicIpAddressPoolId: 'string',
      status: 'string',
      totalIpNum: 'number',
      usedIpNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


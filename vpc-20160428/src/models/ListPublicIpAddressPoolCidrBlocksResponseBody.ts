// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicIpAddressPoolCidrBlocksResponseBodyPublicIpPoolCidrBlockList extends $dara.Model {
  /**
   * @remarks
   * The CIDR block.
   * 
   * @example
   * 47.0.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the CIDR block was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-05-10T01:37:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * @example
   * pippool-6wetvn6fumkgycssx****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The status of the CIDR block in the IP address pool. Valid values:
   * - **Created**: available.
   * - **Deleting**: being deleted.
   * - **Modifying**: being modified.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The total number of available IP addresses in the CIDR block of the IP address pool.
   * 
   * @example
   * 20
   */
  totalIpNum?: number;
  /**
   * @remarks
   * The number of used IP addresses in the CIDR block of the IP address pool.
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

export class ListPublicIpAddressPoolCidrBlocksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no subsequent query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of CIDR blocks in the IP address pool.
   */
  publicIpPoolCidrBlockList?: ListPublicIpAddressPoolCidrBlocksResponseBodyPublicIpPoolCidrBlockList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      publicIpPoolCidrBlockList: 'PublicIpPoolCidrBlockList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      publicIpPoolCidrBlockList: { 'type': 'array', 'itemType': ListPublicIpAddressPoolCidrBlocksResponseBodyPublicIpPoolCidrBlockList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicIpPoolCidrBlockList)) {
      $dara.Model.validateArray(this.publicIpPoolCidrBlockList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPublicIpAddressPoolCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block.
   * 
   * >  You can specify only one of **CidrBlock** and **CidrMask**.
   * 
   * @example
   * 47.0.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The subnet mask of the CIDR block. After you enter the subnet mask, the system automatically allocates IP addresses.
   * 
   * Valid values: **24** to **28**.
   * 
   * >  You can specify only one of **CidrBlock** and **CidrMask**.
   * 
   * @example
   * 24
   */
  cidrMask?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the IP address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * pippool-6wetvn6fumkgycssx****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The region ID of the IP address pool to which you want to add the CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      cidrMask: 'CidrMask',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      cidrMask: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      publicIpAddressPoolId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


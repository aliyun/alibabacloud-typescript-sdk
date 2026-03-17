// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudConnectNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The private CIDR block.
   * 
   * @example
   * 172.XX.XX.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the CCN instance.
   * 
   * The description must be 2 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The description must start with a letter.
   * 
   * @example
   * ccndesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the CCN instance.
   * 
   * The name must be 2 to 100 characters in length and can contain letters, digits, periods (.), underscores (_),and hyphens (-). The name must start with a letter.
   * 
   * @example
   * ccnname
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CCN instance is deployed.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The private CIDR block used for Source Network Address Translation (SNAT).
   * 
   * @example
   * 172.XX.XX.0/25
   */
  snatCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snatCidrBlock: 'SnatCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snatCidrBlock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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
   * The description of the Cloud Connect Network (CCN) instance. 
   * 
   * The description must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * ccndesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the Cloud Connect Network (CCN) instance. 
   * 
   * The name must be 2 to 100 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * ccnname
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Cloud Connect Network (CCN) instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The SNAT private CIDR block.
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


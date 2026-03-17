// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudConnectNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CCN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccn-l9340rlu5ens*****
   */
  ccnId?: string;
  /**
   * @remarks
   * The private CIDR block.
   * 
   * @example
   * 10.10.10.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the CCN instance.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to allow the SAG instances associated with the same CCN instance to communicate with each other.
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  interworkingStatus?: string;
  /**
   * @remarks
   * The name of the CCN instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * Name
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CCN instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      interworkingStatus: 'InterworkingStatus',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cidrBlock: 'string',
      description: 'string',
      interworkingStatus: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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


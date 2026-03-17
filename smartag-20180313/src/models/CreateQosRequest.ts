// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the QoS policy.
   * 
   * The description must be 1 to 512 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * testdesc
   */
  qosDescription?: string;
  /**
   * @remarks
   * The name of the QoS policy.
   * 
   * The name must be 2 to 100 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * doctest
   */
  qosName?: string;
  /**
   * @remarks
   * The ID of the region where the QoS policy is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosDescription: 'QosDescription',
      qosName: 'QosName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosDescription: 'string',
      qosName: 'string',
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


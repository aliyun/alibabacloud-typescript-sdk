// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQosRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the QoS policy. The description must be 1 to 512 characters in length, and can contain digits, underscores (_), and hyphens (-). It must start with a letter or Chinese character.
   * 
   * @example
   * qosdes
   */
  qosDescription?: string;
  /**
   * @remarks
   * The ID of the QoS policy that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-awfxl1adxeqyk****
   */
  qosId?: string;
  /**
   * @remarks
   * The name of the QoS policy.
   * 
   * @example
   * doctest
   */
  qosName?: string;
  /**
   * @remarks
   * The region where the QoS policy is deployed.
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosDescription: 'QosDescription',
      qosId: 'QosId',
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
      qosId: 'string',
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


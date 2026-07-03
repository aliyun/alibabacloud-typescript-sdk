// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the QoS policy instance.
   * 
   * The description must be 1 to 512 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * testdesc
   */
  qosDescription?: string;
  /**
   * @remarks
   * The name of the QoS policy instance.
   * 
   * The name must be 2 to 100 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * doctest
   */
  qosName?: string;
  /**
   * @remarks
   * The region ID of the QoS policy instance.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQosCarRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The instance ID of the QoS speed limiting rule.
   * 
   * This parameter is required.
   * 
   * @example
   * qoscar-n5k8g97lihlph****
   */
  qosCarId?: string;
  /**
   * @remarks
   * The instance ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-awfxl1adxeqyk****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the region to which the QoS policy belongs.
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
      qosCarId: 'QosCarId',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosCarId: 'string',
      qosId: 'string',
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


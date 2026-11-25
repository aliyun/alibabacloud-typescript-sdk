// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2InstanceDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. This operation supports only Lindorm V2 architecture instances where ServiceType is lindorm_v2, lindorm_v2_multizone, or lindorm_v2_multizone_ha. For V1 instances, use the GetLindormInstance operation. GetLindormInstanceList does not return V2 architecture instances. When you create a V2 instance, you can obtain this value from the InstanceId response parameter of CreateLindormV2Instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1mq0tdzbx1m****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


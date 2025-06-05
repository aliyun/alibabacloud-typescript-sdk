// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeContainerGroupVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the elastic container instance.
   * 
   * This parameter is required.
   * 
   * @example
   * eci-2zelg8vwnlzdhf8hv****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The size of the volume after the volume is scaled up. Unit: GiB. Valid values:
   * 
   * *   Ultra disk (cloud_efficiency): 20 to 32768
   * *   Standard SSD (cloud_ssd): 20 to 32768
   * *   Enhanced SSD (cloud_essd): 20 to 32768
   * *   Basic disk (cloud): 5 to 2000
   * 
   * >  The capacity of the volume after the volume is scaled up must be greater than the original capacity of the volume. If the new capacity is equal to the original capacity of the volume, only the file system is scaled up.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  newSize?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the volume that is mounted to the elastic container instance. Only disk volumes can be scaled up.
   * 
   * This parameter is required.
   * 
   * @example
   * default-volume1
   */
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      containerGroupId: 'ContainerGroupId',
      newSize: 'NewSize',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      volumeName: 'VolumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      containerGroupId: 'string',
      newSize: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      volumeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


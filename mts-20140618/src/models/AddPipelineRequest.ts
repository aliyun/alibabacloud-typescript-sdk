// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the MPS queue. The name can be up to 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * test-pipeline
   */
  name?: string;
  /**
   * @remarks
   * The Message Service (MNS) configuration.
   * 
   * @example
   * {"Topic":"mts-topic-1"}
   */
  notifyConfig?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * AliyunMTSDefaultRole
   */
  role?: string;
  /**
   * @remarks
   * The type of the MPS queue. Valid values:
   * 
   * *   **Boost**: MPS queue with transcoding speed boosted.
   * *   **Standard**: standard MPS queue.
   * *   **NarrowBandHDV2**: MPS queue that supports Narrowband HD 2.0.
   * *   **AIVideoCover**: MPS queue for intelligent snapshot capture.
   * *   **AIVideoTag**: MPS queue for video tagging. The supported regions are China (Shanghai), China (Beijing), and China (Hangzhou).
   * 
   * Default value: **Standard**.
   * 
   * @example
   * Standard
   */
  speed?: string;
  /**
   * @remarks
   * The level of the MPS queue. Valid values: **1 to 3**.
   * 
   * @example
   * 1
   */
  speedLevel?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      speed: 'Speed',
      speedLevel: 'SpeedLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyConfig: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


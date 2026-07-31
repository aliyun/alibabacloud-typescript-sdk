// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedeployInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully stop the instance that is in the Running state.
   * 
   * Default value: false.
   * 
   * > A forced stop is equivalent to a typical server power-off. Data in the instance operating system that has not been written to storage devices is lost. Redeploy instances that are in the Stopped state whenever possible.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The instance ID. The instance must be in the Running or Stopped state.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1azkttqpldxgted****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceStop: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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


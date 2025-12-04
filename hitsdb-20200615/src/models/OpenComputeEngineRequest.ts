// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenComputeEngineRequest extends $dara.Model {
  cpuLimit?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  memoryLimit?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      cpuLimit: 'CpuLimit',
      instanceId: 'InstanceId',
      memoryLimit: 'MemoryLimit',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLimit: 'string',
      instanceId: 'string',
      memoryLimit: 'string',
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


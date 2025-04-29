// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetInstanceHealthRequest extends $dara.Model {
  /**
   * @remarks
   * The health status of the instance. Valid values:
   * 
   * *   Healthy: sets the instance as healthy.
   * *   Unhealthy: sets the instance as unhealthy.
   * 
   * This parameter is required.
   * 
   * @example
   * Healthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1ap6bro51a7fsa****
   */
  instanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthStatus: 'string',
      instanceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


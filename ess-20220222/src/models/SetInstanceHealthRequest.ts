// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetInstanceHealthRequest extends $dara.Model {
  /**
   * @remarks
   * The health status to set for the instance. Valid values:
   * 
   * - Healthy: Sets the instance to the healthy state.
   * - Unhealthy: Sets the instance to the unhealthy state.
   * 
   * This parameter is required.
   * 
   * @example
   * Healthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the instance in the scaling group.
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


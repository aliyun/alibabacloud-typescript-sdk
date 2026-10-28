// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDedicatedClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The dedicated cluster ID.
   * > You must specify either the **InstanceId** or **DedicatedClusterId** parameter.
   * 
   * @example
   * dtscluster_h3fl1cs217sx952
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The dedicated cluster name.
   * 
   * @example
   * dtscluster_test_001
   */
  dedicatedClusterName?: string;
  /**
   * @remarks
   * The instance ID.
   * > You must specify either the **InstanceId** or **DedicatedClusterId** parameter.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This is a global parameter and is not required for this API operation.
   * 
   * @example
   * The resource group ID. This is a global parameter and is not required for this API operation
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      dedicatedClusterName: 'DedicatedClusterName',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      dedicatedClusterName: 'string',
      instanceId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


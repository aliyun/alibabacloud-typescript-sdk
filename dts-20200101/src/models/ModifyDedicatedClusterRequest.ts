// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * > You must specify either the **InstanceId** or **DedicatedClusterId** parameter.
   * 
   * @example
   * dtscluster_h3fl1cs217sx952
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * dtscluster_test_001
   */
  dedicatedClusterName?: string;
  /**
   * @remarks
   * The instance ID of the cluster.
   * > You must specify either the **InstanceId** or **DedicatedClusterId** parameter.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The oversubscription ratio. Unit: %.
   * 
   * @example
   * 150
   */
  oversoldRatio?: number;
  ownerId?: string;
  /**
   * @remarks
   * The region where the DTS instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      dedicatedClusterName: 'DedicatedClusterName',
      instanceId: 'InstanceId',
      oversoldRatio: 'OversoldRatio',
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
      oversoldRatio: 'number',
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


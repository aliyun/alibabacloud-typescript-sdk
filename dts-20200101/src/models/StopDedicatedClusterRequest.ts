// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDedicatedClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You must specify one of the **InstanceId** and **DedicatedClusterId** parameters.
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
   * The ID of the instance.
   * 
   * >  You must specify one of the **InstanceId** and **DedicatedClusterId** parameters.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. This parameter is a global parameter and not required.
   * 
   * @example
   * The resource group ID. This parameter is a global parameter and not required.
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


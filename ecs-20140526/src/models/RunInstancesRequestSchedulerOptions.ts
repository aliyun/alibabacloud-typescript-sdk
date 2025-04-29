// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestSchedulerOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host cluster in which to create the instance. After this parameter is specified, the system selects one dedicated host from the specified cluster to create the instance.
   * 
   * > This parameter is valid only when the `Tenancy` parameter is set to `host`.
   * 
   * When you specify both the `DedicatedHostId` and `SchedulerOptions.DedicatedHostClusterId` parameters, take note of the following items:
   * 
   * *   If the specified dedicated host belongs to the specified dedicated host cluster, the instance is preferentially deployed on the specified dedicated host.
   * *   If the specified dedicated host does not belong to the specified dedicated host cluster, the instance cannot be created.
   * 
   * You can call the [DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html) operation to query the list of dedicated host cluster IDs.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterId: 'DedicatedHostClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


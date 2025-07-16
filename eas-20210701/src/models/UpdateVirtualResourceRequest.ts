// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirtualResourceRequestResources extends $dara.Model {
  /**
   * @remarks
   * The instance type of the public resource group.
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The priority of resource scheduling. A greater number indicates a higher priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the Lingjun resource quota.
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * quota185lqf994k6
   */
  quotaId?: string;
  /**
   * @remarks
   * The region in which the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the dedicated resource group. For information about how to obtain the ID of a dedicated resource group, see [ListResources](https://help.aliyun.com/document_detail/412133.html).
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * eas-r-g55ieatgg3butwrn7a
   */
  resourceId?: string;
  /**
   * @remarks
   * The maximum price of preemptible instances in a public resource group.
   * 
   * >  If you leave this parameter empty, preemptible instances are not used.
   * 
   * @example
   * 10.05
   */
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priority: 'Priority',
      quotaId: 'QuotaId',
      region: 'Region',
      resourceId: 'ResourceId',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priority: 'number',
      quotaId: 'string',
      region: 'string',
      resourceId: 'string',
      spotPriceLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the retention period of preemptible instances.
   * 
   * @example
   * true
   */
  disableSpotProtectionPeriod?: boolean;
  /**
   * @remarks
   * The resources in the virtual resource group.
   * 
   * >  If you specify this parameter, previous data is overwritten.
   */
  resources?: UpdateVirtualResourceRequestResources[];
  /**
   * @remarks
   * The new name of the virtual resource group.
   * 
   * @example
   * NewMyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      disableSpotProtectionPeriod: 'DisableSpotProtectionPeriod',
      resources: 'Resources',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSpotProtectionPeriod: 'boolean',
      resources: { 'type': 'array', 'itemType': UpdateVirtualResourceRequestResources },
      virtualResourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


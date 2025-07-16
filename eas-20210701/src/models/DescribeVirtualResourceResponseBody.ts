// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualResourceResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The instance type of the public resource group.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The priority of resource scheduling. A greater number specifies a higher priority.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The instance type of the public resource group.
   * 
   * @example
   * quota185lqxxxxxx
   */
  quotaId?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the dedicated resource group.
   * 
   * @example
   * eas-r-g55ieatgg3buxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The maximum price of preemptible instances in a public resource group.
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

export class DescribeVirtualResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the virtual resource group was created.
   * 
   * @example
   * 2024-10-16T17:52:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the retention period of preemptible instances was disabled.
   * 
   * @example
   * true
   */
  disableSpotProtectionPeriod?: boolean;
  features?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources in the virtual resource group.
   */
  resources?: DescribeVirtualResourceResponseBodyResources[];
  /**
   * @remarks
   * The number of deployed services.
   * 
   * @example
   * 1
   */
  serviceCount?: number;
  /**
   * @remarks
   * The time when the virtual resource group was last updated.
   * 
   * @example
   * 2024-10-16T19:52:49Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the virtual resource group.
   * 
   * @example
   * eas-vr-npovr28onap1xxxxxx
   */
  virtualResourceId?: string;
  /**
   * @remarks
   * The name of the virtual resource group.
   * 
   * @example
   * MyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      disableSpotProtectionPeriod: 'DisableSpotProtectionPeriod',
      features: 'Features',
      requestId: 'RequestId',
      resources: 'Resources',
      serviceCount: 'ServiceCount',
      updateTime: 'UpdateTime',
      virtualResourceId: 'VirtualResourceId',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      disableSpotProtectionPeriod: 'boolean',
      features: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeVirtualResourceResponseBodyResources },
      serviceCount: 'number',
      updateTime: 'string',
      virtualResourceId: 'string',
      virtualResourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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


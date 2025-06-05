// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $dara.Model {
  /**
   * @remarks
   * The category of resources based on stock status. Valid values:
   * 
   * *   WithStock: Resources are in sufficient stock.
   * *   ClosedWithStock: Resources are insufficient. We recommend that you use instance types that are in sufficient stock.
   * *   WithoutStock: Resources are sold out and will be replenished. We recommend that you use instance types that are in sufficient stock.
   * *   ClosedWithoutStock: Resources are sold out and will not be replenished. We recommend that you use instance types that are in sufficient stock.
   * 
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
   * @remarks
   * The ECS instance types or instance families that are available in the zones.
   * 
   * *   If the return value of the Type parameter is InstanceTypeFamily, this parameter indicates instance families that are returned.
   * *   If the return value of the Type parameter is InstanceType, this parameter indicates instance types that are returned.
   * 
   * @example
   * ecs.c6
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      statusCategory: 'StatusCategory',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusCategory: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


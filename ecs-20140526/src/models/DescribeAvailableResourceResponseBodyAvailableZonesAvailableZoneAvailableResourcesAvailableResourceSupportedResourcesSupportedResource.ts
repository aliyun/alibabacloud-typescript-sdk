// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $dara.Model {
  /**
   * @remarks
   * The maximum disk capacity.
   * 
   * This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.
   * 
   * @example
   * 2
   */
  max?: number;
  /**
   * @remarks
   * The minimum disk capacity.
   * 
   * This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * *   Available
   * *   SoldOut
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The resource category based on the stock level. Valid values:
   * 
   * *   WithStock: Resources are in sufficient stock.
   * *   ClosedWithStock: Resources are in insufficient stock. We recommend that you use other resources that are in sufficient stock.
   * *   WithoutStock: Resources are out of stock and will be replenished. We recommend that you use other resources that are in sufficient stock.
   * *   ClosedWithoutStock: Resources are out of stock and will not be replenished. We recommend that you use other resources that are in sufficient stock.
   * 
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
   * @remarks
   * The unit of the disk capacity.
   * 
   * This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.
   * 
   * @example
   * null
   */
  unit?: string;
  /**
   * @remarks
   * The resource.
   * 
   * @example
   * ecs.d1ne.xlarge
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      status: 'Status',
      statusCategory: 'StatusCategory',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      status: 'string',
      statusCategory: 'string',
      unit: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $dara.Model {
  /**
   * @remarks
   * The maximum disk capacity.
   * 
   * This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * 2
   */
  max?: number;
  /**
   * @remarks
   * The minimum disk capacity.
   * 
   * This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The state of the resource. Valid values:
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
   * The category of the resource based on stock status. Valid values:
   * 
   * *   WithStock: resources that are in sufficient stock
   * *   ClosedWithStock: resources that are in insufficient stock
   * *   WithoutStock: resources that are out of stock
   * 
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
   * @remarks
   * The unit of the disk capacity. This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * null
   */
  unit?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ecs.g5.large
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


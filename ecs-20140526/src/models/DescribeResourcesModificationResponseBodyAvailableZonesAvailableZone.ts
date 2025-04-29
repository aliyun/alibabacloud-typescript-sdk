// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResources } from "./DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResources";


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZone extends $dara.Model {
  /**
   * @remarks
   * The resources that are available in the zone.
   */
  availableResources?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResources;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      regionId: 'RegionId',
      status: 'Status',
      statusCategory: 'StatusCategory',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResources,
      regionId: 'string',
      status: 'string',
      statusCategory: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.availableResources && typeof (this.availableResources as any).validate === 'function') {
      (this.availableResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


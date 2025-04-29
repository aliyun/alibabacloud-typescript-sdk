// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources } from "./DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources";


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone extends $dara.Model {
  /**
   * @remarks
   * The resources that are available in the zone.
   */
  availableResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources;
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
   * The status of resources in the zone. Valid values:
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
   * The resource category based on the stock level in the zone. Valid values:
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
      availableResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources,
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


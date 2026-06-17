// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZones extends $dara.Model {
  /**
   * @remarks
   * The enumeration of statuses. Valid values:
   * 
   * - **UnSet**: The zone is not open for use.
   * 
   * - **SoldOut**: The resources in the zone are sold out.
   * 
   * - **WithStock**: The zone has available resources.
   * 
   * @example
   * UnSet
   */
  modeCode?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 50
   */
  priority?: string;
  /**
   * @remarks
   * The status of the zone. Valid values:
   * 
   * - **ON**: The zone is available.
   * 
   * - **OFF**: The zone is unavailable.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      modeCode: 'ModeCode',
      priority: 'Priority',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modeCode: 'string',
      priority: 'string',
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2FDB684-751D-424D-98B9-704BEA******
   */
  requestId?: string;
  /**
   * @remarks
   * A list of zones.
   */
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


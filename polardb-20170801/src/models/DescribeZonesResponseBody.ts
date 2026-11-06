// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZones extends $dara.Model {
  /**
   * @remarks
   * The enumeration values for various availability states. Valid values:
   * 
   * - **UnSet**: not available
   * - **SoldOut**: sold out
   * - **WithStock**: in stock
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
   * The zone status. Valid values:
   * - **ON**: available
   * - **OFF**: unavailable
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The zone ID.
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
   * The list of zones.
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


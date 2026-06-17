// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceZoneListResponseBodyZones extends $dara.Model {
  /**
   * @remarks
   * The name of the zone in the local language.
   * 
   * @example
   * Beijing Area G
   */
  localName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
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

export class DescribeAccessInstanceZoneListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31306819-C4BC-56F3-BBE6-*****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of zones.
   */
  zoneList?: string[];
  /**
   * @remarks
   * The list of zones.
   */
  zones?: DescribeAccessInstanceZoneListResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneList: 'ZoneList',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneList: { 'type': 'array', 'itemType': 'string' },
      zones: { 'type': 'array', 'itemType': DescribeAccessInstanceZoneListResponseBodyZones },
    };
  }

  validate() {
    if(Array.isArray(this.zoneList)) {
      $dara.Model.validateArray(this.zoneList);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


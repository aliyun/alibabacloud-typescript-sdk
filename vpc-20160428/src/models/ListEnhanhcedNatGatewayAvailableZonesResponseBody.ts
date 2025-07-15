// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnhanhcedNatGatewayAvailableZonesResponseBodyZones extends $dara.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Dubai Zone A
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the zone where the instance is deployed.
   * 
   * @example
   * me-east-1a
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

export class ListEnhanhcedNatGatewayAvailableZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8AE6F367-52EA-535D-9A3D-EF23D70527C8
   */
  requestId?: string;
  /**
   * @remarks
   * The list of zones.
   */
  zones?: ListEnhanhcedNatGatewayAvailableZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': ListEnhanhcedNatGatewayAvailableZonesResponseBodyZones },
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


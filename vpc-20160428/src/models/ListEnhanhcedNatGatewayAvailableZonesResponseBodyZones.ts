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


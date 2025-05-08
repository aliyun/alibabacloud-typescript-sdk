// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayZoneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The local name of the zone.
   * 
   * @example
   * I
   */
  localName?: string;
  supportQat?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      supportQat: 'SupportQat',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      supportQat: 'boolean',
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


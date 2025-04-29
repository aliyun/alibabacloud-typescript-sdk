// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * China (Hangzhou) Multi-zone 2(j,g)
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-MAZ2(j,g)
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


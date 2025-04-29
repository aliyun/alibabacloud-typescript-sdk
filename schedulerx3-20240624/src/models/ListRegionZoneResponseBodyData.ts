// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionZoneResponseBodyData extends $dara.Model {
  /**
   * @example
   * E
   */
  localName?: string;
  /**
   * @remarks
   * zone id
   * 
   * @example
   * cn-beijing-j
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


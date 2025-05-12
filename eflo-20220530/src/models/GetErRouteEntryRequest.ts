// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * er-rte-4q0jbylz
   */
  erRouteEntryId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      erRouteEntryId: 'ErRouteEntryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      erRouteEntryId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


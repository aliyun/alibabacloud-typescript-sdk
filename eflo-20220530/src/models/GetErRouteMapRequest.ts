// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErRouteMapRequest extends $dara.Model {
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
   * routing policy ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      erRouteMapId: 'string',
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


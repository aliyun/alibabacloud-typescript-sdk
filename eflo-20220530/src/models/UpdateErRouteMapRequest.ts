// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateErRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * test-example
   */
  description?: string;
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
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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


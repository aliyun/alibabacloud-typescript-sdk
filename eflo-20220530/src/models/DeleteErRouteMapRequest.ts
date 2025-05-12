// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteErRouteMapRequest extends $dara.Model {
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
   * routing policy Instance ID List
   * 
   * This parameter is required.
   */
  erRouteMapIds?: string[];
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
      erRouteMapIds: 'ErRouteMapIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      erRouteMapIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.erRouteMapIds)) {
      $dara.Model.validateArray(this.erRouteMapIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


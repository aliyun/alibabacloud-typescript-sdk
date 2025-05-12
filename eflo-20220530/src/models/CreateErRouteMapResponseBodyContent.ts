// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateErRouteMapResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * routing policy ID
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  static names(): { [key: string]: string } {
    return {
      erRouteMapId: 'ErRouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erRouteMapId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


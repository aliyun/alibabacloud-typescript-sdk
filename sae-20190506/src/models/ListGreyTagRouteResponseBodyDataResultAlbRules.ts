// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGreyTagRouteResponseBodyDataResultAlbRulesItems } from "./ListGreyTagRouteResponseBodyDataResultAlbRulesItems";


export class ListGreyTagRouteResponseBodyDataResultAlbRules extends $dara.Model {
  /**
   * @example
   * AND
   */
  condition?: string;
  /**
   * @example
   * 23
   */
  ingressId?: string;
  items?: ListGreyTagRouteResponseBodyDataResultAlbRulesItems[];
  /**
   * @example
   * s-6366-e3****-99**
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      ingressId: 'ingressId',
      items: 'items',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      ingressId: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultAlbRulesItems },
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


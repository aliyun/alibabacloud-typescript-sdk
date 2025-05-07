// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGreyTagRouteResponseBodyDataAlbRulesItems } from "./DescribeGreyTagRouteResponseBodyDataAlbRulesItems";


export class DescribeGreyTagRouteResponseBodyDataAlbRules extends $dara.Model {
  /**
   * @remarks
   * The condition mode of the canary release rule. Valid value: AND. This value indicates that that all conditions must be met.
   * 
   * @example
   * AND
   */
  condition?: string;
  /**
   * @remarks
   * The ID of the gateway routing rule.
   * 
   * @example
   * 23
   */
  ingressId?: string;
  items?: DescribeGreyTagRouteResponseBodyDataAlbRulesItems[];
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 22
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      ingressId: 'ingressId',
      items: 'items',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      ingressId: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataAlbRulesItems },
      serviceId: 'string',
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


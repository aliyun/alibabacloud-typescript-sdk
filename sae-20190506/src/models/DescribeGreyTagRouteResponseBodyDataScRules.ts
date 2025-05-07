// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGreyTagRouteResponseBodyDataScRulesItems } from "./DescribeGreyTagRouteResponseBodyDataScRulesItems";


export class DescribeGreyTagRouteResponseBodyDataScRules extends $dara.Model {
  /**
   * @remarks
   * The relationship between the conditions in the canary release rule. Valid values:
   * 
   * *   **AND**: The conditions are in the logical AND relation. All conditions must be met at the same time.
   * *   **OR**: The conditions are in the logical OR relation. At least one of the conditions must be met.
   * 
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * The conditions.
   */
  items?: DescribeGreyTagRouteResponseBodyDataScRulesItems[];
  /**
   * @remarks
   * The path of the canary release rule of the Spring Cloud application.
   * 
   * @example
   * /path
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      items: 'items',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataScRulesItems },
      path: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGreyTagRouteResponseBodyDataDubboRulesItems } from "./DescribeGreyTagRouteResponseBodyDataDubboRulesItems";


export class DescribeGreyTagRouteResponseBodyDataDubboRules extends $dara.Model {
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
   * The group of the Dubbo service that corresponds to the canary release rule.
   * 
   * @example
   * DUBBO
   */
  group?: string;
  /**
   * @remarks
   * The conditions.
   */
  items?: DescribeGreyTagRouteResponseBodyDataDubboRulesItems[];
  /**
   * @remarks
   * The method name of the Dubbo service.
   * 
   * @example
   * echo
   */
  methodName?: string;
  /**
   * @remarks
   * The name of the Dubbo service.
   * 
   * @example
   * com.alibaba.edas.boot.EchoService
   */
  serviceName?: string;
  /**
   * @remarks
   * The version of the Dubbo service.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      group: 'group',
      items: 'items',
      methodName: 'methodName',
      serviceName: 'serviceName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      group: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataDubboRulesItems },
      methodName: 'string',
      serviceName: 'string',
      version: 'string',
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


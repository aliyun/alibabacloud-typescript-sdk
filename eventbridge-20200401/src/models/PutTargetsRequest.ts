// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutTargetsRequestTargets } from "./PutTargetsRequestTargets";


export class PutTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * eventTest
   */
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * This parameter is required.
   * 
   * @example
   * ssr-send-to-vendor-test01
   */
  ruleName?: string;
  /**
   * @remarks
   * The event targets to be created or updated. For more information, see [Limits.](https://www.alibabacloud.com/help/en/eventbridge/latest/limits)
   * 
   * This parameter is required.
   */
  targets?: PutTargetsRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targets: { 'type': 'array', 'itemType': PutTargetsRequestTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


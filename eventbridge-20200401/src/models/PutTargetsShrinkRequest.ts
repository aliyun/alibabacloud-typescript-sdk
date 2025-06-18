// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutTargetsShrinkRequest extends $dara.Model {
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
   * The event targets to be created or updated. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * This parameter is required.
   */
  targetsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targetsShrink: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targetsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


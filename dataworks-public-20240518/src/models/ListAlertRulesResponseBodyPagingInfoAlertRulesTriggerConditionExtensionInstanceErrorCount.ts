// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorCount extends $dara.Model {
  /**
   * @remarks
   * The maximum number of instances on which an error occurs. Valid values: [1,10000].
   * 
   * @example
   * 10
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


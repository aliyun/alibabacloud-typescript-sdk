// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage extends $dara.Model {
  /**
   * @remarks
   * The maximum percentage of instances on which an error occurs in the workspace to the total number of instances. Valid values: [1-100].
   * 
   * @example
   * 5
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


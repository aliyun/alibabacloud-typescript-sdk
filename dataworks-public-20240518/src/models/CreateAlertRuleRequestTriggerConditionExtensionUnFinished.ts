// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRuleRequestTriggerConditionExtensionUnFinished extends $dara.Model {
  /**
   * @remarks
   * The latest completion time of the instance. The period is in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * 30:00
   */
  unFinishedTime?: string;
  static names(): { [key: string]: string } {
    return {
      unFinishedTime: 'UnFinishedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unFinishedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


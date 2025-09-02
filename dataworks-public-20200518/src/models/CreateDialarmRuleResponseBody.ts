// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert rule ID.
   * 
   * @example
   * 34988
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C636A747-7E4E-594D-94CD-2B4F8A9A9A63
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


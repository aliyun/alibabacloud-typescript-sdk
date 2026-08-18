// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Use the Id parameter instead.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  DIAlarmRuleId?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * C636A747-7E4E-594D-94CD-2B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'string',
      id: 'number',
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


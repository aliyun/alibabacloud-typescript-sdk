// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and is replaced by the Id parameter.
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
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * C636A747-7E4E-594D-94CD-2B4F8A9A9A63
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


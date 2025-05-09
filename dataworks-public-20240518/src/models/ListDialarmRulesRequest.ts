// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIAlarmRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule. If you leave this parameter empty, all alert rules of the task are queried.
   * 
   * @example
   * 34988
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The ID of the task for which alert rules are configured.
   * 
   * @example
   * 1000001
   */
  jobId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      jobId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


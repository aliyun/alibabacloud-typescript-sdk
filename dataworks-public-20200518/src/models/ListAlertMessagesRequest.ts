// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * *   MAIL
   * *   SMS Alert notifications can be sent by text message only in the Singapore, Malaysia (Kuala Lumpur), and Germany (Frankfurt) regions.
   * 
   * You can specify multiple notification methods. Separate them with commas (,).
   * 
   * @example
   * SMS,MAIL,PHONE
   */
  alertMethods?: string;
  /**
   * @remarks
   * The type of the alert rule. Valid values: GLOBAL, USER_DEFINE, and OTHER. The value GLOBAL indicates that the alert rule is a global alert rule. The value USER_DEFINE indicates that the alert rule is customized by a user. The value OTHER indicates that the alert rule is a rule of another type. You can specify multiple types. Separate them with commas (,).
   * 
   * @example
   * GLOBAL,USER_DEFINE,OTHER
   */
  alertRuleTypes?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the alert recipient.
   * 
   * @example
   * 123456
   */
  alertUser?: string;
  /**
   * @remarks
   * The baseline ID. This parameter takes effect if the AlertRuleTypes parameter is set to GLOBAL. You can configure either this parameter or the RemindId parameter.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-04-02T00:00:00+0800
   */
  beginTime?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-04-04T00:00:00+0800
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Minimum value: 1. Maximum value: 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The custom alert rule ID. This parameter takes effect if the AlertRuleTypes parameter is set to USER_DEFINE. You can configure either this parameter or the BaselineId parameter.
   * 
   * @example
   * 9527
   */
  remindId?: number;
  static names(): { [key: string]: string } {
    return {
      alertMethods: 'AlertMethods',
      alertRuleTypes: 'AlertRuleTypes',
      alertUser: 'AlertUser',
      baselineId: 'BaselineId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remindId: 'RemindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertMethods: 'string',
      alertRuleTypes: 'string',
      alertUser: 'string',
      baselineId: 'number',
      beginTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remindId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountSafetyIncidentRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Default value: zh.
   * 
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The event name code.
   * 
   * @example
   * RISKCONTROL_IMS_IMS_BAN_SUBUSER
   */
  caseCode?: string;
  /**
   * @remarks
   * The current page number. The value must be greater than 0.
   * 
   * @example
   * 1
   */
  current?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 2PTOHhN3YUeaPWzq9FLmpdZ9EOW
   */
  eventId?: string;
  /**
   * @remarks
   * The number of records per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The end time of the control action.
   * 
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishEndTime?: string;
  /**
   * @remarks
   * The start time of the control action.
   * 
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishStartTime?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * RES001
   */
  resourceId?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - **Executing**: In progress.
   * - **Removed**: Removed.
   * - **Alerting**: Alerting.
   * - **Ended**: Ended.
   * 
   * @example
   * Executing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      caseCode: 'CaseCode',
      current: 'Current',
      eventId: 'EventId',
      pageSize: 'PageSize',
      punishEndTime: 'PunishEndTime',
      punishStartTime: 'PunishStartTime',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      caseCode: 'string',
      current: 'string',
      eventId: 'string',
      pageSize: 'string',
      punishEndTime: 'string',
      punishStartTime: 'string',
      resourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


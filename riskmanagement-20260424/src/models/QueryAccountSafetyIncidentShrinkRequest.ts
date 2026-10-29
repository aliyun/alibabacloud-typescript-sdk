// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountSafetyIncidentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of control action codes.
   */
  actionCodesShrink?: string;
  /**
   * @remarks
   * The language. Default value: zh. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The set of cloud service codes.
   */
  businessCodesShrink?: string;
  /**
   * @remarks
   * The event name code.
   * > This parameter does not take effect if the CaseCodes parameter is not empty.
   * 
   * @example
   * RISKCONTROL_IMS_IMS_BAN_SUBUSER
   */
  caseCode?: string;
  /**
   * @remarks
   * The list of event name codes.
   */
  caseCodesShrink?: string;
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
   * > This parameter does not take effect if the EventIds parameter is not empty.
   * 
   * @example
   * 2PTOHhN3YUeaPWzq9FLmpdZ9EOW
   */
  eventId?: string;
  /**
   * @remarks
   * The list of event IDs.
   */
  eventIdsShrink?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
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
   * - **Executing**: The event is being executed.
   * - **Removed**: The event is removed.
   * - **Alerting**: The event is in the alerting state.
   * - **Ended**: The event has ended.
   * 
   * > This parameter does not take effect if the Statuses parameter is not empty.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The list of event statuses.
   */
  statusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionCodesShrink: 'ActionCodes',
      aliyunLang: 'AliyunLang',
      businessCodesShrink: 'BusinessCodes',
      caseCode: 'CaseCode',
      caseCodesShrink: 'CaseCodes',
      current: 'Current',
      eventId: 'EventId',
      eventIdsShrink: 'EventIds',
      pageSize: 'PageSize',
      punishEndTime: 'PunishEndTime',
      punishStartTime: 'PunishStartTime',
      resourceId: 'ResourceId',
      status: 'Status',
      statusesShrink: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodesShrink: 'string',
      aliyunLang: 'string',
      businessCodesShrink: 'string',
      caseCode: 'string',
      caseCodesShrink: 'string',
      current: 'string',
      eventId: 'string',
      eventIdsShrink: 'string',
      pageSize: 'string',
      punishEndTime: 'string',
      punishStartTime: 'string',
      resourceId: 'string',
      status: 'string',
      statusesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


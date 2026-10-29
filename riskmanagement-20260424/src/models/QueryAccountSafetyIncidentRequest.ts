// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountSafetyIncidentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of control action codes.
   */
  actionCodes?: string[];
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
  businessCodes?: string[];
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
  caseCodes?: string[];
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
  eventIds?: string[];
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
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      actionCodes: 'ActionCodes',
      aliyunLang: 'AliyunLang',
      businessCodes: 'BusinessCodes',
      caseCode: 'CaseCode',
      caseCodes: 'CaseCodes',
      current: 'Current',
      eventId: 'EventId',
      eventIds: 'EventIds',
      pageSize: 'PageSize',
      punishEndTime: 'PunishEndTime',
      punishStartTime: 'PunishStartTime',
      resourceId: 'ResourceId',
      status: 'Status',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodes: { 'type': 'array', 'itemType': 'string' },
      aliyunLang: 'string',
      businessCodes: { 'type': 'array', 'itemType': 'string' },
      caseCode: 'string',
      caseCodes: { 'type': 'array', 'itemType': 'string' },
      current: 'string',
      eventId: 'string',
      eventIds: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'string',
      punishEndTime: 'string',
      punishStartTime: 'string',
      resourceId: 'string',
      status: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actionCodes)) {
      $dara.Model.validateArray(this.actionCodes);
    }
    if(Array.isArray(this.businessCodes)) {
      $dara.Model.validateArray(this.businessCodes);
    }
    if(Array.isArray(this.caseCodes)) {
      $dara.Model.validateArray(this.caseCodes);
    }
    if(Array.isArray(this.eventIds)) {
      $dara.Model.validateArray(this.eventIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


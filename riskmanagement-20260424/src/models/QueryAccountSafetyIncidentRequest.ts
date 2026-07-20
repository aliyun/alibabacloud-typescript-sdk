// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountSafetyIncidentRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @example
   * RISKCONTROL_IMS_IMS_BAN_SUBUSER
   */
  caseCode?: string;
  /**
   * @example
   * 1
   */
  current?: string;
  /**
   * @example
   * 2PTOHhN3YUeaPWzq9FLmpdZ9EOW
   */
  eventId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  punishEndTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  punishStartTime?: string;
  /**
   * @example
   * RES001
   */
  resourceId?: string;
  /**
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


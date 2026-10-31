// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleTemplatesRequestListScheduleTemplatesCommand extends $dara.Model {
  /**
   * @remarks
   * The keyword for fuzzy matching by template name. If this parameter is empty or not specified, no filtering is applied.
   * 
   * @example
   * Hour
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 50. Maximum value: 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The scheduling templatetype. Valid values:
   * - BASE_SCHEDULE_TEMPLATE: basic scheduling template
   * - CONDITION_SCHEDULE_TEMPLATE: conditional scheduling template
   * If this parameter is not specified, all types are returned.
   * 
   * @example
   * BASE_SCHEDULE_TEMPLATE
   */
  scheduleTemplateType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scheduleTemplateType: 'ScheduleTemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scheduleTemplateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions for the scheduling template list. This is a JSON object that supports keyword search and pagination.
   * 
   * This parameter is required.
   */
  listScheduleTemplatesCommand?: ListScheduleTemplatesRequestListScheduleTemplatesCommand;
  /**
   * @remarks
   * The tenant ID, which indicates the tenant for the current operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the user who performs the operation.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listScheduleTemplatesCommand: 'ListScheduleTemplatesCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listScheduleTemplatesCommand: ListScheduleTemplatesRequestListScheduleTemplatesCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listScheduleTemplatesCommand && typeof (this.listScheduleTemplatesCommand as any).validate === 'function') {
      (this.listScheduleTemplatesCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


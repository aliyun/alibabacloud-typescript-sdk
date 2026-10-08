// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleTemplatesRequestListScheduleTemplatesCommand extends $dara.Model {
  /**
   * @example
   * 小时
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
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
   * This parameter is required.
   */
  listScheduleTemplatesCommand?: ListScheduleTemplatesRequestListScheduleTemplatesCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
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


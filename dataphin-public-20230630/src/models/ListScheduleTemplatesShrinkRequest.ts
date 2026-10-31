// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions for the scheduling template list. This is a JSON object that supports keyword search and pagination.
   * 
   * This parameter is required.
   */
  listScheduleTemplatesCommandShrink?: string;
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
      listScheduleTemplatesCommandShrink: 'ListScheduleTemplatesCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listScheduleTemplatesCommandShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


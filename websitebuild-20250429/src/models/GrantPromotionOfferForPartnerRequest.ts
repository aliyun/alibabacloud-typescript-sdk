// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantPromotionOfferForPartnerRequest extends $dara.Model {
  activityCode?: string;
  /**
   * @remarks
   * The activity ID.
   * 
   * @example
   * 232
   */
  activityId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * WECHAT
   */
  channel?: string;
  /**
   * @remarks
   * The employee code.
   * 
   * @example
   * WB02409424
   */
  employeeCode?: string;
  /**
   * @remarks
   * The operation remarks (audit information).
   * 
   * @example
   * hz-maven
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      activityCode: 'ActivityCode',
      activityId: 'ActivityId',
      belongId: 'BelongId',
      channel: 'Channel',
      employeeCode: 'EmployeeCode',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCode: 'string',
      activityId: 'string',
      belongId: 'string',
      channel: 'string',
      employeeCode: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


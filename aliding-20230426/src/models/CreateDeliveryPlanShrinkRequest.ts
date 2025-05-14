// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryPlanShrinkRequest extends $dara.Model {
  contentShrink?: string;
  /**
   * @example
   * 1699265024987
   */
  endTime?: number;
  /**
   * @example
   * 1028
   */
  resId?: string;
  /**
   * @example
   * 1699265024987
   */
  startTime?: number;
  tenantContextShrink?: string;
  userIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      endTime: 'EndTime',
      resId: 'ResId',
      startTime: 'StartTime',
      tenantContextShrink: 'TenantContext',
      userIdListShrink: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      endTime: 'number',
      resId: 'string',
      startTime: 'number',
      tenantContextShrink: 'string',
      userIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


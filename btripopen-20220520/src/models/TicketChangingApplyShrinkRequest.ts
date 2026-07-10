// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingApplyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disSubOrderId?: string;
  isVoluntary?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  modifyFlightInfoListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  otaItemId?: string;
  reason?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  whetherRetry?: boolean;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      isVoluntary: 'is_voluntary',
      modifyFlightInfoListShrink: 'modify_flight_info_list',
      otaItemId: 'ota_item_id',
      reason: 'reason',
      sessionId: 'session_id',
      whetherRetry: 'whether_retry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
      isVoluntary: 'number',
      modifyFlightInfoListShrink: 'string',
      otaItemId: 'string',
      reason: 'string',
      sessionId: 'string',
      whetherRetry: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


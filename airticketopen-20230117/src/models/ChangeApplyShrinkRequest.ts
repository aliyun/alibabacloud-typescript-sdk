// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeApplyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of passengers for the change.
   * 
   * This parameter is required.
   */
  changePassengerListShrink?: string;
  /**
   * @remarks
   * The target journey for the change.
   * 
   * This parameter is required.
   */
  changedJourneysShrink?: string;
  /**
   * @remarks
   * The contact information for the change.
   * 
   * This parameter is required.
   */
  contactShrink?: string;
  /**
   * @remarks
   * The order number.
   * 
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
  orderNum?: number;
  /**
   * @remarks
   * The buyer remarks.
   * 
   * @example
   * remark desc
   */
  remark?: string;
  /**
   * @remarks
   * The change type. Valid values:
   * - 0: voluntary change
   * - 1: flight schedule change or flight cancellation.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      changePassengerListShrink: 'change_passenger_list',
      changedJourneysShrink: 'changed_journeys',
      contactShrink: 'contact',
      orderNum: 'order_num',
      remark: 'remark',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePassengerListShrink: 'string',
      changedJourneysShrink: 'string',
      contactShrink: 'string',
      orderNum: 'number',
      remark: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


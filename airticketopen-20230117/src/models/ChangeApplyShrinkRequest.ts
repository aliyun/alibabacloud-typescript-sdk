// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeApplyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  changePassengerListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changedJourneysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
  orderNum?: number;
  /**
   * @example
   * remark desc
   */
  remark?: string;
  /**
   * @remarks
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


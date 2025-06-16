// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeApplyRequestChangePassengerList } from "./ChangeApplyRequestChangePassengerList";
import { ChangeApplyRequestChangedJourneys } from "./ChangeApplyRequestChangedJourneys";
import { ChangeApplyRequestContact } from "./ChangeApplyRequestContact";


export class ChangeApplyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  changePassengerList?: ChangeApplyRequestChangePassengerList[];
  /**
   * @remarks
   * This parameter is required.
   */
  changedJourneys?: ChangeApplyRequestChangedJourneys[];
  /**
   * @remarks
   * This parameter is required.
   */
  contact?: ChangeApplyRequestContact;
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
      changePassengerList: 'change_passenger_list',
      changedJourneys: 'changed_journeys',
      contact: 'contact',
      orderNum: 'order_num',
      remark: 'remark',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePassengerList: { 'type': 'array', 'itemType': ChangeApplyRequestChangePassengerList },
      changedJourneys: { 'type': 'array', 'itemType': ChangeApplyRequestChangedJourneys },
      contact: ChangeApplyRequestContact,
      orderNum: 'number',
      remark: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changePassengerList)) {
      $dara.Model.validateArray(this.changePassengerList);
    }
    if(Array.isArray(this.changedJourneys)) {
      $dara.Model.validateArray(this.changedJourneys);
    }
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


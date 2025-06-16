// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails } from "./ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails";
import { ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers } from "./ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers";
import { ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys } from "./ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys";
import { ChangeDetailListOfOrderNumResponseBodyDataListContact } from "./ChangeDetailListOfOrderNumResponseBodyDataListContact";
import { ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys } from "./ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys";
import { ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys } from "./ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys";


export class ChangeDetailListOfOrderNumResponseBodyDataList extends $dara.Model {
  changeFeeDetails?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails[];
  /**
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  changePassengers?: ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers[];
  /**
   * @example
   * 1
   */
  changeReasonType?: number;
  changedJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys[];
  /**
   * @example
   * reason desc
   */
  closeReason?: string;
  /**
   * @example
   * 1677415244000
   */
  closeUtcTime?: number;
  contact?: ChangeDetailListOfOrderNumResponseBodyDataListContact;
  /**
   * @example
   * 1677415276000
   */
  createUtcTime?: number;
  /**
   * @example
   * 1677415278000
   */
  lastConfirmUtcTime?: number;
  lastJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys[];
  /**
   * @example
   * 5988430***541
   */
  orderNum?: number;
  /**
   * @example
   * 2
   */
  orderStatus?: number;
  originalJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys[];
  /**
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @example
   * 1677415255000
   */
  paySuccessUtcTime?: number;
  /**
   * @example
   * 300
   */
  totalAmount?: number;
  /**
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      changeFeeDetails: 'change_fee_details',
      changeOrderNum: 'change_order_num',
      changePassengers: 'change_passengers',
      changeReasonType: 'change_reason_type',
      changedJourneys: 'changed_journeys',
      closeReason: 'close_reason',
      closeUtcTime: 'close_utc_time',
      contact: 'contact',
      createUtcTime: 'create_utc_time',
      lastConfirmUtcTime: 'last_confirm_utc_time',
      lastJourneys: 'last_journeys',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      originalJourneys: 'original_journeys',
      payStatus: 'pay_status',
      paySuccessUtcTime: 'pay_success_utc_time',
      totalAmount: 'total_amount',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFeeDetails: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails },
      changeOrderNum: 'number',
      changePassengers: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers },
      changeReasonType: 'number',
      changedJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys },
      closeReason: 'string',
      closeUtcTime: 'number',
      contact: ChangeDetailListOfOrderNumResponseBodyDataListContact,
      createUtcTime: 'number',
      lastConfirmUtcTime: 'number',
      lastJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys },
      orderNum: 'number',
      orderStatus: 'number',
      originalJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys },
      payStatus: 'number',
      paySuccessUtcTime: 'number',
      totalAmount: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeFeeDetails)) {
      $dara.Model.validateArray(this.changeFeeDetails);
    }
    if(Array.isArray(this.changePassengers)) {
      $dara.Model.validateArray(this.changePassengers);
    }
    if(Array.isArray(this.changedJourneys)) {
      $dara.Model.validateArray(this.changedJourneys);
    }
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    if(Array.isArray(this.lastJourneys)) {
      $dara.Model.validateArray(this.lastJourneys);
    }
    if(Array.isArray(this.originalJourneys)) {
      $dara.Model.validateArray(this.originalJourneys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue extends $dara.Model {
  /**
   * @example
   * true
   */
  struct?: boolean;
  /**
   * @example
   * true
   */
  cancelFeeInd?: boolean;
  /**
   * @example
   * true
   */
  changeFeeInd?: boolean;
  /**
   * @example
   * true
   */
  upgradeFeeInd?: boolean;
  /**
   * @example
   * false
   */
  reissueInd?: boolean;
  /**
   * @example
   * 0
   */
  penaltyTypeCode?: number;
  /**
   * @example
   * 1
   */
  penaltyApplyRangeCode?: number;
  /**
   * @example
   * 0
   */
  penaltyChargeTypeCode?: number;
  /**
   * @example
   * 300
   */
  fee?: number;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 30
   */
  penaltyPercent?: number;
  /**
   * @example
   * 48
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  endTime?: number;
  /**
   * @example
   * 0
   */
  timeUnitCode?: number;
  title?: string;
  depTime?: string;
  segmentNumber?: string;
  descInfos?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      struct: 'struct',
      cancelFeeInd: 'cancel_fee_ind',
      changeFeeInd: 'change_fee_ind',
      upgradeFeeInd: 'upgrade_fee_ind',
      reissueInd: 'reissue_ind',
      penaltyTypeCode: 'penalty_type_code',
      penaltyApplyRangeCode: 'penalty_apply_range_code',
      penaltyChargeTypeCode: 'penalty_charge_type_code',
      fee: 'fee',
      currency: 'currency',
      penaltyPercent: 'penalty_percent',
      startTime: 'start_time',
      endTime: 'end_time',
      timeUnitCode: 'time_unit_code',
      title: 'title',
      depTime: 'dep_time',
      segmentNumber: 'segment_number',
      descInfos: 'desc_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      struct: 'boolean',
      cancelFeeInd: 'boolean',
      changeFeeInd: 'boolean',
      upgradeFeeInd: 'boolean',
      reissueInd: 'boolean',
      penaltyTypeCode: 'number',
      penaltyApplyRangeCode: 'number',
      penaltyChargeTypeCode: 'number',
      fee: 'number',
      currency: 'string',
      penaltyPercent: 'number',
      startTime: 'number',
      endTime: 'number',
      timeUnitCode: 'number',
      title: 'string',
      depTime: 'string',
      segmentNumber: 'string',
      descInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.descInfos) {
      $dara.Model.validateMap(this.descInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

